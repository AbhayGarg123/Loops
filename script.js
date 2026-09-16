let num = 153;
let sum = 0;
console.log("number: "+ num);
let temp1=num;
while (temp1 > 0) {
    let remainder = temp1 % 10;
    sum += remainder;
    temp1 = (temp1 / 10) | 0;
}
console.log("Sum of its digits:", sum);
let temp2=num;
let count=0;
while(temp2>0){
    count+=1;
    temp2=(temp2/10)|0;
}
let temp3=num;
let new_number=0;
while(temp3>0){
    let remainder=temp3%10;
    new_number = new_number + (remainder)**count;
    temp3 = (temp3/10) |0;
}
if(new_number==num){
    console.log("Is it an Armstrong number? Yes");
}
else{
    console.log("Is it an Armstrong number? No");
}
let temp4 =num;
let factor_count =0;
for(let i=1;i<=temp4; i++){
    if(temp4%i==0){
        factor_count+=1;
    }
}
 if(factor_count>2){
        console.log("Is it a Prime number? No");
    }
    else{
         console.log("Is it a Prime number? Yes");
    }
let factorsString = "";
for (let i = 1; i <= temp4; i++) {
    if (temp4 % i == 0) {
        if (factorsString === "") {
            factorsString += i;
        } else {
            factorsString += ", " + i;
        }
    }
}
console.log("Factors: " + factorsString);
