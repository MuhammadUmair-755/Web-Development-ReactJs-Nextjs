import styles from "./Message.module.css";
import PropTypes from "prop-types";
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.PropTypes  = {
  message: PropTypes.string.isRequired
}
export default Message;
