import ReactDOM from "react-dom";
import { BackdropDiv } from "../../utils/styled_components/StyledComponents";
const Backdrop = ({onClick}) => {
  return ReactDOM.createPortal(
    <BackdropDiv onClick={onClick}></BackdropDiv>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
