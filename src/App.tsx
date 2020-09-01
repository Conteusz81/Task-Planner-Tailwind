import React from 'react';
import './styles/main.css';
import Calendar from "./components/Calendar";
import Modal from "./components/Modal";
import { DateProvider } from "./utilities/DateProvider";
import { ModalProvider } from "./utilities/ModalProvider";
import { TasksProvider } from "./utilities/TasksProvider";

function App() {
  return (
      <DateProvider>
          <ModalProvider>
            <TasksProvider>
                <Calendar />
                <Modal />
            </TasksProvider>
           </ModalProvider>
      </DateProvider>
  );
}

export default App;
