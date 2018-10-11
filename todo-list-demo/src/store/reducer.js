const defaultState = {
    inputValue: '',
    list: []
}

// reducer 可以接收 state 但是绝不能修改 state
export default (state = defaultState, action) => {

    if(action.type === 'change_input_value') {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === "add_todo_item") {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    } 

    return state;
}
