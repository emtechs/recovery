import axios from 'axios'

const baseURL = 'https://users-phi-jet.vercel.app/'

const apiServerSide = axios.create({
  baseURL,
  timeout: 100000,
})

export const apiUsingNow = apiServerSide
