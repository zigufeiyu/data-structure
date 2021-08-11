/**
 * 队列 —— 先进先出 —— FIFO
 * 功能方法：
 *  enqueue 向队列尾部添加一个新项
 *  dequeue 移除队列第一个元素，同时返回被移除元素
 *  peek 返回队列第一个元素，不对队列做任何处理
 *  size 返回队列包含的元素个数
 *  isEmpty 判断队列是否为空
 *  clear 清空队列
 */
const map = new WeakMap();
const initQueue = {
  count: 0, // 队列大小
  lowestCount: 0, // 第一个元素位置
  items: {},
};
class Queue {
  constructor() {
    map.set(this, { ...initQueue });
  }
  enqueue(element) {
    const queueInstance = map.get(this);
    queueInstance.items[queueInstance.count] = element;
    queueInstance.count++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const queueInstance = map.get(this);
    const result = queueInstance.items[queueInstance.lowestCount];
    delete queueInstance.items[queueInstance.lowestCount];
    queueInstance.lowestCount++;
    return result;
  }
  peek() {
    const queueInstance = map.get(this);
    return queueInstance.items[queueInstance.lowestCount];
  }
  size() {
    const queueInstance = map.get(this);
    return queueInstance.count - queueInstance.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    map.set(this, { ...initQueue });
  }
}
