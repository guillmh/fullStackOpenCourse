import "../styles/succes.css";

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return <div className={`messageby messageby-${type}`}>{message}</div>;
};

export default Notification;
