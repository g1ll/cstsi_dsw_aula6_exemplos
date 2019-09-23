import React, { useState,useEffect } from 'react';
import {searchProd,getProdById} from './ApiProdFetch';
import './App.css';

const ShowProduto=()=>{

  let iniQuery = 99;
  let [produtos,setProdutos] = useState([]);
  let [req_query,setQuery] = useState(iniQuery);

  useEffect(()=>{
    if(req_query!=='') getProdutos(req_query);
    else setProdutos([])
  },[])

  async function getProdutos(query){
    setQuery(query)
    setProdutos(
      ! isNaN(query) ? await getProdById(Number(query))
            : await searchProd(query)
      )
  }

  return (
        <div className="App">
          BUSCA:<input type='text' value={req_query} onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={()=>getProdutos(req_query)}>BUSCAR</button>
            <div>
            <h3>Produtos:</h3>
            <table border='1' style={{margin:'0 auto'}}>
            {produtos.length > 0 ? 
              <thead><tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descricao</th>
              <th>Preco</th>
            </tr></thead>
            :<thead><th>Não Encontrado</th></thead>}
            <tbody>
            {produtos.length > 0 ? (
              produtos.map(prod => (
                <tr key={prod.id_prod}>
                    <td>{prod.id_prod}</td>
                    <td>{prod.nome}</td>
                    <td>{prod.descricao}</td>
                    <td>{prod.preco}</td>
                  </tr>)
                  )
            ):(produtos.error!=='undefined'?<tr ><td >{produtos.error}</td></tr>:
            <tr ><td colSpan={4} >Sem Produtos</td></tr>
            )}</tbody></table></div>
        </div>
    )
}

export default ShowProduto;