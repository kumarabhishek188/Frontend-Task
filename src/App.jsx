import { useState } from 'react';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('signup'); // Start with signup
  const [currentPage, setCurrentPage] = useState('home');

  const handleSignupSuccess = (userData) => {
    console.log('Signup successful:', userData);
    // After successful signup, switch to login
    setCurrentView('login');
  };

  const handleLogin = (userData) => {
    console.log('Login successful:', userData);
    setCurrentUser(userData);
    setCurrentView('main');
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('login');
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const switchToSignup = () => {
    setCurrentView('signup');
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  const renderContent = () => {
    if (currentView === 'signup') {
      return (
        <SignUpPage 
          onSignupSuccess={handleSignupSuccess}
          onSwitchToLogin={switchToLogin}
        />
      );
    }

    if (currentView === 'login') {
      return (
        <LoginPage 
          onLogin={handleLogin}
          onSwitchToSignup={switchToSignup}
        />
      );
    }

    if (currentView === 'main' && currentUser) {
      switch (currentPage) {
        case 'home':
          return <HomePage currentUser={currentUser} />;
        case 'about':
          return <AboutPage />;
        case 'contact':
          return <ContactPage />;
        default:
          return <HomePage currentUser={currentUser} />;
      }
    }

    // Fallback
    return (
      <LoginPage 
        onLogin={handleLogin}
        onSwitchToSignup={switchToSignup}
      />
    );
  };

  return (
    <div className="App">
      {currentView === 'main' && currentUser && (
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}
      
      <main className="main-content">
        {renderContent()}
      </main>
      
      {currentView === 'main' && currentUser && (
        <Footer onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
