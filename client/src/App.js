import Update from './components/Update'
import New from './components/New';
import ListAll from './components/List'
import Details from './components/Details'
import Header from './components/Header'
import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <ListAll path ="/" />
      <New path="/pet/" />
      <Details path ="/pet/:id"/> 
      <Update path ="/pet/:id/edit"/> 
      </Router>
    </div>
  );
}

export default App;
