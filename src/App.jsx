
import { Fragment, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ArticuloList } from "./components/ArticuloList";
import Post from './components/Post';

function App() {

  const [articulos, setArticulos] = useState([
    {id: 1, producto: 'Agua', selected: false},
  ]);

  const articuloRef = useRef();

  const selectedProd = (id) => {
      const newArticulos = [...articulos];

      const articulo = newArticulos.find((articulo) => articulo.id === id);
      articulo.selected = !articulo.selected;
      setArticulos(newArticulos);
  }

  const Nuevo = () => {
    const producto = articuloRef.current.value;
    if(producto === '') return;

    setArticulos((prevArticulo) => {
      return [...prevArticulo, {id: uuidv4(), producto, selected: false }]
    });

    articuloRef.current.value = null;
  }

  const Borrar = () => {
      const newArticulos = articulos.filter((articulo) => !articulo.selected)
      setArticulos(newArticulos);
  }

  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => setPost(data))
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(posts);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col m-4">
            <h4>Nuevo Artículo</h4>
            <input ref={articuloRef} type="text" placeholder='Nuevo Artículo'></input>
            <button onClick={Nuevo}>Agregar</button>
            <button onClick={Borrar}>Eliminar</button>
          </div>
          <ArticuloList articulos={articulos} selectedProd={selectedProd}/>
      
          {/* JsonPlaceHolder */}
          <div className="col m-5">
            <h4 className='m-3'>Fake data obtenida del JsonPlaceHolder</h4>
              {
              posts.map((post) => (
                <Post id={post.id} key={post.id} title={post.title} body={post.body} />
                ))
            }
          </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
