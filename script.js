function fibs(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}

console.log(fibs(8));

function fibsRec(n, sequence = [0, 1]) {
  if (n <= sequence.length) return sequence.slice(0, n); // Base case

  // Recursive case: Add the next Fibonacci number
  const nextNumber =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextNumber);

  return fibsRec(n, sequence); // Recursive call with updated sequence
}

console.log(fibsRec(8));
