/* TEST INPUT 0
[[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0]]
*/

/* TEST INPUT 1
[[4,0,0,0,0,0,0,0,5],
[0,0,9,4,0,2,8,0,0],
[0,6,0,0,5,0,0,9,0],
[0,3,0,0,8,0,0,2,0],
[0,0,2,5,0,1,3,0,0],
[0,9,0,0,4,0,0,7,0],
[0,1,0,0,6,0,0,5,0],
[0,0,8,1,0,5,9,0,0],
[5,0,0,0,0,0,0,0,7]]
*/

/* TEST INPUT 2
[[1,0,0,0,7,0,0,3,0],
[8,3,0,6,0,0,0,0,0],
[0,0,2,9,0,0,6,0,8],
[6,0,0,0,0,4,9,0,7],
[0,9,0,0,0,0,0,5,0],
[3,0,7,5,0,0,0,0,4],
[2,0,3,0,0,9,1,0,0],
[0,0,0,0,0,2,0,4,3],
[0,4,0,0,8,0,0,0,9]]
*/

/* TEST INPUT 3
[[9,3,0,0,0,0,6,0,2],
[0,6,0,0,0,0,0,0,0],
[0,5,0,0,8,0,0,4,0],
[0,0,3,2,4,0,0,0,0],
[0,0,6,0,1,0,9,0,0],
[0,0,0,0,0,7,0,0,3],
[0,2,0,4,0,0,0,0,5],
[0,0,0,0,0,0,0,8,0],
[0,0,0,7,0,8,0,1,4]]
*/

/* TEST INPUT 4 THAT ONE IS HERDDD
[[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,3,0,8,5],
[0,0,1,0,2,0,0,0,0],
[0,0,0,5,0,7,0,0,0],
[0,0,4,0,0,0,1,0,0],
[0,9,0,0,0,0,0,0,0],
[5,0,0,0,0,0,0,7,3],
[0,0,2,0,1,0,0,0,0],
[0,0,0,0,4,0,0,0,9]]
*/

/* TEST INPUT 5
[[0,4,6,0,0,5,7,0,0],
[0,0,0,9,0,0,0,0,0],
[0,9,0,0,0,1,0,0,6],
[0,0,0,0,0,0,9,0,0],
[0,3,0,0,0,0,0,0,0],
[4,0,0,5,2,0,0,0,8],
[0,8,0,0,0,0,0,7,0],
[5,7,0,3,0,0,0,8,2],
[2,0,0,0,0,0,3,0,0]]
*/

/* TEST INPUT 6
[[8,0,0,0,0,0,0,0,0],
[0,0,3,6,0,0,0,0,0],
[0,7,0,0,9,0,2,0,0],
[0,5,0,0,0,7,0,0,0],
[0,0,0,0,4,5,7,0,0],
[0,0,0,1,0,0,0,3,0],
[0,0,1,0,0,0,0,6,8],
[0,0,8,5,0,0,0,1,0],
[0,9,0,0,0,0,4,0,0]]
*/

/* TEST INPUT 7 *ACTUALLY IMPOSSIBLE
[[0,7,0,0,0,6,0,0,0],
[9,0,0,0,0,0,0,4,1],
[0,0,8,0,0,9,0,5,0],
[0,9,0,0,0,7,0,0,2],
[0,0,3,0,0,0,8,0,0],
[4,0,0,8,0,0,0,1,0],
[0,8,0,3,0,0,9,0,0],
[1,6,0,0,0,0,0,0,7],
[0,0,0,5,0,0,0,8,0]]
*/

/* TEST INPUT 8
[[9,8,0,7,0,0,0,0,0],
[7,0,0,0,0,0,6,0,0],
[0,0,6,0,5,0,0,0,0],
[0,4,0,0,0,5,0,3,0],
[0,0,7,9,0,0,5,0,0],
[5,0,0,0,2,0,0,0,1],
[0,0,8,5,0,0,9,0,0],
[0,0,0,0,1,0,0,0,0],
[0,0,0,0,0,3,0,2,4]]
*/



