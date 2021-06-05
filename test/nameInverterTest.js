const chai = require("chai");
const assert = chai.assert;
const nameInverter = require("../nameInverter");

describe("#nameInverter", function () {
  // return an empty string when passed an empty string
  // input: ""
  // output: ""

  it("return an empty string when passed an empty string", function () {
    const result = "";
    assert.equal(nameInverter(result), result);
  });

  // return a single name when passed a single name
  // input: "name"
  // output: "name"
  it("return a single name when passed a single name", function () {
    const result = "name";
    assert.equal(nameInverter(result), result);
  });
  // return a single name when passed a single name with extra spaces
  // input: " name "
  // output: "name"
  it("return a single name when passed a single name with extra spaces", function () {
    const input = " name ";
    const result = "name";
    assert.equal(nameInverter(input), result);
  });
  // return a last-name, first-name when passed a first and last-name
  // input: "first last"
  // output: "last, first"
  it("return a last-name, first-name when passed a first and last-name", function () {
    const input = "first last";
    const output = "last, first";
    assert.equal(nameInverter(input), output);
  });
  // return an empty string when passed a single honorific
  // input: "Dr. "
  // output: ""
  it("return an empty string when passed a single honorific", function () {
    const input = "Dr. ";
    const output = "";
    assert.equal(nameInverter(input), output);
  });
  // return honorific first-name when passed honorific first-name
  // input: "Dr. first"
  // output: "Dr. first"
  it("return honorific first-name when passed honorific first-name", function () {
    const input = "Dr. first";
    const output = "Dr. first";
    assert.equal(nameInverter(input), output);
  });
  // return a honorific last-name, first-name when passed honorific first-name last-name
  // input: "Dr. first-name last-name"
  // output: "Dr. last-name, first-name"
  it("return a honorific last-name, first-name when passed honorific first-name last-name", function () {
    const input = "Dr. first-name last-name";
    const output = "Dr. last-name, first-name";
    assert.equal(nameInverter(input), output);
  });
  // return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words
  // input: " Dr. first-name last-name "
  // output: "Dr. last-name, first-name"
  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function () {
    const input = " Dr. first-name last-name ";
    const output = "Dr. last-name, first-name";
    assert.equal(nameInverter(input), output);
  });
  // throw an error when name is undefined
  // input: undefined
  // output: throw 'Error'
  it("throw an error when name is undefined", function () {
    const input = undefined;
    assert.throws(nameInverter(input));
    //assert.Throw()
  });
});

// Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)
// input: " first last"
// output: "last, first"
