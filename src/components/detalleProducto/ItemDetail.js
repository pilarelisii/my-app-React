import './ItemDetail.css';

export function ItemDetail({id, nombre, precio}) {
    return (
  
        <section key={id} className="detalle-art">
            <article>
            <h1 className="nombre-art">
                Articulo: {nombre}
            </h1>
            <img src="//" alt="aca iria la imagen"/>
            <h3 className="precio">Precio: {precio}</h3>
            <button className="addCart">Agregar al carrito</button>
            
            <h5 className="descripcion">Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h5>
            </article>
        </section>
        
    );
}