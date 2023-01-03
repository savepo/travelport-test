import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard/index'
import { data } from './AppMockItems/peopleInformation';

function App() {
  return (
    <div>
          {data.map(
      (card, index) => 
        <PersonCard key={index} firstName={card.name.first} lastName={card.name.last} email={card.email} img={card.picture.medium} />
    )}
    </div>
  );
}

export default App;
