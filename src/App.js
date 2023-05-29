import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Mainbock from './components/Mainblock/Mainblock';
import Profile from './components/Profile/Profile';
import Services from './components/Services/Services';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className="app-wrapper">
            <Header />
            <Routes>
                <Route path='/mainblock' element={<Mainbock />}/>
                {/* <Route path='/services' element={<Services store={props.store} />}/>  */}
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/profile" element={<Profile  />}/>
            </Routes>    
        </div>
    </BrowserRouter>
  );
}

export default App;
