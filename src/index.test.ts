import { BowlingGame } from "./index";

describe("BowlingGame", () => {
  it("In a new game, the total score is zero", () => {
    const expected = 0;

    const game = new BowlingGame();
    const result = game.currentTotalScore();

    expect(result).toEqual(expected);
  })
})
