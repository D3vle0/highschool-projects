import { ADD_TODO, COMPLETE_TODO, SHOW_ALL, SHOW_COMPLETE } from './actions';
const initialState = { todos: [], filter: "ALL" };
export function todoApp(previousState = initialState, action) {
    if (previousState === undefined)
        return [];
    if (action.type === ADD_TODO) {
        return {
            ...previousState,
            todos: [...previousState.todos, { text: action.text, done: false }],
        };
    }
    if (action.type === COMPLETE_TODO) {
        return {
            ...previousState,
            todos: previousState.todos.map((todo, index) => {
                if (index === action.index) {
                    return { ...todo, done: true };
                }
                return todo;
            }),
        };
    }

    if (action.type === SHOW_COMPLETE) {
        return {
            ...previousState,
            filter: "COMPLETE",
        };
    }
    if (action.type === SHOW_ALL) {
        return {
            ...previousState,
            filter: "SHOW_ALL",
        };
    }
    return previousState;
}