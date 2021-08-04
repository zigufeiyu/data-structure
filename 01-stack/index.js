/**
 * 栈 —— 后进先出 —— LIFO
 * 功能方法：
 *  push 添加新元素到栈顶
 *  pop 移除栈顶元素，同时返回被移除元素
 *  peek 返回栈顶元素，不对栈做任何修改
 *  size 返回栈里元素个数
 *  isEmpty 判断栈是否为空
 *  clear 清空栈
 */
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return void 0;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    return this.items[this.count - 1];
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
  }
}
