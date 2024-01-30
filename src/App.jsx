import Header from './components/Header/header'
import Recommend from './components/recommend/recommend';
import './App.css'
import Middle from './components/Middle/middle';
import Lower_Strip from './components/Lower_Strip/lower_strip'
import Other from './components/Other/other';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Recommend/>
      </div>
      <Middle/>
      <Lower_Strip/>
      <Other/>
    </div>
  );
}

export default App;
