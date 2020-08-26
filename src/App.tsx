import React from 'react';
import './styles/main.css';
import Calendar from "./components/Calendar";
import { DateProvider } from "./utilities/DateProvider";
import Modal from "./components/Modal";
import {ModalProvider} from "./utilities/ModalProvider";

function App() {
  return (
      <DateProvider>
          <ModalProvider>
              <Calendar />
              <Modal />
          </ModalProvider>
      </DateProvider>
  );
}

export default App;
