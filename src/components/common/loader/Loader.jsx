import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading-spinner-div">
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        className="loading-spinner"
      ></FontAwesomeIcon>
    </div>
  );
};

export default Loader;
