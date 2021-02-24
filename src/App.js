import axios from 'axios';
import './App.scss';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  useEffect(() => {
    axios.get()
    return () => {
      cleanup
    }
  }, [input])
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
