import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer,
    // 如果页面有安装这个工具，则使用
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )


export default store;