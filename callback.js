function downloadFile(url,callback){
    console.log(`Downloading file from ${url}`);

    setTimeout(() => {
        const data = `File data from ${url}`;
        console.log(`File downloaded from ${url}`);
        callback(null,data);
        
    }, 1000);
}

function writeFile(data,callback){
    console.log(`Writing file with data: ${data}`);

    setTimeout(() => {
        const fileName = 'file.txt';
        console.log(`File written with data: ${data}`);
        callback(null,fileName);
    }, 1000);
}

function uploadFile(fileName,url,callback){
    console.log(`Uploading file ${fileName} to ${url}`);

    setTimeout(() => {
        console.log(`File ${fileName} uploaded to ${url}`);
        callback(null,`File uploaded to ${url}`);
    }, 1000);
}

function chainOperations(){
    const url = 'http://example.com/file.txt';
    const uploadUrl = 'http://example.com/upload';

    downloadFile(url, (err,data)=>{
        if(err){
            console.error(`Error downloading file: ${err}`);
            return;
        }
        writeFile(data, (err,fileName)=>{
            if(err){
                console.error(`Error writing file: ${err}`);
                return;
            }
            uploadFile(fileName, uploadUrl, (err, response)=>{
                if(err){
                    console.error(`Error uploading file: ${err}`);
                    return;
                }
                console.log(`Final response: ${response}`);
            });
        });
    })
}
