import './App.css';
import Leftbar from './components/Leftbar/Leftbar';
import ChatArea from './components/ChatArea/ChatArea';

function App() {
  return (
    <div className="App">

      <div className='leftbar'><Leftbar></Leftbar></div>
      <div className='chatarea'><ChatArea ></ChatArea></div>


    </div>
  );
}

export default App;
