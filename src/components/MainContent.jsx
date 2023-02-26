
import Number from "./Number";
import Buttons from "./Buttons";
import images from '../images/refresh.png';
import { useState } from "react";

function MainContent() {
  const [counter, setCounter] = useState(0)

  
   return(
      <main className="main">
      <Number counter={counter}/>
      <Buttons counter={counter} setCounter={setCounter}/>

   </main>
   )
}

export default MainContent;
