import '../styles/App.css';
import ClassComponent from '../Components/ClassComponents';
import FunctionalComponent from '../Components/FunctionalComponent';

list1 = [
  {
    id:'1',
    name: 'José',
    estaNaLista: true
  },
  {
    id:'2',
    name: 'Maria',
    estaNaLista: false
  },
  {
    id:'3',
    name: 'Josefa',
    estaNaLista: true
  }
]

list2 = [
  {
    id:'1',
    name: 'José',
    tarefa: 'batata frita'
  },
  {
    id:'2',
    name: 'Maria',
    tarefa: 'frutas'
  },
  {
    id:'3',
    name: 'Josefa',
    tarefa: 'bebidas'
  }
]


function App() {
  return (
    <>
    <div className="App">
     <h3>Convidado:</h3>
     {list1.map(item => 
     <ClassComponent key={item.id} nome={item.nome} estaNaLista={item.estaNaLista} />)}
     {list2.map(item =>
      <FunctionalComponent key={item.id} nome={item.nome} tarefa={item.tarefa} />)}
   </div>
   </>
  );
}

export default App;
