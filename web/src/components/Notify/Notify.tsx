
import './Notify.css'
import {debugData} from "../../utils/debugData";
import { ToastContainer, toast, Zoom, Bounce, Slide, Flip, Icons, cssTransition } from 'react-toastify';
// https://animate.style/
import "animate.css/animate.min.css";
import 'react-toastify/dist/ReactToastify.css';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

function Notify() {
  window.addEventListener('message', function (event) {
    let Number = event.data.time
    let Theme = event.data.theme
    let Progressbar = event.data.progressbar
    let Position = event.data.position
    let Transition = event.data.transition
    let Title = event.data.title
    let MyIcon = event.data.icon
    let RTL = event.data.rtl
    const Popup = cssTransition({
      enter: "animate__animated animate__bounceIn",
      exit: "animate__animated animate__bounceOut"
    });
    const Swirl = cssTransition({
      enter: "swirl-in-fwd",
      exit: "swirl-out-bck"
    });
    if (Title == "none" ) {
      Title = ""
    }
    else {
      Title = event.data.title
    }
    if (Transition == "bounce") {
        Transition = Bounce
    }
    else if (Transition == "slide") {
      Transition = Slide
    }
    else if (Transition == "zoom") {
      Transition = Zoom
    }
    else if (Transition == "flip") {
      Transition = Flip
    }
    else if (Transition == "popup") {
      Transition = Popup
    }
    else if (Transition == "swirl") {
      Transition = Swirl
    }
    if (MyIcon == "" || MyIcon == "noicon") {
      MyIcon = true
    }
    const msg = (
      <div>
        <h1 className='Title'>{Title}</h1>
        <span className='Text'>{event.data.message}</span>
      </div>
    )
    if (event.data.action == 'open_notify') {
      if (event.data.type == 'success') {
        toast.success(msg, {
          rtl: RTL,
          icon: MyIcon,
          position: Position,
          autoClose: Number,
          hideProgressBar: Progressbar,
          transition: Transition,
          closeOnClick: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: Theme,
        });
      }
      else if (event.data.type == 'info') {
        toast.info(msg, {
          rtl: RTL,
          icon: MyIcon,
          position: Position,
          autoClose: Number,
          hideProgressBar: Progressbar,
          transition: Transition,
          closeOnClick: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: Theme,
        });
      }
      else if (event.data.type == 'warning') {
        toast.warn(msg, {
          rtl: RTL,
          icon: MyIcon,
          position: Position,
          autoClose: Number,
          hideProgressBar: Progressbar,
          transition: Transition,
          closeOnClick: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: Theme,
        });
      }
      else if (event.data.type == 'error') {
        toast.error(msg, {
          rtl: RTL,
          icon: MyIcon,
          position: Position,
          autoClose: Number,
          hideProgressBar: Progressbar,
          transition: Transition,
          closeOnClick: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: Theme,
        });
      }
      else if (event.data.type == 'default') {
        toast(msg, {
          rtl: RTL,
          position: Position,
          autoClose: Number,
          hideProgressBar: false,
          transition: Transition,
          closeOnClick: false,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          draggable: false,
          progress: undefined,
          closeButton: false,
          theme: Theme,
        });
      }
    }
  });

  return (
    <div>
      <ToastContainer/>
    </div>
  )
}

export default Notify
