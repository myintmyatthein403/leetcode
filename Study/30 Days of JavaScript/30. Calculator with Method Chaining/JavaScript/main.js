class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.value += value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.value -= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.value *= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Cannot divide by zero');
    }
    this.value /= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value = Math.pow(this.value, value);
    return this;
  }

  /** 
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}

// Test Case
const calc = new Calculator(2);
console.log(calc.add(2).multiply(2).getResult()); // 8
console.log(calc.subtract(2).getResult()); // 6
console.log(calc.divide(3).getResult()); // 2
console.log(calc.power(3).getResult()); // 8
