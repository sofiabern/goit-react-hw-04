import toast, { Toaster } from "react-hot-toast";

function ErrorMessage() {
  toast.error("Oops! There was an error! Try again!");
  return <Toaster />;
}

export default ErrorMessage;
