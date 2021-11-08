import { Navbar } from './components/navbar/NavBar.js';
import { ItemList } from './components/ItemList/ItemList.js'
import {ItemDetail} from './components/detalleProducto/ItemDetail.js'

function App() {

  return (
    <>
    <Navbar />
    
    {/*<ItemList/>*/}
    <ItemDetail />
    </>
    )
}

export default App;
