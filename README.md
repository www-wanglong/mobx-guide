#Mobx6
## 下载
mobx-react-lite只支持函数组件
## 2. 核心概念
1. observable state:被Mobx跟踪的状态
2. action：允许修改状态的方法
3. computed：根据应用程序状态派生的新值，计算值
## 4. 数据检测

### 4.1 autorun方法
1. 初始化也会执行
```JavaScript
useEffect(() => {
  autorun(() => {
    console.log(11)
  })
}, [])
```
2. 对于基本数据类型，属于值传递，mobx只能跟踪到原始属性，跟踪不到复制后的值
3. 对于引用数据类型，只要引用地址不发生变化，mobx就可以进行

### 4.2 reaction方法
1. 初始不执行