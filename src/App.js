import './App.css';
import { Routes, Route } from 'react-router';
import { Home } from './page/home';
import { Login } from './page/login'
import { Register } from './page/register'
import { AuthProvider } from './context/authContext'
import { ProtectedRouter } from 'page/protectedRouter';
import { Dashboard } from 'page/dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element=
              {
                <ProtectedRouter>
                  <Home />
                </ProtectedRouter>
              }
            />
            <Route
              path="/das"
              element=
              {
                <ProtectedRouter>
                  <Dashboard />
                </ProtectedRouter>
              }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
