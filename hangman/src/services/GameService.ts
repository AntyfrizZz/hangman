const getAllLetters = (): string[] => {
  const result: string[] = [];
  for (let charCode = 65; charCode <= 90; charCode++) {
    result.push(String.fromCharCode(charCode));
  }

  return result;
};

export const GameService = {
  getAllLetters
};
