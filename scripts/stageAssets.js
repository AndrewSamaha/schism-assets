require('dotenv').config()
var path = require('path')
const fse = require('fs-extra')
const fs = require('fs')

const DEV_FOLDER = './dev/assets';
const STAGING_FOLDER = './staging/assets';

const fileExtensionsToCopy = [
    '.gltf',
    '.png'
]

const foldersToCopy = [
    'buildings',
    'character',
    'resources',
    'textures',
    'ui'
]

const filterFunc = (src, dest) => {
    const copyTest = (src, dest) => {
        if (path.basename[0] === '.') return false;                         // don't copy hidden files/folders
        if (fs.lstatSync(src).isDirectory()) return true;                   // do copy directories
        if (fileExtensionsToCopy.includes(path.extname(src))) return true;  // only copy thes file extensions
        return false;
    }
    const copyResult = copyTest(src, dest)
    if (!copyResult) return copyResult;
    console.log(src, ' -> ', dest)
    
    return copyResult;
}

console.log('removing existing staging folder ', STAGING_FOLDER)
fs.rmSync(STAGING_FOLDER, { recursive: true, force: true });

console.log('copying assets from ', DEV_FOLDER, ' to ', STAGING_FOLDER)
foldersToCopy.forEach((folder) => {
    fse.copySync(`${DEV_FOLDER}/${folder}`, `${STAGING_FOLDER}/${folder}`, {
        filter: filterFunc
    })
})
