const express = require("express")
const fs = require("fs")
const path = require("path")
const app =express();
var printData=""


fs.readdir('d:/',(err,files)=>{
    if(err)
    console.log(err)
    else{
        files.forEach(file => {
            if((path.extname(file)==".txt"||path.extname(file)==".doc"||path.extname(file)==".dox"||path.extname(file)==".pdf"||path.extname(file)==".pptx")||path.extname(file)==".jpg"){
                printData+="<p><img src=https://image.shutterstock.com/image-vector/document-file-vector-icon-illustration-260nw-453479089.jpg/> "+file+"</p>"
            }
            else{
                printData+="<p><img src=https://previews.123rf.com/images/jovanas/jovanas1810/jovanas181001136/110959550-file-icon-folder-icon.jpg/> "+file+" </p>"
            }
           //console.log(file)
        })
    }
});

app.get('/', function (req, res) {
    res.send(printData)
  })

  app.listen(2000||process.env.PORT,()=>{
      console.log("App runs in 2000")
  })