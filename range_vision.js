function range_vision(num) {
  if (num === 0) {
    return false;
  }

  let numeroMenor = 9;
  let n = num;

  while (n > 0) {
    const digito = n % 10;
    if (digito === 1) {
      return true;
    }
    if (digito < numeroMenor) {
      numeroMenor = digito;
    }
    n = Math.floor(n / 10);
  }

  return numeroMenor === 1;
}

  console.log(range_vision(34315));