﻿function StringBuilder() {
   return {
        strs: [],
        len: 0,
        append: function (str) {
            this.strs[this.len++] = str;
            return this;
        },
        toString: function () {
            return this.strs.join("");
        }
    };
}

var count = 30000;
var s = 'Test string!';
var str = '';

for (var i = 0; i < count; i++) {
    str += s + s + s + s + s;
}

var stringBuilder = new StringBuilder();

for (var i = 0; i < count; i++) {
    stringBuilder.append(s).append(s).append(s).append(s).append(s);
}

var result = stringBuilder.toString();
console.log(result);