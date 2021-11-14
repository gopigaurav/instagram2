import React,{useLayoutEffect } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
export const Modal = ({ children, actionType }) => {
   // Call hook to lock body scroll
   useLockBodyScroll();
  const dispatch = useDispatch();
  const modal = React.createRef();
  const closeModal = () => {
    dispatch({ type: actionType, payload: false });
  };
  const onKeyDown = (event) => {
    if (event.keyCode === 27) closeModal();
  };
  const onClickOutside = (event) => {
    if (!(modal && modal.current.contains(event.target))) closeModal();
  };
  return ReactDOM.createPortal(
    <div
      tabIndex="0"
      aria-modal="true"
      className={styles.modalCover}
      onClick={onClickOutside}
      onKeyDown={onKeyDown}
    >
      <div className={styles.modalArea} ref={modal}>
        <button className={styles._modalClose} onClick={closeModal}>
          <svg className={styles._modalCloseIcon} viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
export default Modal;
