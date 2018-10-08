import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from "./TodoItem.js"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      list: []
    };
  }
  handleInputChange(e) {
    console.log("changed", e.target.value);
    this.setState({ inputValue: e.target.value });
  }
  handleButtonClick(e) {
      this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue: ''
      })
  }
    handleItemDeleteClick(index) {
        const list = [...this.state.list];
        // 删除元素
        list.splice(index,1);
        this.setState({
            list: list
        })
  }
  render() {
    return (
      <Fragment>
        <div>
            <label htmlFor="insertArea">
                输入内容：
            </label>
          <input id="insertArea" className = "input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
              this.state.list.map((item,index)=>{

                return (
                    <TodoItem description={item} index = {index} deleteItem={this.handleItemDeleteClick.bind(this)}/>
                );
                //   return <li 
                //     key = {index} 
                //     onClick={this.handleItemDeleteClick.bind(this,index)}
                //     dangerouslySetInnerHTML={{__html:item}}
                //   >
                //   {/* {item} */}
                //   </li>;
              })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;