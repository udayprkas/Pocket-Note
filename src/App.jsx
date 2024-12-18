import Home from "../../Pocket-Note/src/pages/homepage/home";
import Sidebar from "./components/sidebar/sidebar";
import CreatePopup from "./components/CreatePopup/CreatePopup";

import { useState, useContext } from "react";
import UserContext from "./components/Context/UserContext";
function App() {
  const { notes } = useContext(UserContext);

  const [ismodalopen, setisemodalopen] = useState(false);
  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <div className="maindiv" style={{ display: "flex" }}>
      <Sidebar open={open} />
      {!notes && <Home />}
      {ismodalopen && (
        <CreatePopup close={close} setisemodalopen={setisemodalopen} />
      )}
    </div>
  );
}

export default App;
