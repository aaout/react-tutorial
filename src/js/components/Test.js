import React from "react";
import TodoItem from "./TodoItem";

export default class Test extends React.Component{
    render(){
        const firstname = "Ito";
        const lastname = "Eisuke";

        return(
            <div className="test">
                <h1>This is {`${firstname} ${lastname}`}.</h1>
                <div className="todo-list">
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        )
    }
}
