import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from './omakuva.js';
import Header from './header.js';
import Element from './element.js';
import FluidGrid from 'react-fluid-grid'
import './styles.css'

const myPage = <div>
<Header/>
<div class="fluid_container">
<FluidGrid>
<Element elementName="Unity 2d"
image="https://cdn.pixabay.com/photo/2020/03/21/14/45/moon-4954228_960_720.jpg"
imageAlt="Unity 2D esimerkkikuva"
description="Tälläisen Unity 2D projektin olen tehnyt"
link="https://github.com/suvisyrjalainen/Kodarit-2D-Unity-kaksintaistelu"
/>
<Element elementName="Unity 3d"
image="https://kodarit.com/wp-content/uploads/2021/12/jalkapallopeli-750x350.png"
imageAlt="Unity 2D esimerkkikuva"
description="Tälläisen Unity #D projektin olen tehnyt"
link="https://github.com/suvisyrjalainen/Kodarit-2D-Unity-kaksintaistelu"
/>
</FluidGrid>
</div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
