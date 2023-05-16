export default class GenerateRandom {
  constructor(size) {
    this.size = size;
    this.lastNum = null;
  }

  generator(numMax) {
    return (function* generateNum() {
      yield Math.floor(Math.random() * (numMax + 1));
    }());
  }

  randomNum() {
    return new Promise((resolve) => {
      const result = this.generator(this.size).next().value;

      if (result === this.lastNum) {
        resolve(this.randomNum(this.size));
      } else {
        this.lastNum = result;

        resolve(result); 
      }
    });
  }
}
