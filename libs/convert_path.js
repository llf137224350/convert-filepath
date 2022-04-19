const dirSplit = require('dir-split');
const win32 = 'win32';
const posix = 'posix';

function convertPath(path, separator) {
  separator = win32 === separator ? win32 : posix;
  const paths = dirSplit(path, separator === win32 ? '\\\\' : '/');
  if (paths.length) {
    return paths[paths.length - 1];
  }
  return '';
}

module.exports = convertPath;
