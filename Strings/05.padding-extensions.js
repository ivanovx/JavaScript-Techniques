var string = 'Sample string';

console.log('original: "' + string + '"');
console.log('padLeft(30) ->   "' + string.padLeft(30).htmlEscape() + '"');
console.log('padRight(30) ->  "' + string.padRight(30).htmlEscape() + '"');
console.log('padLeft(30) ->   "' + string.padLeft(30,"-")+ '"');
console.log('padRight(30) ->  "' + string.padRight(30,"-").htmlEscape() + '"');