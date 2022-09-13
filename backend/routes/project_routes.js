const express = require('express');
const router = express.Router();
const cors = require('cors');
const multer = require('multer');
var zipper = require('zip-local');

app.use(cors());

const  upload = multer({storage: multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './compiler/');},
    filename: function (req, file, callback) { callback(null, file.originalname);}})
}).array('file',2);

router.post('/upload', upload, async (req, res) => {
    console.log(`Files received: ${req.files.length}`);
    res.send({
      upload: true,
      files: req.files,
    });
});

const zip = zipper.sync.zip("./compiler/").compress().save("pack.zip");
router.get('download',(req, res, next) => {
    res.download(zip);
    res.status(200);
  });

router.get('/', (req, res)=>{
    res.send('Hello World');
});

router.listen(5001,()=>{
    console.log('Back-end started! running on http://localhost:5001');
});


module.exports = router;
