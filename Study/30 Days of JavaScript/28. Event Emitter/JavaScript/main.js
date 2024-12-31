class EventEmitter {
  constructor() {
    this.events = {};
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (eventCallback) => callback !== eventCallback
        );
      },

    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }
    return this.events[eventName].map((callback) => callback(...args));
  }

}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Test Case
const emitter = new EventEmitter();
const onClickCallback = () => 99;
const sub = emitter.subscribe('onClick', onClickCallback);
console.log(emitter.emit('onClick')); // [99]
sub.unsubscribe();
console.log(emitter.emit('onClick')); // []


