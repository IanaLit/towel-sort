
// You should implement your task here.

module.exports = function towelSort (matrix) {
      if (matrix === undefined || matrix.length < 1  ) {
      return [];
      }
      else {
    
    let array = [...matrix];
    array.map((curr, i) => {
      if( i%2 !== 0){
         curr.reverse();
      }});
      return array.reduce((acc, val) => acc.concat(val), []);
    }}
