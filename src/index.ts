export class BowlingGame {

  currentTotalScore(): any {

    return 0;
  }

  throwBowlingBall(scores:string): number {
    
    return this.calculateScore(scores);
  }

  private calculateScore(scores: string) {
    
    const scoreRolls = scores.split(" ");

    let totalScore = 0;

    for (let index = 0; index <= scoreRolls.length; index++) {

      if (scoreRolls[index] === 'X') {

        totalScore += 10;

        if (index >= 1 && scoreRolls[index-1] === 'X') {

          totalScore += 10;
          
        }
      }
    }
    return totalScore;
  }
}