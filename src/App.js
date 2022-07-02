import Form from "./components/Form";
import { useState } from "react";
import uniqid from "uniqid";
import ListadoTareas from "./components/ListadoTareas";

const App = () => {
  const [tareas, setTareas] = useState([
    { id: uniqid(), nombre: "tarea 1", lista: true },
    { id: uniqid(), nombre: "tarea 2", lista: false },
  ]);

  const addTareaHandler = (tarea) => {
    setTareas((prevState) => [...prevState, tarea]);
  };

  const deleteTareaHandler = (id) => {
    setTareas((prevState) => prevState.filter((tarea) => tarea.id !== id));
  };

  const updateTareaHandler = (id) => {
    setTareas((prevState) => {
      return prevState.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, lista: !tarea.lista };
        }
        return tarea;
      });
    });
  };

  return (
    <div className="min-h-screen bg-cyan-400  ">
      <h1 className="text-center mb-12 font-bold leading-tight text-4xl bg-slate-50 p-6  shadow-lg md:text-5xl text-gray-700  ">
        Lista de tareas
      </h1>
      <Form addTarea={addTareaHandler} />
      <ListadoTareas
        tareas={tareas}
        deleteTarea={deleteTareaHandler}
        updateTarea={updateTareaHandler}
      />
    </div>
  );
};

export default App;
