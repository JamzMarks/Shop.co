import './App.css'
import Footer from './components/layout/footer/footer.components'
import Navigation from './components/layout/navigation/navigation.component'
import SignMsg from './components/common/signMsg/signMsg.component'
// import ProductCard from './components/productCard/productCard.component'
function App() {

  return (
    <>
      <header>
        <SignMsg/>
        <Navigation></Navigation>
      </header>
      <main>
        {/* <ProductCard></ProductCard> */}
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
