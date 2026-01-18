import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "sans-serif", color: "#333", width: "100%" }}>
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600">
                  MinhaLogo
                </span>
              </div>

              <div className="hidden md:flex space-x-8 items-center">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Início
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Imóveis
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Serviços
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                >
                  Contato
                </a>
              </div>

              <div className="md:hidden flex items-center">
                <button className="outline-none mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imovel/:slug" element={<PropertyDetails />} />
          </Routes>
        </main>

        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            borderTop: "1px solid #eee",
            textAlign: "center",
          }}
        >
          <p>&copy; 2026 Imobiliária Sanity + React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
