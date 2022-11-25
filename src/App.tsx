import { GlobalStyle } from "./shared/globalStyles/globalStyles";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/AppRoutes";

export const App = () => {
  return (
    <>
        <GlobalStyle />
        <AppRoutes/>

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

