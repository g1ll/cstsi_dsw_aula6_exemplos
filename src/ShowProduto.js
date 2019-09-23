import React, { useState,useEffect } from 'react';
// import ApiProdFetch, {fetchProds} from './ApiProdFetch';
import {searchProd,getProdById} from './ApiProdFetch';
import './App.css';

const ShowProduto=()=>{

  let iniQuery = 99;
  let [produtos,setProdutos] = useState([]);
  let [req_query,setQuery] = useState(iniQuery);

  useEffect(()=>{
  console.log('useEffect')
    if(req_query!=='')
      getProdutos(req_query);
    else setProdutos([])
  },[])

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
            ):(produtos.name!=='undefined'?<tr ><td >{produtos.name}</td></tr>:
            <tr ><td colSpan={4} >Sem Produtos</td></tr>
            )}</tbody></table></div>
        </div>
    );

    async function getProdutos(query){
      setQuery(query)
      let type = isNaN(query);
      let prods = [];
      if(!type)
           prods = await getProdById(Number(query));
      else  prods = await searchProd(query);
        setProdutos(prods)
    };
}

export default ShowProduto;