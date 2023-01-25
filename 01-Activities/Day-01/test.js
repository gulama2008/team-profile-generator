var arr = [82, 22, -4, 21, 1, 8];
var target = 8;

function findTarget(arr,target) { 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(i)
            return i;
        }
    }
    console.log('no such number found!');;
}   

findTarget(arr, target);