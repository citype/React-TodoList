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
    }
   
    render() {
        return(
        
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <Input value = {this.state.inputValue} placeholder = 'todo info' style={{width:'300px',marginRight:'10px'}}/>
                <Button type="primary">提交</Button>
                <List style={{marginTop:'10px',width:'300px'}}
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        );
    }
 }

 export default TodoList;