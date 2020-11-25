
let input = [4,9,7,5,8,9,3];
let swapCount = 0;

for (let i = 0 ; i < input.length;i++){
    for (let j = 0; j < input.length-1 ;j++){
        let temp=0;
        if(input[j] > input[j+1]){
            let swapA = input[j];
            let swapB = input[j+1];
            input[j] = swapB;
            input[j+1] = swapA;

            console.log("[" + swapB + "," + swapA + "] -> " + input);
            swapCount++;
        }
    }
}

console.log("\n\nJumlah Swap: " + swapCount);