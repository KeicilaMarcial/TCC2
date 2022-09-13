const express = require('express');
const cors = require('cors');
const multer = require('multer');
// const shell = require('shelljs');
const app = express();
const path = require('path');
const fs = require('fs');
const shell = require('child_process').execSync ;

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
    // apagando arquivos  com delay de 1 segundo
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        fs.unlinkSync('./compiler/data.csv')
        fs.unlinkSync('./compiler/inputMap.map')

      } catch(err) {
        console.error(err)
      }
  });

app.get('/download',(req, res, next) => {
    const src = './compiler';
    const dist= '../files';
    // shell(`mv ${src} ${dist}`);

    zipper.sync.zip("./compiler/").compress().save("./compiler/pack.zip");
    res.download('./compiler/pack.zip');
    res.status(200);
  });

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(5001,()=>{
    console.log('Back-end started! running on http://localhost:5001');
});
