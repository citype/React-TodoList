const defaultState = {
    inputValue: '123',
    list: [1,2]
}

// reducer 可以接收 state 但是绝不能修改 state
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        // 深拷贝
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;

    }
    return state;
}
