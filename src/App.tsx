import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full min-h-screen min-w-[450px] bg-black">
      <div className="mx-10 pt-5 xl:pt-0">
        <Header />
        <main className="my-5 h-full rounded-2xl bg-purple-700 xl:my-12">
          <About />
        </main>
        <p>test</p>
      </div>
    </div>
  );
}

export default App;
