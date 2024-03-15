var Calculator = require("./index.js");

describe("test suite", () => {
  it("test a", () => {
    var c=new Calculator(2);
    c.multiply(5);
    c.power(2);
    var res=c.getResult();
    expect(res).toEqual(100);
  });
  it("test b", () => {
    var c=new Calculator(20);
    expect(()=>{c.divide(0)}).toThrow(Error);
    expect(()=>{c.divide(0)}).toThrow("Division by zero is not allowed");
  });
  it("test c", () => {
    var c=new Calculator(10);
    c.add(5);
    c.subtract(7);
    var res=c.getResult();
    console.log(res);
  });
});
