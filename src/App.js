
import './App.css';
import ApiFetch from './components/ApiFetch';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
  
     <ApiFetch/>
     <Footer/>
    </div>
  );
}

export default App;
