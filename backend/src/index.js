const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const path = require('path');
const fs = require('fs-extra');
var zipper = require('zip-local');

app.use(cors());

const  upload = multer({storage: multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './compiler/');},
    filename: function (req, file, callback) { callback(null, file.originalname);}})
}).array('file',2);

  app.post('/upload', upload, async (req, res) => {
    console.log(`Files received: ${req.files.length}`);
    res.send({
      upload: true,
      files: req.files,
    }
    );
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        fs.unlinkSync('./compiler/data.csv')
        fs.unlinkSync('./compiler/inputMap.map')

        fs.readdir('./compiler/', (err, files) => {

            files.forEach(file => {
               if (path.extname(file) === '.gdf' || path.extname(file) === '.net') {
                fs.move(`./compiler/${file}`, `./download/${file}`, err => {
                         if (err) throw err;
                         console.log('Moving ' + file);
                     });
               }
            })
          })

      } catch(err) {
        console.error(err)
      }
  });

app.get('/download',(req, res, next) => {
    zipper.sync.zip("./download/").compress().save("./download/pack.zip");
    res.download('./download/pack.zip');
    res.status(200);
    try {
        fs.readdir('./download/', (err, files) => {
            files.forEach(file => {
                fs.unlinkSync(`./download/${file}`)
            })
          })
      } catch(err) {
        console.error(err)
      }
  });

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(5001,()=>{
    console.log('Back-end started! running on http://localhost:5001');
});
