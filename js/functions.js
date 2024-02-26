function checkStrLength(EnterString, maxLenStr){ // Функция проверки длины строки
  let result = EnterString.length <= maxLenStr ? true : false;
  return result;
}

function PalindromYesNo(myString){ // Функция для проверки, является ли строка палиндромом
  let reverseString = '';
  for (let i = myString.length - 1; i >= 0; i--){
    reverseString += myString[i];
  }
  let result = reverseString === myString ? 'является палиндромом' : 'не является палиндромом';
  return result;
}

function numberSelection(ArrayElement) { // Функция извлечения цифр из строки
  let strNumber = '';
  if (isNaN(ArrayElement) === false){
    return ArrayElement;
  }else{
    for (let i = 0; i < ArrayElement.length; i++){
      if (isNaN(parseInt(ArrayElement[i], 10)) === true){
        continue;
      }else if(parseInt(ArrayElement[i], 10) === true){
        strNumber += toString(ArrayElement[i]);
      }else{
        strNumber += ArrayElement[i];
      }
    }
  }
  let result = strNumber === '' ? NaN : strNumber;
  return result;
}

let startStr = 'shrsdmdfdf';
const arrayOfStrings = ['qweewq', 'fhjfgdfghdg', 'frthrnfvc', '', 'дов0д', '11134111', '4444444', 'наворован', 'asd hj j hds A'];
const arrayOfStrNumbers = ['gbset464hj453', ' 2024 год',' ECMAScript 2022', 'grthgrhterge', '385 бегемотов весят 767 тонн', 123];

console.log('Тестирование функции номер 1\n');
console.log('Изначальная строка: ', startStr);
for (let i = 0; i <= 5; i++) {
  console.log(checkStrLength(startStr, 18));
  startStr += 'qw';
}

console.log('\nТестирование функции номер 2\n');
console.log('Набор тестируемых строк: ', arrayOfStrings);
arrayOfStrings.forEach((str, number) => {
  const result = PalindromYesNo((str.replaceAll(' ','')).toLowerCase());
  console.log(`Строка под номером ${number} ${result}`);
}
);

console.log('\nТестирование функции номер 3\n');
console.log('Набор тестируемых строк: ', arrayOfStrNumbers);
arrayOfStrNumbers.forEach((str, number) => {
  const result = numberSelection(str);
  console.log(`${arrayOfStrNumbers[number]} : ${result}`);
}
);
