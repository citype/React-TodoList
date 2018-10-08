import React,{Component} from 'react'

class TodoItem extends Component {
  handleClick() {
    // 删除父组件中list的内容
    // 调用父组件的 handleItemDelete 方法 把父组件的方法也传递过来即可！！
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }
  constructor(props) {
    super(props);
    // 可以节约性能
    this.handleClick = this.handleClick.bind(this);
    
  }
  render() {
      const {description} =  this.props
      return <li onClick={this.handleClick}>{description}</li>;
  }
}

export default TodoItem;