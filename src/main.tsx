import ReactDOM from 'react-dom/client'

import './index.css'

import { App } from './components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)
