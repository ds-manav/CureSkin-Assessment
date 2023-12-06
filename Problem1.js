// link for codechef problem
// https://www.codechef.com/viewsolution/1033441197
// incase Link doest'nt work

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getInput(question) {
  return new Promise(resolve => {
    rl.question(question, function (value) {
      resolve(parseInt(value));
    });
  });
}

async function find_seat_type(number) {
    return new Promise(resolve=>{
        let seat_row = number%12 ==0 ?number/12: Math.floor((number/12)+1)
        let seat_row_start = (seat_row*12) - 11
        let oppSeatType 
        // Defining basic seat structure in an obj
        let seatTypeArr = {"WS": [1,6,7,12],"AS": [3,4,9,10],"MS": [2,5,8,11]}
        let opposite;
        // logic for finding the opposites:
        opposite = ((seat_row*12) - number) + seat_row_start
         Object.keys(seatTypeArr).map((ele)=>{
                    if(seatTypeArr[ele].includes(((seat_row*12) - number)  + 1)) {
                        return oppSeatType = ele
                    }
                })
        // returning back the promise
        resolve([opposite,oppSeatType])
    })
    
}

async function main() {
  let T;

  T = await getInput("Total Inputs: ");

  let N = [];

  for (let i = 0; i < T; i++) {
    let seatNumber = await getInput(`Enter Seat Number ${i + 1}: `);
    let seat_info = await find_seat_type(seatNumber)
    console.log(seat_info[0],seat_info[1])
     
  }

  // Close the input stream
  rl.close();

}

main();
