function countVowelConsonant(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let splitArray = str.split("");
  return splitArray.reduce((previousValue, currentValue) => {
    if (vowels.includes(currentValue)) {
      return (previousValue += 1);
    } else {
      return (previousValue += 2);
    }
  }, 0);
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
});
