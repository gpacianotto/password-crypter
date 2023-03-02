const fs = window.require('fs');

module.exports = class FileService {
    static instance;
    static getInstance(){
        if(FileService.instance)
        {
            return FileService.instance;
        }
        else {FileService.instance = new FileService();}
        return FileService.instance;
    }


    readFileText(path) {
        console.log("Loading File");

        return fs.readFileSync(path).toString().split(String.fromCharCode(10));
    }
}