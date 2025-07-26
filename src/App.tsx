import AppRouter from "./routes/AppRouter";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="grid-cols-3">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App;
