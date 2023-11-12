import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';
import Layout from './components/Layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<p>Home Page!</p>} />
          <Route path='users' element={<UserList />} />
          <Route path='counter' element={<Counter />} />
          <Route path='*' element={<p>Page Not Found!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
