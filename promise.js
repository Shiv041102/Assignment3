function downloadData(url){
    return new Promise((resolve,reject)=>{
        console.log(`Downloading data from ${url}`);
        setTimeout(() => {
            if(url=='http://example.com/file.txt'){
            const data = `Data from ${url}`;
            console.log(`Data downloaded from ${url}`);
            resolve(data);
            }
            else{
                reject('Invalid URL');
            }
        }, 1000);
    
    }
)
}

function writeData(data){
    return new Promise((resolve,reject)=>{
        console.log(`Writing data: ${data}`);
        setTimeout(() => {
            const fileName = 'file.txt';
            console.log(`Data written to ${fileName}`);
            resolve(fileName);
        }, 1000);
    })
}

function uploadData(fileName,url){
    return new Promise((resolve,reject)=>{
        console.log(`Uploading file ${fileName} to ${url}`);
        setTimeout(() => {
            console.log(`File ${fileName} uploaded to ${url}`);
            resolve(`File uploaded to ${url}`);
        }, 1000);
    })
}

function chainOperationsWithPromises(){
    const url = 'http://example.com/file.txt';
    const uploadUrl = 'http://example.com/upload';

    downloadData(url)
        .then(data => writeData(data))
        .then(fileName => uploadData(fileName, uploadUrl))
        .then(response => console.log(`Final response: ${response}`))
        .catch(err => console.error(`Error: ${err}`));
}