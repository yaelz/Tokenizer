"use strict";

function Tokenizer () {

}

//Tokenizer.parseBoolean = function parseBoolean(valString) {
//    return (valString == "false") != Boolean(valString);
//}

Tokenizer.getNextToken = function getNextToken(str) {
    var curStr = '';
    var length = str.length;
    var index = 0;
    while (index < length) {
        curStr += str.charAt(index);
        if (TypeUtils.isNumber(curStr) ||
            TypeUtils.isBoolean(curStr) ||
            TypeUtils.isArray(curStr) ||
            TypeUtils.isObject(curStr) ||
            TypeUtils.isString(curStr)) {
            return [curStr, ++index];
        }
        index++;
    }
};

