import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { createServer } from 'miragejs'
import './api/server.js'

if(process.env.NODE_ENV === 'development'){
    createServer();
}

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>,
    </Provider>
)
