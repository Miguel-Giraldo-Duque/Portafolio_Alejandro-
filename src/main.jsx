import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Article } from './Article.jsx';
import App from './App.jsx';
import './styles/index.css';
import { ArticlesHome } from './ArticlesHome.jsx';
import { DbProvider } from './provider.jsx';
import { Chat } from './Chat.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <DbProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/Articles' element={<ArticlesHome />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/article/:title' element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </DbProvider>
  </StrictMode>
);