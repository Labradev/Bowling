import { BowlingGame } from "./index";

describe("BowlingGame", () => {
  it("is a new game, so the current total score is zero", () => {
    const expected = 0;

    const game = new BowlingGame();
    const result = game.currentTotalScore();

    expect(result).toEqual(expected);
  })

  it("scores a strike", () => {
    const expected = 10; 

    const game = new BowlingGame();
    const result = game.throwBowlingBall('X');

    expect(result).toEqual(expected);
  })
})
