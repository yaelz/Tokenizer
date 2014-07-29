describe("TypeUtilsTest", function() {
    describe("Is number", function() {
        it("should return true on a number", function() {
            expect(TypeUtils.isNumber('3')).toEqual(true);
        });

        it("should return false on an argument that's not a number", function() {
            expect(TypeUtils.isNumber('3 45')).toEqual(false);
        });
    });

    describe("Is boolean", function() {
        it("should return true on a boolean", function() {
            expect(TypeUtils.isBoolean('true')).toEqual(true);
        });
    });

    describe("Is boolean", function() {
        it("should return true on a boolean", function() {
            expect(TypeUtils.isBoolean('tru')).toEqual(false);
        });
    });

    describe("Is array", function() {
        it("should return true on a an empty array", function() {
            expect(TypeUtils.isArray('[]')).toEqual(true);
        });

        it("should return false on one opening parenthesis", function() {
            expect(TypeUtils.isArray('[')).toEqual(false);
        });
    });

    describe("Is String", function() {
        it("should return true on a string", function() {
            expect(TypeUtils.isString('"hi"')).toEqual(true);
        });
        it("should return false on a string without a close quotation", function() {
            expect(TypeUtils.isString('"hi')).toEqual(false);
        });
        it("should return true on a string", function() {
            expect(TypeUtils.isString('3')).toEqual(false);
        });
    });
    describe("Is object", function() {
        it("should return false on an open parenthesis", function() {
            expect(TypeUtils.isObject('{')).toEqual(false);
        });
        it("should return true on an empty object", function() {
            expect(TypeUtils.isObject('{}')).toEqual(true);
        });
        it("should return true on a nested object", function() {
            expect(TypeUtils.isObject('{"a":2, "b:3"}')).toEqual(true);
        });
    });
});