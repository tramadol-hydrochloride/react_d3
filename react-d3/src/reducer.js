const reducer = (state, action) => {
    switch (action.type) {
        case 'update_bar':
            let new_data = []
            for (let i = 0; i < state.data.length; i++) {
                new_data.push(Math.floor(Math.random() * 100) + 10);
            }
            return {data: new_data};
        case 'add_bar':
            const new_value = Math.floor(Math.random() * 100);
            return {data: [...state.data, new_value]};
        case 'remove_bar':
            let new_arr = [...state.data];
            new_arr.shift();
            return {data: new_arr};
        case 'sort_bar':
            let sorted_data = [...state.data];
            sorted_data.sort((a, b) => a - b);
            return {data: sorted_data};
        default:
            return state;
    }
};

export default reducer;
