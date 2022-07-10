const express = require('express');
const cors = require('cors');
const multer = require('multer');
const shell = require('shelljs');
const app = express();
const fs = require('fs');
const path = require('path');

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
    });
  });

app.get('/', (req, res)=>{
    res.send('Hello World');
});
app.listen(5001,()=>{
    console.log('Back-end started! running on http://localhost:5001');
});
