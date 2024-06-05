import React, { memo, useMemo, useState } from 'react';
import { Button } from 'antd'
/**父组件**/
const Child = memo((props) => {
    console.log("我被打印了就说明子组件重新构建了")
    return (
        <div>子组件</div>
    )
})
function Parent() {
    const [parentState, setParentState] = useState(0);  //父组件的state

    //需要传入子组件的函数
    const toChildFun = useMemo(() => {
        console.log("需要传入子组件的函数")
    }, [])
    return (
        <div>
            <Button onClick={(val) => setParentState(val => val + 1)}>{ parentState }</Button>
            <Child fun={toChildFun}></Child>
        </div>
    )
}
export default Parent;
