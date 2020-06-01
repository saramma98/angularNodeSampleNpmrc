const FileService=require('../service/fileService')
const futil=new FileService();

class fileEditorController{ 

    writeFileController (req, res)  {
    
    console.log(req.body);
    futil.write('npmrcFile',req)

    .then(data =>res.json(data))

    .catch(err => res.send(err))
  
    }  //end of writeFileController


readFileController= (req, res) => {
    
    futil.read('npmrcFile')

    .then(data =>res.json(data))

    .catch(err => res.send(err))

    } //end of readFileController


}
module.exports=fileEditorController;