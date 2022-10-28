import React from 'react'
import ReactDOM from 'react-dom/client'
import GifApp from './GifApp'
import 'antd/dist/antd.css';
import './views/assets/styles/styles.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
)
