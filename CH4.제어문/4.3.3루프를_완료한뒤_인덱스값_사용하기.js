// 동작하지 않는 스니펫 코드

let i = 0;
for(; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (1===bigArrayOfNumbers.length) console.log('No prime numbers');
else console.log(`First prime number found at position ${i}`);