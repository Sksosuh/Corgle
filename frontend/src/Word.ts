const ANSWER: string = "dodger"; // correct word for the day

export const isWinningWord = (word: string) => {
  console.log(solution + "=" + word)
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000

  return {
    solution: ANSWER.toUpperCase(),
  }
}

export const { solution } = getWordOfDay()
