/**
 * 双端队列 —— 允许同时从前端和后端添加和移除元素的特殊队列
 * 功能方法：
 *  addFront 向队列前端添加一个新项
 *  addBack 向队列后端添加一个新项
 *  removeFront 移除队列第一个元素，同时返回被移除元素
 *  removeBack 移除队列最后一个元素，同时返回被移除元素
 *  peekFront 返回队列第一个元素，不对队列做任何处理
 *  peekBack 返回队列最后一个元素，不对队列做任何处理
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
 class DoubleQueue {
   constructor() {
     map.set(this, { ...initQueue });
   }
   addFront(element) {
     const queueInstance = map.get(this);
     queueInstance.lowestCount--;
     queueInstance.items[queueInstance.lowestCount] = element;
   }
   addBack(element) {
     const queueInstance = map.get(this);
     queueInstance.items[queueInstance.count] = element;
     queueInstance.count++;
   }
   removeFront() {
     if (this.isEmpty()) return null;
     const queueInstance = map.get(this);
     const result = queueInstance.items[queueInstance.lowestCount];
     delete queueInstance.items[queueInstance.lowestCount];
     queueInstance.lowestCount++;
     return result;
   }
   removeBack() {
     if (this.isEmpty()) return null;
     const queueInstance = map.get(this);
     const result = queueInstance.items[queueInstance.count];
     delete queueInstance.items[queueInstance.count];
     queueInstance.count--;
     return result;
   }
   peekFront() {
     const queueInstance = map.get(this);
     return queueInstance.items[queueInstance.lowestCount];
   }
   peekBack() {
     const queueInstance = map.get(this);
     return queueInstance.items[queueInstance.count];
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
