import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'sans-serif', color: '#333' }}>
        <nav style={{ padding: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ margin: 0 }}>Minha Imobiliária</h2>
          </div>
        </nav>
        
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imovel/:slug" element={<PropertyDetails />} />
          </Routes>
        </main>

        <footer style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
          <p>&copy; 2026 Imobiliária Sanity + React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
