describe("Tokenizer test", function() {
    describe("get next", function() {
        it("should return {}", function() {
            expect(Tokenizer.getNextToken('{}')).toEqual(['{}', 2]);
        });

        it("should return the number 3", function() {
            expect(Tokenizer.getNextToken('3')).toEqual(['3', 1]);
        });

//        it("should return the number 3", function() {
//            expect(Tokenizer.getNextToken('55')).toEqual(['55',2]);
//        });

        it("should return the boolean true", function() {
            expect(Tokenizer.getNextToken('true')).toEqual(['true',4]);
        });

        it("should return the boolean true", function() {
            expect(Tokenizer.getNextToken('true 123')).toEqual(['true', 4]);
        });

        it("should return the empty string", function() {
            expect(Tokenizer.getNextToken('""')).toEqual(['""', 2]);
        });

        it('should return the string "test"', function() {
            expect(Tokenizer.getNextToken('"test"')).toEqual(['"test"', 6]);
        });

        it("should return the array [1,2,3]", function() {
            expect(Tokenizer.getNextToken('[1,2,3]     ')).toEqual(['[1,2,3]',7]);
        });

        it("should return the nested array [1,2,[3],[4,5]]", function() {
            expect(Tokenizer.getNextToken('[1,2,[3],[4,5]]  true 3 , : ')).toEqual(['[1,2,[3],[4,5]]',15]);
        });

        it('should return the object {"a":2}', function() {
            expect(Tokenizer.getNextToken('{"a":2}  true "3" , : ')).toEqual(['{"a":2}', 7]);
        });

        it('should return the object {{"a":2},{"b":4}}', function() {
            expect(Tokenizer.getNextToken('{{"a":2},{"b":4}}  true "3" , : ')).toEqual(['{{"a":2},{"b":4}}', 17]);
        });
    });
    describe("get next and another next", function() {
        // TODO is this test good? It's specifically for the parser's use (doensn't have to do with the tokenizer API)
        it('should return the object {"Yael":2}{"test":false}{"Yael":[]}', function() {
            var token = '{"Yael":2}{"test":false}';
            expect(Tokenizer.getNextToken(token)).toEqual(['{"Yael":2}', 10]);
            token = token.substring(10);
            expect(Tokenizer.getNextToken(token)).toEqual(['{"test":false}', 14]);
        });
    });
});