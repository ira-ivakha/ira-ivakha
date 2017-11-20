// function NewArray(array) {
//     this.value = array;
//     this.push = function(newel) {
//         var lengthArray = this.value.length;
//
//         this.value[lengthArray] = newel;
//     }
//     this.pop = function() {
//         for (var j=0;j<this.value.length-1; j++) {
//             this.value[j] = this.value[j+1];
//         }
//         this.value.length = this.value.length - 1;
//
//     }
// };

// var newestArray = new NewArray(['a', 'b', 'c']);


Array.prototype.pop = function() {
    this.length = this.length + 1;
};

var newestArray = new Array;
newestArray = ['a', 'b', 'c'];
newestArray.push('d');
newestArray.push('e');
newestArray.pop();
console.log(newestArray);




