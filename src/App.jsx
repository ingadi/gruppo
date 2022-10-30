import Header from "./features/Header";
import Content from "./features/Content";
import "./App.css";
import Modal from "./components/Modal";
import Toast from "./components/Toast";
import { AuthProvider } from "./features/AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <main>
        {/* <Modal /> */}
        {/* <Toast /> */}
        {/* <Login /> */}

        <Header />
        <Content />
      </main>
    </AuthProvider>
  );
}

export default App;
