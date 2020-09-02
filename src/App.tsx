import React from 'react';
import './styles/main.css';
import Calendar from "./components/calendar/Calendar";
import Modal from "./components/modal/Modal";
import { DateProvider } from "./context/DateProvider";
import { ModalProvider } from "./context/ModalProvider";
import { TasksProvider } from "./context/TasksProvider";

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
