/**
 * 利用Symbol值独一无二的特性，实现类的私有属性
 * 痛点：仍然可以通过 Object.getOwnPropertySymbols 获取Symbol属性
 */
const _items = Symbol('stackItems');
class Stack {
  constructor() {
    this[_items] = [];
  }
  push(element) {
    this[_items].push(element);
  }
  pop() {
    return this[_items].pop();
  }
  peek() {
    return this[_items][this[_items].length - 1];
  }
  size() {
    return this[_items].length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this[_items] = [];
  }
}
