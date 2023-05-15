/*0
1
1
2
3
5
8
13
21
34
55
89

fib(8) = 13
fib(8) = fib(7) + fib(6)
fib(n) = fib(n-1) + fib(n-2)

fibonacci spiral 
*/


/*const fib = (numTerm) => {
  
  if(numTerm == 1) {
    return 0;
  }
  if(numTerm == 2) {
    return 1;
  }

  let prevNum = 1;
  let grandNum = 0;

  for (let i = 0; i < 10; i++) {

    let currNum = grandNum + prevNum;
    console.log(currNum);

    grandNum = prevNum;
    prevNum = currNum;

  }

}
*/


//                          3
const fibWithRecursion = (num) => 
{
  if(num == 1) {
    return 0;
  }
  if(num == 2) {
    return 1;
  }

  let currentNum= fibWithRecursion(num-1) + fibWithRecursion(num-2);
  console.log(currentNum)

  return currentNum
}


fibWithRecursion(10)

//recusrion - function calling itself, call itself with a reducing scope (make the problem easier), base case.




const letterCounted = (letterCount) => {
  const displayWord = document.getElementById("display-word");
  displayWord.innerHTML = `${letterCount}`;
};
