"use strict";

function TypeUtils () {

}

TypeUtils.isNumber = function isNumber(valString) {
    return !isNaN(valString);
};

TypeUtils.isBoolean = function isBoolean(valString) {
    return (valString === "true") || (valString === "false");
};

TypeUtils.isArray = function isArray(valString) {
    if (valString.charAt(0) !== '[') {
        return false;
    }
    var len = valString.length;
    var str = valString;
    var numOfUnbalanced = 1;
    var index = 1;
    while (index < len) {
        if (str.charAt(index) === '[') {
            numOfUnbalanced++;
        } else if (str.charAt(index) === ']') {
            numOfUnbalanced--;
        }
        index++;
    }
    return numOfUnbalanced === 0;
};

TypeUtils.isString = function isString(valString) {
    var len = valString.length;
    return valString.charAt(0) === '"' && valString.charAt(len-1) === '"' && valString !== '"';
};

TypeUtils.isObject = function isObject(valString) {
    if (valString.charAt(0) !== '{') {
        return false;
    }
    var len = valString.length;
    var str = valString;
    var numOfUnbalanced = 1;
    var index = 1;
    while (index < len) {
        if (str.charAt(index) === '{') {
            numOfUnbalanced++;
        } else if (str.charAt(index) === '}') {
            numOfUnbalanced--;
        }
        index++;
    }
    return numOfUnbalanced === 0;
};

TypeUtils.isValidValue = function isValidValue(str) {
    return
        TypeUtils.isNumber(str) ||
        TypeUtils.isBoolean(str) ||
        TypeUtils.isArray(str)  ||
        TypeUtils.isString(str) ||
        TypeUtils.isObject(str);
};
