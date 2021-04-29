import ReactDOM from "react-dom";
import { ModalDiv } from "../../utils/styled_components/StyledComponents";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalDiv>{props.children}</ModalDiv>,
    document.getElementById("modal")
  );
};

export default Modal;
