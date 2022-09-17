import React, { useState } from "react";
import Tarefa from "./Tarefa";
import { DivLista } from "../style/styled";


export default function ListaTarefas(){

    const [tarefa, setTarefa] = useState([
        {
            "titulo" : "Lista de Pagamento",
            "setor" : "Dep. de Vendas",
            "descricao" : " LEvantar os valores de vendas"
        }
        ,
        {
            "titulo" : "Planilhas de salarios",
            "setor" : "Dep. pessoal",
            "descricao" : "Gerar Planilhas"
        }
    ])

    return(
        <DivLista>
        {tarefa.map((tar,i)=>
          <Tarefa
            key={i}
            //Enviando apenas o objeto
            tarefa={tar}
            //Enviando os atributos separados
            // titulo={tar.titulo}
            // setor={tar.setor}
            // descricao={tar.descricao}
          />
        )}
  
      </DivLista>
    )
  }