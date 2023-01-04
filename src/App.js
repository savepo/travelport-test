import './App.css';
import PersonCard from './components/PersonCard/index'
import Button from './components/Button';
// import { data } from './AppMockItems/peopleInformation'
import { useState, useEffect } from 'react'
import axios from 'axios';

let index = 0
const baseURL = "https://randomuser.me/api/?results=5"

function App() {
  const [ComponentsList, setNewComponent] = useState([])
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.results);
    });
  }, []);

  console.log(post)

  const createNewComponent = () => {
    if (index === post.length) {
      setNewComponent([])
      index = 0
    } else {
      setNewComponent([...ComponentsList, post[index]])
      index++
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
