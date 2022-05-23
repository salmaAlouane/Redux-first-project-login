import './App.css';
import Profile from './Profile';
import Login from './Login';
import { Provider } from 'react-redux';
import { store } from './app/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Profile/>
      <Login/>
      </Provider>
    </div>
  );
}

export default App;
