import React from 'react';
import './styles/main.css';
import Calendar from "./components/Calendar";
import { DateProvider } from "./utilities/DateProvider";

function App() {
  return (
      <DateProvider>
        <Calendar />
      </DateProvider>
  );
}

export default App;
