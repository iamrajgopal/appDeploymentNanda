import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './store/components/Counter';
import Navbar from './bootcomponents/Navbar';
import Card from './bootcomponents/Card'


function App() {
  return (
    <div className='app'>
      <Counter></Counter>
      <Navbar></Navbar>
      <Card></Card>
    
      </div>
  );
}

export default App;
