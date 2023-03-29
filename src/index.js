import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from './omakuva.js';
import Header from './header.js';
import './styles.css'

const myPage = <div>
<Header/>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
