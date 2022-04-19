# 文件路径分隔符转换

> 文件路径分隔符转换，第一个参数为待处理路径，第二个参数为平台，可传入
> * win32 - windows默认路径，a\\\\b\\\\c形式
> * posix - Linux/Unix/Mac OS, a/b/c形式
```javascript

const convertFilepath = require('convert-filepath');
// 带盘符 - 默认分隔符
console.log(convertFilepath('C:\\a\\b\\c\\d')); // C:/a/b/c/d
console.log(convertFilepath('C:\\a\\b\\c\\..\\d')); // C:/a/b/d
console.log(convertFilepath('C:\\a\\b\\c\\..\\..\\d')); // C:/a/d
console.log(convertFilepath('C:\\a\\b\\c\\..\\..\\..\\d')); // C:/d
// 不带盘符 - 默认分隔符
console.log(convertFilepath('\\a\\b\\c\\d')); // /a/b/c/d
console.log(convertFilepath('\\a\\b\\c\\..\\d')); // /a/b/d
console.log(convertFilepath('\\a\\b\\c\\..\\..\\d')); // /a/d
console.log(convertFilepath('\\a\\b\\c\\..\\..\\..\\d')); // /d

// 带盘符 - 自定义\\分隔符
console.log(convertFilepath('C:\\a\\b\\c\\d', 'win32')); // C:\\a\\b\\c\\d
console.log(convertFilepath('C:\\a\\b\\c\\..\\d', 'win32')); // C:\\a\\b\\d
console.log(convertFilepath('C:\\a\\b\\c\\..\\..\\d', 'win32')); // C:\\a\\d
console.log(convertFilepath('C:\\a\\b\\c\\..\\..\\..\\d', 'win32')); // C:\\d
// 不带盘符 - 自定义\\分隔符
console.log(convertFilepath('\\a\\b\\c\\d', 'win32')); // \\a\\b\\c\\d
console.log(convertFilepath('\\a\\b\\c\\..\\d', 'win32')); // \\a\\b\\d
console.log(convertFilepath('\\a\\b\\c\\..\\..\\d', 'win32')); // \\a\\d
console.log(convertFilepath('\\a\\b\\c\\..\\..\\..\\d', 'win32')); // \\d

```
