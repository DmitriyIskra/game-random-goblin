export default class GenerateRandom {
  constructor(size) {
    this.size = size;
    this.lastNum = null;
  }

  generator(sizeBoard) {
    return (function* generateNum() {
      yield Math.floor(Math.random() * (sizeBoard + 1));
    }());
  }

  randomNum() {
    return new Promise((resolve) => {
      const result = this.generator(this.size).next().value;

      if (result === this.lastNum) {
        resolve(this.randomNum());
      } else {
        this.lastNum = result;

        resolve(result);
      }
    });
  }
}
