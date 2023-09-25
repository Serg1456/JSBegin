/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';

console.log(checkIsRusNumber(num1));
console.log(checkIsRusNumber(num2));
console.log(checkIsRusNumber(num3));
console.log(checkIsRusNumber(num4));
console.log(checkIsRusNumber(num5));
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

console.log(checkIsRusNumber(num1Error));
console.log(checkIsRusNumber(num2Error));
console.log(checkIsRusNumber(num3Error));
console.log(checkIsRusNumber(num4Error));

function checkIsRusNumber(number) {
    number = number.trim();
    const firstDigit = number[0];
    switch(firstDigit) {
        case '8':
           return processNumberStartWithEight(number);
        case '+': 
           return processNumberStartWithPlus(number);
        default:
            return false;
    }
}

function processNumberStartWithEight(number) {
  let countOfNumber = 0;
  let isRightNumber = true;
  const rightCountOfNumber = 11;
  for (num of number) {
     if (!isNaN(Number(num))) 
     {
        countOfNumber++;
     }
     else 
     {
        isRightNumber = false;
        break;
     }
  }
  return (isRightNumber && countOfNumber === rightCountOfNumber); 
}

function processNumberStartWithPlus(number) {
  let lenOfNumber = number.length - 1;
  let rightCountOfNumber = 11;
  if (lenOfNumber == rightCountOfNumber) {
    let numberWithoutPlus = number.replace('+',"");
    return processNumberStartWithEight(numberWithoutPlus);
  }
  else if (lenOfNumber == rightCountOfNumber + 2)
  {
    let numberWithoutPlusScobs = number.replace('(',"").replace(')',"").replace('+',"");
    return processNumberStartWithEight(numberWithoutPlusScobs);
  }
  else 
  {
    let numberWithoutPlusCobsSpaceDash = number.replace('(',"").replace(')',"").replace('+',"").replace('-',"").replace(' ',"").replace('-',"");
    return processNumberStartWithEight(numberWithoutPlusCobsSpaceDash);
  }
}