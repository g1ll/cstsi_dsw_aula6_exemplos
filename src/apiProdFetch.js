import axios from 'axios';

 //function ApiProdFetch() {//função para pegar os dados da API
 const ApiProdFetch = {

  url: 'http://localhost/2019/tsi/dsw/apiProds/produto/',
  
  searchProd: async function(termo){
    console.log(termo);
    const resp = await axios.get(`${this.url}all/${termo}`)
    console.log({'data':resp.data})
    if(resp.data.length>0)
      return resp.data
    else
       return {error:`Não encontrado item ${termo}`};
  },

  getProdById: async function(id){
    console.log(id);
    const resp = await axios.get(this.url+id)
    if(resp.data.length>0)
    return resp.data
  else
     return {error:`Não encontrado: id=${id}`};
  }

}


// export {searchProd,getProdById};
export default ApiProdFetch;
