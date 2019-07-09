const main = require('../main');
const isNumInRange = main.isNumInRange;
const isStartSmallerOrEqualEnd = main.isStartSmallerOrEqualEnd;
const CreateMultiplyTableTest = main.CreateMultiplyTableTest;
it ('should return true when call is num in range(1,5)', () => {
    expect(isNumInRange(1, 5)).toBe(true);
});
it('should return false when call is num in range(-1,2)',()=>{
    expect(isNumInRange(-1, 2)).toBe(false);
});
it('should return false when call is num in range(2,1002)',()=>{
    expect(isNumInRange(2,1002)).toBe(false);
});
it('should return false when call is num in range(-1,1003)',()=>{
    expect(isNumInRange(-1,1003)).toBe(false);
});

it('should return false when call is start smaller than end(4,5)',()=>{
    expect(isStartSmallerOrEqualEnd(4,5)).toBe(true);
});
it('should return false when call is start smaller than end(5,3)',()=>{
    expect(isStartSmallerOrEqualEnd(5,3)).toBe(false);
});
it('should return false when call is start smaller than end(4,4)',()=>{
    expect(isStartSmallerOrEqualEnd(4,4)).toBe(true);
});

it('should return null when call is create multiply table test in range(4,3,false,true)',()=>{
    expect(CreateMultiplyTableTest(4,3,false,true)).toBe(null);
});
it('should return null when call is create multiply table test in range(4,3,false,true)',()=>{
    expect(CreateMultiplyTableTest(3,3,true,true)).toBe("3*3=9");
});
it('should return null when call is create multiply table test in range(4,3,false,true)',()=>{
    expect(CreateMultiplyTableTest(2,3,true,true)).toBe(
    "2*2=4\n"
    +"2*3=6 3*3=9");
});
it('should return null when call is create multiply table test in range(4,3,false,true)',()=>{
    expect(CreateMultiplyTableTest(-1,3,true,false)).toBe("Number out of range");
});



