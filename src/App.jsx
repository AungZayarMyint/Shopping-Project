import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Child3 from "./Components/Child3";
import FirstContextProvider from "./Components/FirstContext";

const App = () => {

  return (
    <section>
      <FirstContextProvider>
        <Child1/>
        <Child2/>
        <Child3/>
      </FirstContextProvider>
    </section>
  )
}


export default App;
