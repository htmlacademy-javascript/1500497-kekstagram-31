function checkStrLength(enterString, maxLenStr){ // Функция проверки длины строки
  const result = enterString.length <= maxLenStr ? true : false;
  return result;
}

function PalindromYesNo(string){ // Функция для проверки, является ли строка палиндромом
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--){
    reverseString += string[i];
  }
  let result = reverseString === string ? 'является палиндромом' : 'не является палиндромом';
  return result;
}

function numberSelection(arrayElement) { // Функция извлечения цифр из строки
  let strNumber = '';

  arrayElement = arrayElement.toString();

  for (let i = 0; i < arrayElement.length; i++){
    if (Number.isNaN(parseInt(arrayElement[i], 10)) === false){
      strNumber += arrayElement[i];
    }
  }

  const result = strNumber === '' ? NaN : strNumber;
  return result;
}

let startStr = 'shrsdmdfdf';
const arrayOfStrings = ['qweewq', 'fhjfgdfghdg', 'frthrnfvc', '', 'дов0д', '11134111', '4444444', 'наворован', 'asd hj j hds A'];
const arrayOfStrNumbers = ['gbset464hj453', ' 2024 год',' ECMAScript 2022', 'grthgrhterge', '385 бегемотов весят 767 тонн', 123];

// console.log('Тестирование функции номер 1\n');
// console.log('Изначальная строка: ', startStr);
for (let i = 0; i <= 5; i++) {
  console.log(checkStrLength(startStr, 18));
  startStr += 'qw';
}

// console.log('\nТестирование функции номер 2\n');
// console.log('Набор тестируемых строк: ', arrayOfStrings);
arrayOfStrings.forEach((str, number) => {
  const result = PalindromYesNo((str.replaceAll(' ','')).toLowerCase());
  console.log(`Строка под номером ${number} ${result}`);
}
);

// console.log('\nТестирование функции номер 3\n');
// console.log('Набор тестируемых строк: ', arrayOfStrNumbers);
arrayOfStrNumbers.forEach((str, number) => {
  const result = numberSelection(str);
  console.log(`${arrayOfStrNumbers[number]} : ${result}`);
}
);

