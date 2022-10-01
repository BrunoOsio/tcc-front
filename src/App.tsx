import { TeamAreaBoard } from "./pages";

import { GlobalStyle } from "./shared/globalStyles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
        <GlobalStyle />
        <TeamAreaBoard /> 
        <ToastContainer 
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />

    </>
  );
}

