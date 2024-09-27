// this function is used to culculate the demerit points based on the 
// provided speed input at prompt

function speedCheck(speed) { 
 let speedLimit = 70; //fixed value never change
let demeritPointPerKm = 5; //fixed value never change

if(speed <=70) { 
   return"ok"; 
} else { //calculate the demerit points if speed is abouve 70
let demeritPoints = (speed - speedLimit) /demeritPointPerKm

//print the demerit points or suspensio text
if (demeritPoints > 12)

return"license suspended";
} 
 { 
console.log(`The driver has ${demeritPoints}!`);
}

}
//calculate points and check speed
 speedCheck(speed);