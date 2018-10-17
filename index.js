//write first method
function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {
    return param1;
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

function firstLast6 (nums) {
    var end = nums.length - 1;
    return nums[0] == 6 || nums[end] == 6;
}



function has23 (nums) {
    if (nums.indexOf(2) != -1 || nums.indexOf(3) != -1){
        return true
    } else {
        return false
    }
}

function fix23 (nums) {
    for (var i = 0; i < nums.length; i++){
        if (nums[i] == 2 && nums[i+1] == 3) {
            var tri = nums.indexOf(3);
            nums[tri] = 0;
        }
    }
    return nums;
}

function countYZ (str){
    var count=0;
    for (var i = 0; i < str.length; i++) {
        if (!str[i].match(/[a-z]/i) || str.charAt(i) == " ") {

            if (str.charAt(i-1).toLowerCase() == "y" || str.charAt(i-1).toLowerCase() == "z"){
                count += 1;
            }
        }
        if (i == str.length-1) {
            if (str.charAt(i).toLowerCase() == "y" || str.charAt(i).toLowerCase() == "z"){
                count += 1;
            }
        }
    }
    return count;
}

function endOther (a, b) {
    var short = "";
    var long = "";

    if (a == b) {
        return true;
    }

    if (a.length < b.length){
        short += a.toLowerCase();
        long += b.toLowerCase();
    } else {
        short += b.toLowerCase();
        long += a.toLowerCase();
    }

    var longEnd = long.substring(long.length -short.length);

    return longEnd == short;
}

function starOut (str) {
    if(str.length < 1)
        return "";

    if(str.length == 1) {
        if(str.charAt(0) == '*')
            return "";
        else
            return str;
    }

    var len = str.length;
    var arr = new Array();

    var count = 0;


    if(str.charAt(0) != '*' && str.charAt(1) != '*') {
        arr[count] = str.charAt(0);
        count++;
    }

    for(var i = 1; i < str.length - 1; i++) {
        if(str.charAt(i-1)!='*' && str.charAt(i) != '*' &&
            str.charAt(i+1) != '*') {
            arr[count] = str.charAt(i);
            count++;
        }
    }

    if(str.charAt(str.length-1) != '*' &&
        str.charAt(str.length-2) != '*') {
        arr[count] = str.charAt(str.length - 1);
        count++;
    }

    var x = arr.toString();

    return x.replace(/,/g, "");
}

function getSandwich (str) {
    var temp1 = "";
    var i1 = 0;
    for (var i = 0; i < str.length; i++){
        if (str.slice(i, i+5) == "bread") {
            temp1 = str.slice(i, i+5);
            i1 = i+5;
            break;
        }
    }
    var temp2 = "";
    var i2 = 0;
    for (var i = str.length; i >= 0; i--){
        if (str.slice(i-5, i) == "bread") {
            temp2 = str.slice(i-5, i);
            i2 = i-5;
            break;
        }
    }

    var res = "";

    for (var j = i1; j < i2; j++){
        res += str[j];
    }

    return res;
}

function canBalance (nums) {
    var first = 0;
    var second = 0;

    for (var i = 0; i < nums.length; i++){
        second += nums[i]; //adding all nums together
    }

    for (var i = 0; i <= nums.length - 2; i++){
        first += nums[i];
        second -= nums[i];

        if (first == second){
            return true;
        }
    }

    return false;
}

function countClumps (nums){
    var yardStick = -1;
    var clumps = 0;

    for (var i = 0; i < nums.length; i++){
        if (nums[i] == nums[i+1] && nums[i] != yardStick){
            clumps += 1;
            yardStick = nums[i];
        } else {
            if (nums[i] != yardStick){
                yardStick = -1
            }
        };
    }
    return clumps;
}

function evenlySpaced (a, b, c) {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const mid = a + b + c - max - min;

    return max - mid == mid - min;
}

