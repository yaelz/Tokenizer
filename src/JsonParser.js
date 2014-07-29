"use strict";

function JsonParser () {
}

JsonParser.parse = function parse (str) {
    var length = str.length;
    var index = 0;
    var tokenAndIndex;
    var valString;
    var rest = str;
    while (index < length) {
        tokenAndIndex = Tokenizer.getNextToken(rest);
        valString = tokenAndIndex[0];
        if (TypeUtils.isObject(valString)) {
            return JsonParser.parseObject(valString);
        }
        if (TypeUtils.isNumber(valString)) {
            return Number(valString);
        }
        if (TypeUtils.isArray(valString)) {
            return JsonParser.parseArray(valString);
        }
        if (TypeUtils.isBoolean(valString)) {
            return JsonParser.parseBoolean(valString);
        }
        if (TypeUtils.isString(valString)) {
            return JsonParser.parseString(valString);
        }
        index = tokenAndIndex[1];
        rest = rest.substring(index);
    }
};

JsonParser.parseString = function parseString(valString) {
    return valString.substring(1, valString.length - 1);
};

JsonParser.parseArray = function parseArray(valString) {
    if (valString == "[]") {
        return [];
    }
    var innerStr = valString.substring(1, valString.length - 1);
    var tokenAndIndex;
    var strLength = innerStr.length;
    var tokenLength;
    var token;
    var parsedValue;
    var retArr = [];

    while (strLength > 0) {
        tokenAndIndex = Tokenizer.getNextToken(innerStr);
        token = tokenAndIndex[0];
        tokenLength = tokenAndIndex[1];
        innerStr = innerStr.substring(tokenLength+1); // +1 for the ","
        strLength = innerStr.length;
        parsedValue = JsonParser.parse(token);
        retArr.push(parsedValue);
    }
    return retArr;
};

JsonParser.parseObject = function parseObject (str) {
    if (str === "{}") {
        return {};
    }
    var obj = {};
    var length = str.length;
    var innerStr = str.substring(1, length - 1);
    var index = 0;
    var keyAndIndex;
    var keyString;
    var key;
    var valueStartIndex;
    var innerStr;
    var valString;
    var value;

    while (index < length){
        innerStr = innerStr.substring(index).trim();
        keyAndIndex = Tokenizer.getNextToken(innerStr);
        keyString = keyAndIndex[0];
        index += keyString.length;
        key = keyString.substring(1, keyString.length - 1).trim();
        valueStartIndex = keyAndIndex[1] + 1; // +1 for the ":"
        innerStr = innerStr.substring(valueStartIndex);
        length = innerStr.length;
        valString = Tokenizer.getNextToken(innerStr);
        console.log(valString);
        value = JsonParser.parse(valString[0]);
        index = valString[1];

        obj[key] = value;
        index+=1; // +1 for the "," if there's another expression
    }
    return obj;
};

JsonParser.parseNumber = function parseNumber (str) {
    return Number(str);
};

JsonParser.parseBoolean = function parseBoolean(valString) {
    return (valString == "false") != Boolean(valString);
};