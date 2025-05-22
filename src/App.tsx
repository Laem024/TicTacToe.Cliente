import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <AppRouter />
      <footer className="py-1">
        <Footer />
      </footer>
    </>
  )
}

export default App;
