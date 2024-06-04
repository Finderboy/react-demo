// https://juejin.cn/post/6844903743364792334 状态提升
import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
    }
    setNum(e) {
      this.props.setNum(e.target.value)
    }
    addNum() {
        this.props.addNum()
    }
    render() {
        return (
            <label>
                {this.props.num}
                <input onChange={(e)=>this.setNum(e)} value={this.props.num} />
                <button onClick={()=>this.addNum()}>+</button>
            </label>
        )
    }
}
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React.JS",
            // 将子组件的需要用到的数据存放在父组件内，在子组件内通过this.props可以取到
            num1: 0,
            num2: 0,
        }
    }
    // 处理子组件传上来触发input输入框的处理事件
    setNum(e){
       if (e) {
           this.setState({
               num1: parseInt(e)
           })
       } else {
            this.setState({
                num1: 0
            })
        }
    }
    // 处理子组件传上来触发button按钮的处理事件
    addNum(){
        this.setState({
            num1: this.state.num1 += 1
        })
    }
    newSetNum(e) {
        if (e) {
            this.setState({
                num2: parseInt(e)
            })
        } else {
            this.setState({
                num2: 0
            })
        }
    }
    newAddNum() {
        this.setState({
            num2: this.state.num2 += 1
        })
    }
  render() {
    return (
      <div className="category" style={{ marginTop: '20px'}}>
        <Child addNum={()=>this.addNum()} setNum={(e)=>this.setNum(e)} num={this.state.num1} />
        <Child addNum={()=>this.newAddNum()} setNum={(e)=>this.newSetNum(e)} num={this.state.num2} />
      </div>
    );
  }
}
export default Category;
