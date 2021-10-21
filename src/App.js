import { Navbar } from './components/navbar/NavBar.js';
//import { ItemListContainer } from './components/contador/ItemCount.js';
import { ItemCount } from './components/contador/ItemCount.js';


function App() {

  return (
    <>
    <Navbar />
    <ItemCount stock='5' inicio='0'/>

    </>
    )
}

export default App;
