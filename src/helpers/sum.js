const sum = (a, b=0) => {// b bernilai default 0 ketika b tidak kita passing;
    if(typeof a !== "number" || typeof b !== "number") throw new Error("only number allowed")
 return a + b;
  
};

module.exports = sum;
