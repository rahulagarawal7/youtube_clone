import { useSelector, useDispatch } from "react-redux";
import PopupModal from "./PopupModal";
import { popAlert } from "../store/slices/alertSlice";

const GlobalAlertPopup = () => {
  const dispatch = useDispatch();
  const AlertQueue = useSelector((state) => state.alert.queue);

  console.log("----->", AlertQueue);
  const current = AlertQueue[0] || null;

  if (!current) return null;

  return (
    <PopupModal
      key={`${current.status}-${current.title}`}
      onClose={() => dispatch(popAlert())}
      message={current.message}
      title={current.title}
      isVisible={current !== null}
    />
  );
};

export default GlobalAlertPopup;
