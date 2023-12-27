import Main from "./Layout/Main";
import ItemContextProvider from "./store/ItemContext";

const App = () => {
  return (
    <ItemContextProvider>
      <Main/>
    </ItemContextProvider>
  )
}

export default App;
