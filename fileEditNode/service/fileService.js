
 const fs = require("fs");
 const bodyParser = require('body-parser')


class FileService{

    constructor(){}
  
    write(fileName,req) {

      var finalcontent='';
      var fcontent=[];
      fcontent  = req.body;
      fcontent.forEach(content => {
      //console.log(content.name);
      var line =content.name+':'+content.value;
      finalcontent=finalcontent+line+'\r\n';
      });
     
      return new Promise((resolve, reject) => {
    
        fs.writeFile(fileName,finalcontent, (err, data) => {
    
          if (err) {
    
            reject (err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
    
            return        // and we don't want to go any further
    
          }
          resolve(finalcontent)
        })
      })
    } //end of write method
  
  read (fileName) {
  
    return new Promise((resolve, reject) => {
  
      fs.readFile(fileName,'UTF-8', (err, data) => {
  
        if (err) {
  
          reject (err)  
  
          return        
  
        }
        resolve(data)
  
      })
  
    })
  
  } // end of getfile
  
  }
  
  module.exports=FileService;
  