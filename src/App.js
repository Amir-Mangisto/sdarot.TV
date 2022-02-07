import "./App.css";
import Sidra from "./Components/Sidra/Sidra";
import Season from "./Components/Seasons/Season/Season";
import Message from "./Components/Message/Message";
import { MsgProvider } from "./Context/message-context";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div className="App">
      {/* <Sidra Name="Braking Bad" Raiting="5" Year="2003" /> */}
      {/* <Season season="6" raiting="10" views="1500" /> */}

      <MsgProvider>
        <Home />
        {/* <Message/> */}
      </MsgProvider>
    </div>
  );
}

export default App;
