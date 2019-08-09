import axios from 'axios'
//base url for open brew api that creates an instance of axios
export default axios.create({
    baseURL : 'https://api.openbrewerydb.org/breweries'
})

