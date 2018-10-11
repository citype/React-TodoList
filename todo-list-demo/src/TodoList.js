import React, {Component} from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
// import store from './store/index.js'
// 默认调用 index.js
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props);
        console.log(store.getState())
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        // 让组件里面的数据跟着 store 更新 订阅 store 只要 store 发生改变 handleStoreChange 将被调用
        store.subscribe(this.handleStoreChange);
    }
    
    render() {
        return(
        
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                
                <Input value = {this.state.inputValue} 
                placeholder = 'todo info' 
                style={{width:'300px',marginRight:'10px'}}
                onChange={this.handleInputChange}
                />
                
                <Button type="primary">提交</Button>
                
                <List style={{marginTop:'10px',width:'300px'}}
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
    handleInputChange(e) {
        // 告诉 sotre 改变 input—value 的值为，e.target.value
        const action = {
            type : 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
        console.log(e.target.value)
    }
    handleStoreChange() {
        console.log("sotre changed")
        // 从 store 重新取数据
        // 替换掉当前的数据
        this.setState(store.getState());
    }
 }

 export default TodoList;