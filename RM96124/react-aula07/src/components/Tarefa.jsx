import React from 'react'
import styled from "styled-components"

//CRIANDO O MÓDULO
const DivTarefa = styled.div`
    background-color : #ffb;
    
`

export default function Tarefa() {
  return (
    <DivTarefa>
        <h2>Relatorio de Vendas</h2>
        <p>Para: Departamento de Vendas</p>
        <p>Levantar os valores deste mês.</p>
    </DivTarefa>
  )
}
