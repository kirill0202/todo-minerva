const initState = {
    todo: []
};

const actionTypes = {
    CREATE_TODO: "CREATE_TODO",
    REMOVE_TODO: "REMOVE_TODO",
    EDIT_TODO: "EDIT_TODO",
    ALL_REMOVE_TODOS: "ALL_REMOVE_TODOS",
    SET_TODOS: "SET_TODOS"
};

export const createTodo = (payload) => {
    return {
        type: actionTypes.CREATE_TODO,
        payload
    }
};

export const removeTodo = (payload) => {
    return {
        type: actionTypes.REMOVE_TODO,
        payload
    }
};

export const editTodo = (payload) => {
    return {
        type: actionTypes.EDIT_TODO,
        payload
    }
};

export const allRemoveTodos = () => {
    return {
        type: actionTypes.ALL_REMOVE_TODOS
    }
};

export const setTodos = (payload) => {
    return {
        type: actionTypes.SET_TODOS,
        payload
    }
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TODO:
            return {...state, todo: [...state.todo, action.payload]}
        case actionTypes.REMOVE_TODO:
            return {...state, todo: state.todo.filter((item) => item.id !== action.payload)}
        case actionTypes.EDIT_TODO:
            return {...state, todo: state.todo.map((item) => item.id === action.payload.id ? {...item, ...action.payload} : item)}
        case actionTypes.ALL_REMOVE_TODOS:
            return {...state, todo: []}
        case actionTypes.SET_TODOS:
            return {...state, todo: [...state.todo, ...action.payload]}
        default:
            return state;
    }
};

export default reducer;