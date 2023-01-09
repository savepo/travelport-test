import './App.css';
import PersonCard from './components/PersonCard/index'
import Button from './components/Button';
import { data } from './AppMockItems/peopleInformation'
import { useState } from 'react';

function App() {
  const [ComponentsList, setNewComponent] = useState([])

  const createNewComponent = () => {
    if (ComponentsList.length === data.length) {
      setNewComponent([])
    } else {
      setNewComponent([...ComponentsList, data[ComponentsList.length]])
    }
  }

  return (
    <div>
      <Button onClick={createNewComponent} text='Click Me!'></Button>
      {ComponentsList.map(
      (card, index) => 
        <PersonCard key={index} firstName={card.name.first} lastName={card.name.last} email={card.email} img={card.picture.medium} />
    )}
    </div>
  );
}

export default App;
