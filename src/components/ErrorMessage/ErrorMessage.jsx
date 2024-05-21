import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function ErrorMessage({ message }) {
  useEffect(() => {
    toast.error(message);
  }, [message]);

  return <Toaster position="top-right"
  reverseOrder={false} />;
}

export default ErrorMessage;
