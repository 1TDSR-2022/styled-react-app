import React from 'react'
import styled from "styled-components"
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
        <h2>Relatorio de Vendas</h2>
        <p>Para: Departamento de Vendas</p>
        <p>Levantar os valores deste mês.</p>
    </DivTarefa>
  )
}
