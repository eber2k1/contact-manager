import Header from './Header'
import ContactList from './ContactList'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <ContactList />
      </main>
      <Footer />
    
    </div>
  )
}


export default App