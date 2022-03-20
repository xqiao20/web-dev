import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
)
};

export default Labs;