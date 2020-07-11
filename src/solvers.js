/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // create a new instance object of Board
  var boardObj = new Board({n : n});
  // get the actuall board and assign to solution
  var solution = boardObj.rows();
  // declare a recursion function
  var putRocks = function(currRow) {
    // base case
    // if current row is equal to n
    if (currRow === n) {
      // deep copy the current board and assign to solution
      solution = JSON.parse(JSON.stringify(boardObj.rows()));
      // return back to recursion function call
      return;
    }
    // recursive case
    // iterate over the current row (the length of current row is equal to n)
    for (var i = 0; i < n; i++) {
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
      // if the board does not have any rooks conflicts
      if (!boardObj.hasAnyRooksConflicts()) {
        // call recursion function with an updated current row
        putRocks(currRow + 1);
      }
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
    }
  };
  // invoke the recursion funtion
  putRocks(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // create a new instance object of Board
  var boardObj = new Board({n : n});
  // declare a recursion function
  var putRocks = function(currRow) {
    // base case
    // if current row is equal to n
    if (currRow === n) {
      // solutionCount add one
      solutionCount++;
      // return back to recursion function call
      return;
    }
    // recursive case
    // iterate over the current row (the length of current row is equal to n)
    for (var i = 0; i < n; i++) {
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
      // if the board does not have any rooks conflicts
      if (!boardObj.hasAnyRooksConflicts()) {
        // call recursion function with an updated current row
        putRocks(currRow + 1);
      }
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
    }
  };
  // invoke the recursion funtion
  putRocks(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // create a new instance object of Board
  var boardObj = new Board({n : n});
  // get the actuall board and assign to solution
  var solution = boardObj.rows();
  // declare a recursion function
  var putQueens = function(currRow) {
    // base case
    // if current row is equal to n
    if (currRow === n) {
      // deep copy the current board and assign to solution
      solution = JSON.parse(JSON.stringify(boardObj.rows()));
      // return back to recursion function call
      return;
    }
    // recursive case
    // iterate over the current row (the length of current row is equal to n)
    for (var i = 0; i < n; i++) {
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
      // if the board does not have any queens conflicts
      if (!boardObj.hasAnyQueensConflicts()) {
        // call recursion function with an updated current row
        putQueens(currRow + 1);
      }
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
    }
  };
  // invoke the recursion funtion
  putQueens(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  // create a new instance object of Board
  var boardObj = new Board({n : n});
  // get the actuall board and assign to solution
  var solution = boardObj.rows();
  // declare a recursion function
  var putQueens = function(currRow) {
    // base case
    // if current row is equal to n
    if (currRow === n) {
      // solution count add one
      solutionCount++;
      // return back to recursion function call
      return;
    }
    // recursive case
    // iterate over the current row (the length of current row is equal to n)
    for (var i = 0; i < n; i++) {
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
      // if the board does not have any queens conflicts
      if (!boardObj.hasAnyQueensConflicts()) {
        // call recursion function with an updated current row
        putQueens(currRow + 1);
      }
      // toggle piece at current index of current row
      boardObj.togglePiece(currRow, i);
    }
  };
  // invoke the recursion funtion
  putQueens(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