//Returns false if there is still a zero as entry in the array, meaning the array is not full
function isFull (arr){
    var result = true;

    for(var i = 0; i < 9; i ++){
        for (var j = 0; j < 9; j++){
            if(arr[i][j] == 0) {
                return false; //Array not full since one entry is 0
            }
        }
    }

    return result;
}


//Returns array with ones as entries where inital entries are initially
function initialState (arr){
    var result = [];

    for(var i = 0; i < 9; i ++){
        var line = [];
        for (var j = 0; j < 9; j++){
            if(arr[i][j] != 0) {
                line.push(1);
            }
            else{
                line.push(0);
            }
        }
        result.push(line);
    }
    return result;
}


function isPossible (arr, value, cell) {
    for (var j = 0; j < 9; j++) { //Looking for value present in same column
        if(arr[j][cell[1]] == value && j != cell[0]) {
            return false;
        }
    }

    for (var i = 0; i < 9; i++) { //Looking for value present in same line
        if(arr[cell[0]][i] == value && i != cell[1]) {
            return false;
        }
    }

    //Looking for value present in same block
    var adjustmentY = Math.floor(cell[0]/3);
    var adjustmentX = Math.floor(cell[1]/3);

    //pause(10);
    for (var j = 0; j < 3; j++) {
        //pause(5);
        for (var i = 0; i < 3; i++) {
            if(arr[3*adjustmentY + j][3*adjustmentX + i] == value && ([3*adjustmentY + j] != cell[0] && [3*adjustmentX + i] != cell[1])) {
                return false;
            }
        }
    }

    return true;

}


function findStart (arr) {
    var result = [];

    for(var i = 0; i < 9; i ++){
        for (var j = 0; j < 9; j++){
            if(arr[i][j] == 0) {
                result.push(i);
                result.push(j);

                return result;
            }
        }
    }

    return false;
}

function nextCell (cell, initialState) {
    do {
        if (cell[1] == 8) { //Line change
            cell = [cell[0] + 1, 0];
        }
        else {
            cell = [cell[0], cell[1]+1];
        }
    }
    while (initialState[cell[0]][cell[1]] == 1);

    return cell;
}

function previousCell (cell, initialState) {
    do {
        if (cell[1] == 0) { //Line change
            cell = [cell[0] - 1, 8];
        }
        else {
            cell = [cell[0], cell[1]-1];
        }
    }
    while (initialState[cell[0]][cell[1]] == 1);

    return cell;
}

function initialVerification(arr) {
    var result = true;

    for(var i = 0; i < 9; i ++){
        for (var j = 0; j < 9; j++){
            if(arr[i][j] != 0) {
                var value = isPossible(arr, arr[i][j], [i, j]);

                if(!value){
                    result = false;
                }
            }
        }
    }

    return result;

}


function solver(arr) {
    var initial = initialState(arr);
    var start = findStart(arr);
    var cell = start;
    var solvable = initialVerification(arr);

    while(!(isFull(arr)) && solvable) {

        var value = arr[cell[0]][cell[1]] ;

        var candidate = false;

        while (!candidate){
            value ++;

            candidate = isPossible(arr, value, cell);
        }

        if (value > 9) {
            arr[cell[0]][cell[1]] = 0;

            if(cell[0] == start[0] && cell[1] == start[1]){
                solvable = false;
            }
            else{
                cell = previousCell(cell, initial);
            }
        }
        else {
            arr[cell[0]][cell[1]] = value;

            if(!(isFull(arr))){ //Program will crash if last cell is a clue without this condition
                cell = nextCell(cell, initial);
            }
        }
    }

    if(!solvable){
        return false;
    }
    else{
        return arr;
    }
}

//eval(""+fs.readFileSync("sudokuSolver.js"))