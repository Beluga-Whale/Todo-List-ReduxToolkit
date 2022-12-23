import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
export interface TodosState {
    id: string;
    text: string;
    complete: boolean;
}

const initialState: TodosState[] = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodosState>) => {
            const todos = action.payload;
            state.push(todos);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        toggle: (state, action: PayloadAction<string>) => {
            const id = action.payload;

            return state.map(todo => {
                if (todo.id === id) {
                    console.log(id);
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, toggle } = todosSlice.actions;

export default todosSlice.reducer;
