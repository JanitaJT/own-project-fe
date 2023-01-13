import { ContextProvider } from "./Context";
import Navigation from "./Navigation";

function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

export default App;
