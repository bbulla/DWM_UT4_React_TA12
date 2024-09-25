import logo from './logo.svg';
import './App.css';
import { UserProvider } from './context/UserContext'; 
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <UserProvider> {}
      <div className="App">
        <header className="App-header">
          <UserDisplay /> {}
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
