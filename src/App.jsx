import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
  return (
    <div className='App'>
      <h1>Hello React!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis beatae repellat vero ratione officiis, culpa corrupti nemo doloribus in doloremque ipsam! Libero, quidem nam? Illum consequatur assumenda voluptatibus delectus veritatis?</p>

      <Counter />
      <UserList />
    </div>
  );
}

export default App;
