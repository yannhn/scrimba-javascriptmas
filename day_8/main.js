function validTime(str) {
  const firstNumber = parseInt(str.split(":")[0]);
  const secondNumber = parseInt(str.split(":")[1]);
  if (firstNumber >= 24 || secondNumber >= 60) {
    return false;
  } else {
    return true;
  }
}

/**
 * Test Suite
 */
describe("validTime()", () => {
  it("returns true for valid time", () => {
    // arrange
    const str = "13:58";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when invalid hours", () => {
    // arrange
    const str = "25:51";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns false when invalid minutes", () => {
    // arrange
    const str = "02:76";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });
});
