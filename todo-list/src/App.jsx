import './App.css';
import Header from './Components/Header';
import TodoEditor from './Components/TodoEditor';
import TodoList from './Components/TodoList';


const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export default App;