var subArray = function(arr, value){
    var sum = 0;
    var i = 0;
    var startingIndex = 1;

    var rArray = new Array;
    while(i < arr.length){
        sum+=arr[i];
        rArray.push(arr[i]);
        i++;
        if(sum > value){
            sum = 0;
            i = startingIndex;
            rArray.splice(0, rArray.length);
            startingIndex++;
        }
        if(sum === value){
            break;
        }
    }
    return sum;
}

var array = [14, 12, 70, 15, 99, 65, 21, 90]
const value = 97;

console.log(subArray(array, value));