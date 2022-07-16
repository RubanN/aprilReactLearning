import { useRef } from "react";
import Snackbar from "./Snackbar";
import "./style.css"

const SnackbarType = {
    success: "success",
    fail: "fail",
};
const SnackbarParent = () => {
    const snackbarRef = useRef(null);

    return (
        <div className="App">
            <button className="showSnackbarBttn"
                onClick={() => snackbarRef.current.show()}
            >Show Snackbar</button>
            <Snackbar
                ref={snackbarRef}
                message="Task Completed Successfully!"
                type={SnackbarType.success}
            />
        </div>
    )
};

export default SnackbarParent;
