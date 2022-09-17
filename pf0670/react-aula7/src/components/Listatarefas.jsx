import React,{ useState } from 'react'
import Tarefa from './Tarefa'
import { DivLista } from '../style/styled'
import FormTarefas from './FormTarefas'


export default function ListaTarefas() {

  const [tarefa, setTarefa] = useState([
    {
      "titulo" : "Lista de Pagamento",
      "setor" : "Dep. de Vendas",
      "descricao":"Levantar os vvalorres de vendas"
    }
    ,
    {
      "titulo" : "Planilha de Salários",
      "setor" : "Dep. Pessoal",
      "descricao":"Gerar Planilhas"
    }
  ])

    const [nTarefa, setNTarefa] = useState({"titulo":"","setor":"","descricao":""})

    const addTarefa = (e)=>{
      e.preventDefault()
      //LIMPANDO O STATE nTarefa
      setNTarefa({"titulo":"","setor":"","descricao":""})
      //ADICIONANDO O OBJETO nTarefa A LISTA  DE OBJETOS
      setTarefa([...tarefa, nTarefa])
    }

    const captura = (e)=>{
      e.preventDefault()

      const{ name , value } = e.target

      if(name === "titulo"){
        setNTarefa({"titulo":value,"setor":nTarefa.setor,"descricao":nTarefa.descricao})
      }else if(name === "setor"){
        setNTarefa({"titulo":nTarefa.titulo,"setor":value,"descricao":nTarefa.descricao})
      }else if(name === "descricao"){
        setNTarefa({"titulo":nTarefa.titulo,"setor":nTarefa.setor,"descricao":value})
      }

    }


  return (
    <DivLista>
      
    {/* Form de captura de dados do usuário. */}
    <FormTarefas
      addTarefa={addTarefa}
      tarefa={nTarefa}
      digit={captura}
    />


    {/* Criando um disparador da função addTarefa */}
    {/* <button onClick={addTarefa}>Adicionar</button> */}

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
