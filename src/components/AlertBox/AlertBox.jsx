import { useState } from "react";
import "./AlertBox.css";

function AlertBox() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  function activateHandler() {
    setIsAlertVisible(true);
  }

  function confirmHandler() {
    setIsAlertVisible(false);
    setIsActivated(true);
  }

  function cancelHandler() {
    setIsAlertVisible(false);
    setIsActivated(false);
  }

  if (!isAlertVisible && !isActivated)
    return (
      <button onClick={activateHandler} className="action-btn">
        Activate
      </button>
    );
  if (isAlertVisible)
    return (
      <>
        <div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          <button onClick={confirmHandler} className="confirm-btn">
            Confirm
          </button>
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
        </div>
      </>
    );
  if (isActivated)
    return (
      <>
        <h3 className="success-message">Mode Activated!</h3>
        <button onClick={cancelHandler} className="cancel-btn">
          Return
        </button>
      </>
    );
}

export default AlertBox;
