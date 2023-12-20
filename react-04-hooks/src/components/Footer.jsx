import { useContext } from "react";
import AppContext from "../context/AppContext";

function Footer() {
  const { text, tasks } = useContext(AppContext);

  return (
    <footer>
      <p>{text}</p>
      <p>Cantidad de tareas: {tasks.length}</p>
    </footer>
  );
}

export default Footer;
