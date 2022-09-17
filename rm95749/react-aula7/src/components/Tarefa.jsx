import React from 'react';
import styled from 'styled-components'

function Tarefa(props) {
    
    return (
        <DivTarefa>
            <h2>{props.tarefa.titulo}</h2>
            <p>{props.tarefa.setor}</p>
            <p>{props.tarefa.descricao}</p>
        </DivTarefa>
    );
}

export default Tarefa;