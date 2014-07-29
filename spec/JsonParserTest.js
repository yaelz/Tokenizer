describe("Parser test", function() {
    describe("parse", function() {
        it('should return the empty JsonObject', function() {
            expect(JsonParser.parse('{}')).toEqual({});
        });

        it('should return {a:5}', function() {
            expect(JsonParser.parse('{"a":5}')).toEqual({a:5});
        });

        it('should return {a:5, a:3}', function() {
            expect(JsonParser.parse('{"a":5, "a":3}')).toEqual({a:5, a:3});
        });

        it('should return {a:"str", a:3}', function() {
            expect(JsonParser.parse('{"a":"str", "a":3}')).toEqual({a:"str", a:3});
        });

        it('should return {a:[]}', function() {
            expect(JsonParser.parse('{"a":[]}')).toEqual({a:[]});
        });

        it('should return {a:3, {b:4}}', function() {
            expect(JsonParser.parse('{"a":3,"b":{"b":4}}')).toEqual({a:3, b:{b:4}});
        });

        it('should return {a:[1,2]}', function() {
            expect(JsonParser.parse('{"a":[1,2]}')).toEqual({a:[1,2]});
        });

        it('should return {a:[1,2,{b:[]}]}', function() {
            expect(JsonParser.parse('{"a":[1,2,{"b":[]}]}')).toEqual({a:[1,2,{b:[]}]});
        });

        it('should return {a:true}', function() {
            expect(JsonParser.parse('{"a":true}')).toEqual({a:true});
        });

        it('should return {a:[1,2,{b:[]}], hello:{hi:[1,true]}}}', function() {
            expect(JsonParser.parse('{"a":[1,2,{"b":[]}], "hello":{"hi":[1,true]}}')).toEqual({a:[1,2,{b:[]}], hello:{hi:[1,true]}});
        });

        it('should return {a:"str"}', function() {
            expect(JsonParser.parse('{"a":"str"}')).toEqual({a:"str"});
        });
    });
});