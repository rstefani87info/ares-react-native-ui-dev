
import path from 'path';
import * as files from '@ares/files';

function images( imageDirectory, mappingFile) {
    const imageFiles = files.getFilesRecursively(imageDirectory, /^*.(bmp|png|jpg|jpeg|svg|gif|webp|url)$/i , true);
    const ret = {};
    imageFiles.forEach(imageFile => {
        const imagePath = path.join(imageDirectory, imageFile);
        ret[files.getFileNameAsPropertyName(imageFile)] = Image.resolveAssetSource(imagePath);
    });
    files.setFileContent(mappingFile, JSON.stringify(ret), 'utf8'); 
    console.log('Images created: ', ret);
}

export default images();

