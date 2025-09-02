function curry(fn) {
    return function curried(...args) {
      console.log('curried called with', args);
      if (args.length >= fn.length) {
        console.log('calling fn with', args);
        return fn(...args);
      } else {
        console.log(`need ${fn.length - args.length} more arg(s), returning collector`);
        return (...next) => {
          console.log('collector called with', next);
          return curried(...args, ...next);
        };
      }
    };
  }
  const multiply = (a, b, c) => a * b * c;
  const add=(a,b)=>a+b;
  const curriedAdd=curry(add);
  console.log(curriedAdd(2)(3)); // 5
  const curriedMultiply = curry(multiply);
  console.log(curriedMultiply(2)(3)(4)); // 24