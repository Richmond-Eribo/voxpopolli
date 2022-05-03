// Writting this to info you that this code will need refactoring after I am done. because, WHAT IS THIS?
import React from 'react'

import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'
import {Footer} from './components'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='relative'>
        <App />
        <Footer />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
