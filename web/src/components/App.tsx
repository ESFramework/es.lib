import { toast } from "react-toastify";
import {debugData} from "../utils/debugData";
import Notify from './Notify/Notify';
import Progressbar from "./Progressbar/Progressbar";
//  import { TestUIRight, TestUIHideRight, TestUILeft, TestUIHideLeftt } from "./TextUI/test";
import TextUi from "./TextUI/TextUi";


// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

function App() {
  const msg = (
    <div>
      <h1 className='Title'></h1>
      <span className='Text'>What’s the word for breaking a sweat when you fill out your name?</span>
    </div>
  )
  const notify = () => toast(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    draggable: true,
    progress: undefined,

    theme: "light",
    });
  return (
    <div>
      {/* <button onClick={TestUILeft}>left</button>
      <button onClick={TestUIHideLeftt}>hideleft</button>
      <button onClick={TestUIRight}>right</button> */}
      {/* <button onClick={notify}>notify</button>  */}
      <Notify/>
      <TextUi/>
      {/* <Progressbar/> */}
    </div>
  )
}

export default App
