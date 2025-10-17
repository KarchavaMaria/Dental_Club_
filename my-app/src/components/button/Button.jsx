import ModalRecording from "../../pages/recordingPage/modalRecording/modalRecording";
import {useState} from "react";

const Button = () => {
    const [open, setOpen] = useState(false);
    return(
        <div className="btnMdal">
            <button onClick={() => setOpen(true)}>ЗАПИСАТЬСЯ НА ПРИЕМ</button>

            <ModalRecording isOpen={open} onClose={() => setOpen(false)}>

            </ModalRecording>
        </div>
    )
}
export default Button;