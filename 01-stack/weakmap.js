
/**
 * 利用 WeakMap 包裹核心数据，致使外界不可访问
 */
const map = new WeakMap();
class Stack {
  constructor() {
    map.set(this, []);
  }
  push(element) {
    const items = map.get(this);
    items.push(element);
  }
  pop() {
    const items = map.get(this);
    const result = items.pop(element);
    return result;
  }
  peek() {
    const items = map.get(this);
    return items(items.length - 1);
  }
  size() {
    const items = map.get(this);
    return items.length;
  }
  isEmpty() {
    const items = map.get(this);
    return items.length === 0;
  }
  clear() {
    map.set(this, []);
  }
}
