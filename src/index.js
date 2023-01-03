import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { data } from './AppMockItems/peopleInformation';
import PersonCard from './components/PersonCard/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {data.map(
      (card, index) => 
        <PersonCard key={index} firstName={card.name.first} lastName={card.name.last} email={card.email} img={card.picture.medium} />
    )}
    
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
