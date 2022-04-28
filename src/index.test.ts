import { totalScore } from "./index"

describe("In a new game, the total score is zero", () => {
  it("returns 'wadus'", () => {
    const expected = 0;

    const result = totalScore();

    expect(result).toEqual(expected);
  })
})
