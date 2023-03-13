import { Header } from "./component/Header/Header";
import Header2 from "./component/Header/Header2";
import SideBar from "./component/SideBar/SideBar";

function App() {

  return (
    <>
    <Header />
    <Header2 />
    <main className=" grid grid-cols-3 place-items-center">
    <SideBar />
    

    </main>
    </>
  );

}

export default App;
