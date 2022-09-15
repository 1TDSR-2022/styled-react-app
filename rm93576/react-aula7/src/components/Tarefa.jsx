import React from 'react'
import styled from "styled-components"

//CRIANDO MÓDULO
const DivTarefa = styled.div`
    background-color: #ffb;
    border: solid 1px #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;
    h2,
    p {
      padding-bottom: 10px;
    }
`;

export default function Tarefa() {
    
  return (
    <DivTarefa>
        <h2>Relatório de vendas</h2>
        <p>Para: Departamento de Vendas</p>
        <p>Levantar os valores de venda deste mês</p>
    </DivTarefa>
  )
}
