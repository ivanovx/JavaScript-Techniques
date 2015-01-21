var str = 'Sample string to show strings';

console.log(str);
console.log('length = ' + str.length);

console.log('str[' + 4 + '] = ' + str[4]);
console.log('str.charAt(' + 4 + ') = ' + str.charAt(4));

console.log('"' + str + '".indexOf("string") = ' + str.indexOf('string'));
console.log('"' + str + '".indexOf("string",8) = ' + str.indexOf('string', 8));
console.log('"' + str + '".indexOf("string",23) = ' + str.indexOf('string', 23));

console.log('"' + str + '".substr(3,5) = "' + str.substr(3, 5) + '"');
console.log('"' + str + '".substring(3,5) = "' + str.substring(3, 5) + '"');