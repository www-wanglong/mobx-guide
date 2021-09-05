import { observer } from 'mobx-react-lite'
import { useRootStore } from '../../stores/RootStore'
import { autorun, reaction } from 'mobx'
import { useEffect } from 'react'

// observer 监控组件使用到的由mobx跟踪的observale state，返回新的组件
function Counter() {
  // useEffect(() => {
  //   autorun(() => {
  //     console.log(11)
  //   })
  // }, [])

  reaction(
    () => counterStore.count,
    (current, pre) => {
      console.log(current)
      console.log(pre)
    }
  )

  const { counterStore } = useRootStore()
  return (
    <div>
      <p className="paragraph">{counterStore.count}</p>
      <button className="button" onClick={() => counterStore.increment()}>+</button>
      <button className="button" onClick={counterStore.reset}>reset</button>
    </div>
  )
}
// 高阶组件
export default observer(Counter)