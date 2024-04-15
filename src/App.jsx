import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";


export default function App() {
  // States
  const [data, setData] = useState(db) //Para un archivo local es adecuado extraer los datos al hook de esta manera
  /**
    Para el manejo de API's es recomendable utilizar useEffect
    useEffect(() => (
      setData(db)
    ), [])
  **/

  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id} //key debe de contener un valor único
              guitar={guitar}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

