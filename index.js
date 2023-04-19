const compress = (value) => {
  const splittedValue = value.split("");
  let response = "";
  let counter = 1;

  splittedValue.forEach((letter, index) => {
    const nextLetter = splittedValue[index + 1];

    if (nextLetter === letter) {
      counter += 1;
    }

    if (nextLetter !== letter && counter > 1) {
      response = `${response}${letter}x${counter}`;
      counter = 1;
      return;
    }

    if (counter === 1) {
      response = `${response}${letter}`;
    }
  });

  return response;
};

console.log(compress("aaaaca"));
console.log(compress("aaaaaabbbcaaa"));
console.log(compress("mississippi"));
