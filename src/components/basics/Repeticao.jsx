import React from "react";

import produtos from "../../data/produtos";

export default props => {

    function getListaDeProdutos(){
        return produtos.map(p =>{
            return <li key={p.id}>{p.id} - {p.nome}: R$ {p.preco} </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getListaDeProdutos()}
            </ul>
        </div>
    )
}