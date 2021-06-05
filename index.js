// Add your functions here
// const map = function(sourceArray,callBack){

// };

function map(sourceArray, callBack) {
    let newArray = []
  
    for (let i = 0; i < sourceArray.length; i++) {
      let theElement = sourceArray[i]
      newArray.push(callBack(theElement))
    }
  
    return newArray;
  }


  function reduce(sourceArray, callBack, startingPoint ) {
    
      let total;

      if(startingPoint){
          total = startingPoint;
          for (let i = 0; i < sourceArray.length; i++) {
              total = callBack(sourceArray[i], total);
          }
      }

      else {
        total = sourceArray[0];
        for (let i = 1; i < sourceArray.length; i++) {
          total = callBack(sourceArray[i], total);
      }
      }

      return total;
  }