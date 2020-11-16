import './App.css';
import FunComp  from  './Components/Funcomp'
import ClassComp  from  './Components/Classcomp'
import Clock from './Components/Clock'
function App() {
	let array=[1,2,3,45,6]
  return (
    <div className="App">
		<FunComp input={array} />
		<Clock date={Date()} />
    <ClassComp  text="заглушка клас комп" />
    </div>
  );
}

export default App;
