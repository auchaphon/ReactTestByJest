const oddEven = (a, b) => {
  let sum = a + b;
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

const sum = (a, b) => {
  return a + b;
};

export { oddEven, sum };
