//Problem 1 Solution.
var range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
function problem1(){
    var numArr = range(3,1000,3).concat(range(5,999,5)).filter(function(value, index, self) { //array unique
        return self.indexOf(value) === index; 
    });

return numArr.reduce((accumulator, currentValue) => accumulator + currentValue);
}


//Problem 2 Solution: Fibonacci sum
function problem2() {
    let res = 0;
    let arr = [0,1];
    let  n=2;
    let accumulator = 0
    while (res <= 40000000) {
        res = arr[n-2] + arr[n-1];
        arr.push(res);
        n++;
        if (res%2 === 0 ){
            accumulator += res;
        }
    }
return accumulator; // arr.filter(n => n % 2 === 0).reduce((accumulator, currentValue) => accumulator + currentValue);
}

//Problem 3 Solution: Prime Factors
function problem3(number=1) {

    for (var n = number-1; n> 1 ;n--) {
        if (number%n === 0) {
            if (isPrime(n)){
                return n;
            }
        }
    }
    return 1;
}

function isPrime(number) {
    for (var i =2; i<Math.ceil(Math.sqrt(number)); i++){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
//problem3(600851475143);


//Problem 4 Solution Palendrome
function problem4() {
    for (var i = 999; i>=100;i--){
        for (var j = 999; j>=100; j--){
            if (isPalendrome(i*j)){
                return i*j;
            }
        }
    }
}
function isPalendrome(num) {
   var value =  (num).toString(10).split('');
   var valueRev = [...value];
   if (value.join() === valueRev.reverse().join()){
       return true;
   }
   return false;
}

// Problem 5 Solution Smallest Number 
function problem5() {
    var hcfValue = 0;
    var multi = 1;
    for (var i = 1; i<20; i++) {
        hcfValue = twoNumberGCD(i, i+1);
        multi *= i;
    }
    return multi/hcfValue;

}
function twoNumberGCD(a, b){
    if (b === 0)
       return a; 
    else
       return twoNumberGCD(b, a % b);
}

// Problem 6 Solution Multiplication
function problem6() {
    var temp = 0;
    for (var i = 1; i<=1000; i++) {
        for (var j =0; j<=1000;j++) {
            if (i !=j) {
                temp += i*j;
            }
        }
    }
    return temp;
}

// Sieve of Erastothenes. Prime Numbers
function erastothenes(number) {
    var arr = new Array(number);
    arr.fill(true);
    for (var i =2; i<=Math.ceil(Math.sqrt(number)); i++) {
        if (arr[i] === true){
            var j=2;
            while (j*i<= number){
                arr[j*i] = false;
                j++;
            }
        }
    }
    return arr;
}
erastothenes(10000);

// Problem 7 nth Prime Number
function problem7(){
    var count = 0 ;
    var counter = 2;
    do {
        counter++;
        count += isPrime(counter)
    } while(count < 10000);
    return counter;
}

//Problem 8 Largest product in a series
function problem8() {

}

const min = (a,b)=>{ return a<b?a:b;};
const max = (a,b)=>{ return a>b?a:b;};

function digitizeInteger(numString) {
    return numString.split('');
}
function problem8() {
    
    var numString = digitizeInteger("7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450");
    var numInt = numString.map(element => {
        return parseInt(element);
    })
    var currentMaxNumber = 1;
    for (var i = 0; i <1000-13; i ++) {
        var temp = 1;
        for (var j = i; j <= i +13; j ++) {
            temp *= numInt[j];
        }
        currentMaxNumber = max(currentMaxNumber,temp);
    }
    return currentMaxNumber;


}

//Problem 9 Pythagorous theorm
function problem9(){

}

//Problem 10 Pythagorous theorm
function problem10(){
    var primeValues = erastothenes(20000000);
    var primeArr = [];
    primeValues.forEach((element,index) => {
        if (element === true) {
            primeArr.push(index);
        }
    });


    return primeArr.reduce((total,currentValue) => total + currentValue);
}

//Problem 11 Largest GCP  in a grid
function problem11() {
    var twoDarray = [
    [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
    [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
    [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
    [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
    [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
    [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
    [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
    [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
    [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
    [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
    [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
    [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
    [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
    [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
    [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
    [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
    [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
    [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
    [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
    [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]
    ];
    var highestGDP = 0;
    var currentCellGDP = 0;
    var currentGDPArr = [];
    var result;
    for (var row= 0; row <20; row++) {
        for (var column = 0; column <20; column++) {
            result = compute4NeighbourCells(row,column);
            var rightNumbers = result.resultRight.map((element,index) => {
                return twoDarray[element[0]][element[1]];
            });
            var downNumbers = result.resultDown.map((element,index) => {
                return twoDarray[element[0]][element[1]];
            });
            var diagonalRightNumbers = result.resultDiagonalRight.map((element,index) => {
                return twoDarray[element[0]][element[1]];
            });
            var diagonalLeftNumbers = result.resultDiagonalLeft.map((element,index) => {
                return twoDarray[element[0]][element[1]];
            });
            currentCellGDP = 
            max(
                max(
                    anyNumberGCD(...rightNumbers),
                    anyNumberGCD(...downNumbers)),
                max(
                    anyNumberGCD(...diagonalRightNumbers),
                    anyNumberGCD(...diagonalLeftNumbers))
            );
            //currentGDPArr.push(result);
            if (currentCellGDP > highestGDP) {
                highestGDP = currentCellGDP;
            }
        }
    }
    return highestGDP;
}

function compute4NeighbourCells(row, column) {
    var resultRight = [];
    var resultDown = [];
    var resultDiagonalRight = [];
    var resultDiagonalLeft = [];
    //Right
    if (column <= 16) {
        resultRight.push([row,column]);
        resultRight.push([row,column+1]);
        resultRight.push([row,column+2]);
        resultRight.push([row,column+3]);
    }
    //Down
    if (row <= 16){
        resultDown.push([row,column]);
        resultDown.push([row+1,column]);
        resultDown.push([row+2,column]);
        resultDown.push([row+3,column]);
    }
    //Diagnal Right
    if (row<=16 && column<=16) {
        resultDiagonalRight.push([row,column]);
        resultDiagonalRight.push([row+1,column+1]);
        resultDiagonalRight.push([row+2,column+2]);
        resultDiagonalRight.push([row+3,column+3]);
    }
    //Diagnal Left
    if (row<=16 && column>=3) {
        resultDiagonalLeft.push([row,column]);
        resultDiagonalLeft.push([row+1,column-1]);
        resultDiagonalLeft.push([row+2,column-2]);
        resultDiagonalLeft.push([row+3,column-3]);
    }


    //Left and Up, Diagonal up,Diagonal down are already covered 

    return {resultRight: resultRight,
        resultDown:resultDown,
        resultDiagonalRight: resultDiagonalRight,
        resultDiagonalLeft:resultDiagonalLeft
    };
}
function anyNumberGCD(...arr) {
    var size = arr.length;
    if (size === 0) {
        return 0;
    }else if (size === 1) {
        return arr[0]
    }
    var gcdValue = arr[0];
    for (var i = 1; i < size; i++) {
        gcdValue = twoNumberGCD(gcdValue, arr[i])
    }
    return gcdValue;
}
problem11();


//Doubly Linked List JS
class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    _getterHead_() {
        return this.head;
    }
    _getterLength_() {
        return this.length;
    }

    addFirst(value) {
        var _temp_ = this.head;
        this.head = new Node(value,this.head);
        if (!this.length) this.length = 0;
        if (_temp_) {
            _temp_.prev = this.head;
        }
        this.length++;
    }

    traverse(){
        var _temp_ = this.head;
        var _arrSave_ = [];
        while (_temp_ != null) {
            _arrSave_.push(_temp_.value);
            _temp_ = _temp_.next;
        }
        return _arrSave_.slice();
    }
    addLast(value) {
        if (!this.head) LinkedList.prototype.addFirst(value);
        else {
            var _temp_ = this.head;
            while(_temp_.next != null) _temp_ = _temp_.next;
    
            _temp_.next = new Node(value,null, _temp_);
            this.length++;
        }
    }
    
    insertAfter(key, toInsert) {
        var _temp_ = this.head;
        while(_temp_ && _temp_.value != key) _temp_ = _temp_.next;
    
        if (_temp_)
            _temp_.next = new Node(toInsert,_temp_.next,_temp_);
            this.length++;
    }
    
    insertBefore (key, toInsert) {
        if (this.head === null) {
            return null;
        }
        var _prev_ = null;
        var _cur_ = this.head;
        while(_cur_ && _cur_.value != key) {
            _prev_ = _cur_;
            _cur_ = _cur_.next;
        }
    
        if (_cur_ && _prev_){
            _prev_.next = new Node(toInsert,_cur_,_prev_.next);
        } else if (_cur_){
            this.head = new Node(toInsert,_cur_);
            _cur_.prev = this.head;
        }
            this.length++;
    }
    
    remove (key) {
        if (!this.head) return ;
    
        if (this.head.value === key) {
            this.head = this.head.next;
            this.length--;
            return ;
        }
    
        var _cur_ = this.head;
        var _prev_ = null;
        while(_cur_ && _cur_.value != key) {
            _prev_ = _cur_;
            _cur_ = _cur_.next;
        }
    
        if (!_cur_) return ;
    
        _prev_.next = _cur_.next;
        this.length--;
    }

}

class Node {

    constructor(value, next = null, prev = null){
        this.next = next;
        this.prev = prev;
        this.value = value;    
    }
}


// Binary Search Tree
class Tree {
    constructor(){
        this._root = null; 
    }

    _getRootTree_() {
        return this._root;
    }

    insert(newValue,_localRoot= this._root) {
        
        if (!this._root ) {
            this._root = new TreeNode(newValue);
        } else {
            if (newValue <= _localRoot.value) {
                if (!_localRoot.leftChild) {
                    _localRoot.leftChild = new TreeNode(newValue,_localRoot);
                    return;
                }
                Tree.prototype.insert(newValue,_localRoot.leftChild);
            } else {
                if (!_localRoot.rightChild) {
                    _localRoot.rightChild = new TreeNode(newValue,_localRoot);
                    return;
                }
                Tree.prototype.insert(newValue,_localRoot.rightChild);
            }
        }
    }
    search(searchValue, _localRoot = this._root) {
        if (!this._root) {
            return new Error("Binary Search Tree not initialized");
        }
        if (!_localRoot) {
            return new Error("SearchValue Not in Binary Search Tree");
        }
        if (searchValue === _localRoot.value) {
            return Object.assign( Object.create( Object.getPrototypeOf(_localRoot)), _localRoot);
        } else if (searchValue < _localRoot.value) {
            Tree.prototype.search(searchValue, _localRoot.leftChild);
            if (searchValue === _localRoot.value) {
                return Object.assign( Object.create( Object.getPrototypeOf(_localRoot)), _localRoot);
            }
        } else {
            Tree.prototype.search(searchValue, _localRoot.rightChild);
            if (searchValue === _localRoot.value) {
                return Object.assign( Object.create( Object.getPrototypeOf(_localRoot)), _localRoot);
            }
            } 
    }

    deletion(toDeleteValue, _localRoot = this._root) {
        var _self = this;
        //case 1 : No Node
        if (!this._root) {
            return;
        }
        var _deleteObj = this.search(toDeleteValue)
        //case 2: Node containing the child has no element
        if (!_deleteObj.leftChild && !_deleteObj.rightChild) {
            if (!_deleteObj.parent) {
                this._root = null;
                return;
            }
            if(_deleteObj.parent.value <= _deleteObj.value){
                _deleteObj.parent.leftChild = null;
            } else {
                _deleteObj.parent.rightChild = null;
            }
            return;
        }

        //case 3: Node containing the element has one child.
        if (!_deleteObj.leftChild || !_deleteObj.rightChild) {
            var _temp = _deleteObj.leftChild || _deleteObj.rightChild;
            _temp.parent = _deleteObj.parent;
            return;
        }

        //case 4: When there are both child nodes
        var _rightchildNode = _deleteObj.rightChild;
        while(_rightchildNode != null){
            _rightchildNode = _rightchildNode.leftChild
        }
        _rightchildNode.parent.leftChild = null;
        _rightchildNode.parent = _deleteObj.parent
        _rightchildNode.leftChild = _deleteObj.leftChild;
        _rightchildNode.rightChild = _deleteObj.rightChild;
        _rightchildNode.parent.rightChild = _rightchildNode;
    }
}

class TreeNode {
    constructor (value, parent = null, leftChild = null, rightChild = null) {
        this.value = value;
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}

const quicksort = (xs) => length(xs)
  ? flatten([
    quicksort(filter(tail(xs), x => x <= head(xs))),
    head(xs),
    quicksort(filter(tail(xs), x => x > head(xs)))
  ])
  : []
const filter = ([x, ...xs], fn) => {
    if (undef(x)) return []
    if (fn(x)) {
      return [x, ...filter(xs, fn)]
    } else {
      return [...filter(xs, fn)]
    }
  }
const head = ([x]) => x
const tail = ([, ...xs]) => xs




//Functional Flow 
const flow = (...args) => init => reduce(args, (memo, fn) => fn(memo), init)
const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)
