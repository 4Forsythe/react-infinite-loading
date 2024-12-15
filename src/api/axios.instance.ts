import axios, { type CreateAxiosDefaults } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const options: CreateAxiosDefaults = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const instance = axios.create(options)
