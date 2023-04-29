import React, { useContext, useState } from 'react';
import './App.css';
import Modal from '../Modal/Modal';
import Portal from '../Portal/Portal';
import { MyContext } from '../../context/MyContext';

function App() {
  const [showModal, setShowModal] = useState(false);
  const {toggleTheme, ThemeColor} = useContext(MyContext);

  return (
    <div className={`App ${ThemeColor}`}>
      <div className={'blockDesign'}>
        <button onClick={() => setShowModal(!showModal)} className={'buttonOpenModal'}> Modal window </button>
      </div>
      {showModal && (
        <Portal>
          <Modal onClose={() => setShowModal(false)} />
        </Portal>
      )}
      <div className={'blockDesign'}>
        <button onClick={toggleTheme} className={'buttonChangeTheme'}> Theme Change</button>
      </div>
    </div>
  );
}

export default App;