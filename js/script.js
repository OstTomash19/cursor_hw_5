// Перша функція
const getRandomArray = (length, min, max) => {
  const randomNumbersArr = [];
  for (let i = 0; i < length; i++) {
    randomNumbersArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return randomNumbersArr;
};

// Друга функція
const getModa = (...numbers) => {
  const numberArray = [...numbers];
  const arrayOfNumbersIndex = numberArray.reduce((arrayOfNumbersIndex, number, index, arr) => {
      let amountOfNumber = 1;
      const condition = number % 1 === 0;
      for (let i = index + 1; i < arr.length; i++) {
        if (arr[i] === number && condition) amountOfNumber += 1;
      }

      arrayOfNumbersIndex.push(amountOfNumber);
      return arrayOfNumbersIndex;
    },[]);

  const indexOfModa = arrayOfNumbersIndex.findIndex((element) => {
    return element === Math.max(...arrayOfNumbersIndex);
  });
  return numbers[indexOfModa];
};

//Третя Функція
const getAverage = (...numbers) => {
  const numbersArr = [...numbers].filter((number) => {
    return number % 1 === 0;
  });

  const averageNumber = numbersArr.reduce((total, number) => {
    return total + number;
  }, 0);

  return averageNumber / numbersArr.length;
};

//Четверта функція
const getMedian = (...numbers) => {
  const numberArr = [...numbers].sort((firstNumber, nextNumber) => firstNumber - nextNumber)
                                .filter((number) => number % 1 === 0);

  let medianaOfNumber = null;
  const conditionForArrayLength = (numberArr.length / 2) % 2 === 0;

  if (conditionForArrayLength) {
    medianaOfNumber = (numberArr[numberArr.length / 2] + numberArr[numberArr.length / 2 - 1]) / 2;
  } else {
    medianaOfNumber = numberArr[Math.floor(numberArr.length / 2)];
  }
  return medianaOfNumber;
};

// П'ята функція
const filterEvenNumbers = (...numbers) => {
  const finalArr = [...numbers].filter((number) => {
    return number % 2 !== 0;
  });

  return finalArr;
};

// Шоста функція
const countPositiveNumbers = (...numbers) => {
  const numberArr = [...numbers];
  const finalArrWithPositiveNumbers = numberArr.reduce((total, number) => {
    if (number > 0) return [...total, number];
    return total;
  }, []);

  return finalArrWithPositiveNumbers.length;
};

// Сьома функція
const getDividedByFive = (...numbers) => {
  const filteredArr = [...numbers].filter((number) => {
    return number % 5 === 0;
  });
  return filteredArr;
};

// Восьма функція
const replaceBadWords = (string) => {
  const swearWords = ["fuck", "shit", "fucking", "stupid"];
  const wordsFromUserArr = [...string].join("").split(" ");
  
  for (let i = 0; i < swearWords.length; i++) {
    const swearIndex = wordsFromUserArr.findIndex(word => swearWords[i] === word);
    wordsFromUserArr[swearIndex] = "****";
  }
  return wordsFromUserArr.join(" ");
};


// Дев'ята функція
const divideByThree = (...word) => {
  const stringArray = word.join("").toLowerCase().split("");
  const arrWordsDividedByThree = stringArray.reduce((arrWordsDividedByThree) => {
    for (let i = 0; i < stringArray.length; i++) {
      arrWordsDividedByThree.push(stringArray.splice(0, 3).join(""));
      if (i > stringArray.length)
      arrWordsDividedByThree.push(stringArray.splice(0, stringArray.length).join(""));
    }
    return arrWordsDividedByThree;
  }, []);

  return arrWordsDividedByThree;
};

/*========================================Виклики==================================*/
console.log(`Результат 1 функції - ${getRandomArray(15, 1, 100)};
Результат 2 функції - ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};
Результат 3 функції - ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};
Результат 4 функції - ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};
Результат 5 функції - ${filterEvenNumbers(1, 2, 3, 4, 5, 6)};
Результат 6 функції - ${countPositiveNumbers(1, -2, 3, -4, -5, 6)};
Результат 7 функції - ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}
Результат 8 функції - ${replaceBadWords("fuck shit stupid cool")}
Результат 9 функції - ${divideByThree("Commanderr")}`);

