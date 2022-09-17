import React from 'react'

export default function FormTarefas(props) {
  return (
    <div>
        <form method="post" onSubmit={props.addTarefa}>
            <div>
                <label>Título</label>
                <input type="text" name="titulo" value={props.tarefa.titulo} onChange={props.digit}/>
            </div>
            <div>
                <label>Setor</label>
                <input type="text" name="setor" value={props.tarefa.setor} onChange={props.digit}/>
            </div>
            <div>
                <label>Descrição</label>
                <textarea name="descricao" cols="30" rows="10" value={props.tarefa.descricao} onChange={props.digit}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}