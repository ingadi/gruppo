import Header from "./features/Header";
import Content from "./features/Content";
import "./App.css";
import Modal from "./components/Modal";

import { AuthProvider } from "./features/AuthProvider/AuthProvider";
import { DepthProvider } from "./features/DepthProvider/DepthProvider";

function App() {
  return (
    <AuthProvider>
      <main>
        <DepthProvider>
          <Header />
          <Content />
        </DepthProvider>
      </main>
    </AuthProvider>
  );
}

export default App;
