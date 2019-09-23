import axios from 'axios';

 //function ApiProdFetch() {//função para pegar os dados da API
 
  async function searchProd(termo){
    console.log(termo);
    const resp = await axios.get('http://localhost/2019/tsi/dsw/apiProds/produto/nome/'+termo)
    console.log({'data':resp.data})
    if(resp.data.length>0)
      return resp.data
    else
       return {error:`Não encontrado item ${termo}`};
  }

  async function getProdById(id){
    console.log(id);
    const resp = await axios.get('http://localhost/2019/tsi/dsw/apiProds/produto/'+id)
    if(resp.data.length>0)
    return resp.data
  else
     return {error:`Não encontrado: id=${id}`};
  }

//}



export {searchProd,getProdById};
// export default ApiProdFetch=>ApiProdFetch.fetchProds();
