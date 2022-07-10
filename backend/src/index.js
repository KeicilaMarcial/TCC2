const express = require('express');
const cors = require('cors');
const multer = require('multer');
const shell = require('shelljs');

const app = express();
app.use(cors());
const upload = multer({
    dest: './compiler/',
  });

  app.post('/upload', upload.array('file'), async (req, res) => {
    console.log(`Files received: ${req.files.length}`);
    res.send({
      upload: true,
      files: req.files,
    });
    // miou
    //shell.chmod('+x','./exec.sh')
    // shell.exec('./exec.sh')
  });

app.get('/', (req, res)=>{
    res.send('Hello World');
});
app.listen(5001,()=>{
    console.log('Back-end started! running on http://localhost:5001');
});
