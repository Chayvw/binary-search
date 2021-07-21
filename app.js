// 1 2 3 4 5 6 7 8 9 
// num = 9
// left will always be 1 and right will be the num given
// establish a loop 
// follow the formula to get the midpoint 

const isPerfectSquare = function (num) {
    if (num < 1) {
        return false
    }

    let left = 1;
    let right = num;

    // establish a while loop that will iterate through and if  left is <= right it will loop and first get the midpoint 

    while (left <= right) {
        let midpoint = left + Math.floor((right - left) / 2)
        // multiply midpoint by midpoint and compare to num and if it is equal return true
        if (midpoint * midpoint === num) {
            return true
            //if the midpoint by midpoint is greater than the num we will update right anything after the midpoint will be greater than num
        } else if (midpoint * midpoint > num) {
            right = midpoint - 1
            //if the midpoint by midpoint is greater than the num we will update right anything after the midpoint will be greater than num
        } else if (midpoint * midpoint < num) {
            left = midpoint + 1
        }


    }

    return false


};

