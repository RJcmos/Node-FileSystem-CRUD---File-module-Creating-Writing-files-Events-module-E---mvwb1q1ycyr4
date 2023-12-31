const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
 try {
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created successfully.`);
  } catch (error) {
    console.error(`Error creating file ${fileName}: ${error.message}`);
    // Potentially rethrow or log more details here
  }
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
  try {
    const fileContent = await fs.readFile(fileName, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading file ${fileName}: ${error.message}`);
    throw error; // Rethrow to handle at a higher level
  }
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
try {
    const currentContent = await fs.readFile(fileName, 'utf8');
    const updatedContent = currentContent + newContent;
    await fs.writeFile(fileName, updatedContent);
    console.log(`File ${fileName} updated successfully.`);
  } catch (error) {
    console.error(`Error updating file ${fileName}: ${error.message}`);
    // Handle cases like missing file or invalid path
  }
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
  try {
    await fs.unlink(fileName);
    console.log(`File ${fileName} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file ${fileName}: ${error.message}`);
  }
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
