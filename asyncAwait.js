function downloadData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "valid-url") {
        resolve("Data downloaded successfully");
      } else {
        reject(new Error("Invalid URL"));
      }
    }, 2000);
  });
}

function writeData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const fileName = "file.txt";
      console.log(`Writing data to ${fileName}`);
      resolve(fileName);
    }, 2000);
  });
}

function uploadData(fileName, url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Uploading ${fileName} to ${url}`);
      resolve("Upload successful");
    }, 2000);
  });
}

async function chainOperationsWithAsyncAwait() {
  try {
    const url = "valid-url";
    const uploadUrl = "http://example.com/upload";

    const data = await downloadData(url);
    console.log(data);

    const fileName = await writeData(data);
    console.log(`File written: ${fileName}`);

    const response = await uploadData(fileName, uploadUrl);
    console.log(response);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}