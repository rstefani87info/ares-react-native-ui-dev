
import path from 'path';
import * as files from '@ares/files';

function setTranslation(i18nDirectory, lang, key, value) {
    const i18nFiles = files.getFilesRecursively(i18nDirectory, "/^*.(json)$/i" , true);
    const ret = {};
    i18nFiles.forEach(i18nFile => {
        const group = i18nFile.match("/(?!"+lang+")\.json$/i");
        const i18nPath = path.join(i18nDirectory, i18nFile);
        if(!group){
            return;
            //TODO: use AI (deepl or/and others) to set translations
        }
        _setTranslation(i18nPath, key, value);
    });
    files.setFileContent(mappingFile, JSON.stringify(ret), 'utf8'); 
    console.log('Images created: ', ret);
}

export default setTranslation;

function _setTranslation(i18nPath, key, value) {
    console.log("Updating: ", i18nPath, key, value);
    const content = JSON.parse(files.getFileContent(i18nPath)); 
    eval(  'content.' + key + ' = ' + JSON.stringify(value));
    files.setFileContent(i18nPath, JSON.stringify(content), 'utf8');
}