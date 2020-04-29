import axios from "axios"

export default (prefix) => axios.create({
    baseURL: `http://localhost:4000/api/${prefix}`
  })
