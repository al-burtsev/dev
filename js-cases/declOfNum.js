function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const index = (number % 100 > 4 && number % 100 < 20)
    ? 2
    : cases[(number % 10 < 5) ? number % 10 : 5];
  return `${number} ${titles[index]}`;
}

// Пример использования:
const count = 23;
console.log(declOfNum(count, ['яблоко', 'яблока', 'яблок'])); 
// Выведет: "23 яблока"