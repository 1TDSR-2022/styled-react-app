import React, { useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'

export default function ListaTarefas() {

    const [tarefa, setTarefa] = useState([
        {
            "título" : "Lista de Pagamento",
            "setor" : "Dep. de Vendas",
            "descricao" : "Levantar os valores de vendas"
        }
        ,
        {
            "título" : "Planilha de Salários",
            "setor" : "Dep. Pessoal",
            "descricao" : "Gerar Planilhas"
        }
    ])

     return (
        <DivLista>
            {tarefa.map(()=>
            <Tarefa
                key={i}
                //Enviando os atributos separados
                tarefa={tar}
                //titulo={tarefa.titulo}
                //setor={tarefa.setor}
                //descricao={tarefa.descricao}
            />
         )}
        </DivLista>
    )
}