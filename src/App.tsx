import { useAppDispatch, useAppSelector } from './hooks';
import { addTodo } from './feature/todoSlice';
import { v4 as uuid } from 'uuid';
import React, { FormEvent, useState } from 'react';
import FormInput from './components/FormInput';
import ListTodos from './components/ListTodos';

function App() {
    const [todo, setTodo] = useState<string>('');
    const todos = useAppSelector(state => state.todos);
    const dispatch = useAppDispatch();
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo({ id: uuid(), text: todo, complete: false }));
        setTodo('');
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500  ">
            <div className="max-w-xl p-2 mx-auto bg-purple-300 rounded ">
                <h1 className="text-center font-black text-4xl mb-4">
                    TODO LIST
                </h1>
                <FormInput setTodo={setTodo} todo={todo} submit={submit} />
                <section className="bg-slate-300 rounded mt-4 opacity-60">
                    <ListTodos todos={todos} />
                </section>
            </div>
        </div>
    );
}

export default App;
