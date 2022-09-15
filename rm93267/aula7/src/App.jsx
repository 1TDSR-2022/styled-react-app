import React from "react";
import ListaTarefas from "./components/listaTarefas/ListaTarefas";
import { TitComp } from './style/styled.js'

export default function App(){
    return(
        <div>
            <TitComp>ESTUDO SOBRE STYLED-COMPONENT</TitComp>
            <ListaTarefas/>
        </div>
    )
}