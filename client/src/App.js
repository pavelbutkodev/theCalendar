import React, {useState} from 'react';
import {getAll} from './services/ajaxUser';

import Nav from './component/Nav/Nav';

const App = () => {
    const token = localStorage.getItem('token')
    const auth = token;
    return (
        <Nav auth={auth}/>
    );
}

export default App;
