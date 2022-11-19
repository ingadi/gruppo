import Header from "./features/Header";
import Content from "./features/Content";
import "./App.css";

import { AuthProvider } from "./features/AuthProvider";
import { SelectedTagsProvider } from "./features/SelectedTagsProvider";

function App() {
  return (
    <AuthProvider>
      <main>
        <SelectedTagsProvider>
          <Header />
          <Content />
        </SelectedTagsProvider>
      </main>
    </AuthProvider>
  );
}

export default App;
