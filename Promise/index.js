const PENDDING = Symbol("PENDDING");
const RESOLVE = Symbol("RESOLVE");
const REJECT = Symbol("REJECT");

class MyPromise {
  constructor(executor) {
    this.status = PENDDING;
    this.value = undefined;
    this.rejectValue = undefined;
    this.resolveCallbackQueue = [];
    this.rejectCallbackQueue = [];
    // 定义resolve函数
    let resolve = data => {
      setTimeout(() => {
        if (this.status === PENDDING) {
          this.status = RESOLVE;
          this.value = data;
          this.resolveCallbackQueue.forEach(fn => {
            fn(this.value);
          });
        }
      });
    };

    // 定义reject函数
    let reject = data => {
      setTimeout(() => {
        if (this.status === PENDDING) {
          this.status = REJECT;
          this.rejectValue = data;
          this.rejectCallbackQueue.forEach(fn => {
            fn(this.rejectValue);
          });
        }
      });
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(resolveCallback, rejectCallback) {
    let newMyPromise = new MyPromise((resolve, reject) => {
      if (this.status === PENDDING) {
        this.resolveCallbackQueue.push(value => {
          resolveCallback(value);
          resolve(this.value);
        });
        this.rejectCallbackQueue.push(value => {
          rejectCallback(value);
        });
      }
      if (this.status === RESOLVE) {
        this.resolveCallbackQueue.forEach(fn => {
          fn(this.value);
          resolve(this.value);
          reject(this.value);
        });
      }
      if (this.status === REJECT) {
        this.rejectCallbackQueue.forEach(fn => {
          fn(this.rejectValue);
          reject(this.value);
        });
      }
    });
    return newMyPromise;
  }
}

 let a = new MyPromise(resolve => {
   setTimeout(() => {
     resolve("我是结果");
   }, 1000);
 })
   .then(value => {
     console.log(value, "------12313");
     return new MyPromise(resolve => {
       resolve("1234");
     });
   })

   .then(ddd => {
     setTimeout(() => {
       console.log(ddd, "------dd3d");
     }, 300);
   });
