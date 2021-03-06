const or35 = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

const tests = {
    case1: 9,
    case2: 10,
    case3: 8
}

describe("Testing or35 function", function(){
    it("should return true", function(){
        assert.equal(or35(tests.case1), true);
    });
    it("should return true", function(){
        assert.equal(or35(tests.case2), true);
    });
    it("should return false", function(){
        assert.equal(or35(tests.case3), false);
    });
})


//another way to do it
// const tests = {
//     case1: [1,1],
//     case2: [2,3],
// }

// describe("Testing equalNums function", function(){
//     it("should return true", function(){
//         assert.equal(equalNums(...tests.case1), true);
//     });
//     it("should return true", function(){
//         assert.equal(equalNums(...tests.case2), false);
//     });
// })