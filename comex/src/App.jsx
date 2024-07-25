import "./App.css";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const Childcomp = () => {
  return <div>Child Components</div>;
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body>
        <Childcomp />
      </Body>
      <Footer />
    </div>
  )
}
export default App;
