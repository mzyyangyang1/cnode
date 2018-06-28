// 程序入口
// 
const express = require('express');
const app = express();
const expressArtTemplate = require('express-art-template');
const router = require('./routes/router');
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(3000);
});

app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));
app.engine('html',expressArtTemplate);
app.use(router);
app. get('/',(req, res)=>{
    res.send('Hello Express');
})