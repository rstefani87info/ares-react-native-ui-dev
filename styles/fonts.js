
import path from 'path';
import fs from 'fs';
import * as files from '@ares/files';

 function fontFamilies(fontDirectory, mappingFile) {
  const fontFiles = fs.readdirSync(fontDirectory);
  const ret = {};
  fontFiles.forEach(fontFile => {
    const fontPath = path.join(fontDirectory, fontFile, `${fontFile}.ttf`);
    const fontData = fs.readFileSync(fontPath);
    const fontBase64 = fontData.toString('base64');
    ret[fontFile] = {
      fontFamily: fontFile,
      src: `url(data:font/ttf;charset=utf-8;base64,${fontBase64})`,
    };
  });
  files.setFileContent(mappingFile, JSON.stringify(ret), 'utf8');  
}

export default fontFamilies();