import './App.css'
import Lists from './components/Lists';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <div>
        <h3>Admin UI Project</h3>
        <Search/>
        <Lists/>
      </div>
    </div>
  );
}

export default App;
