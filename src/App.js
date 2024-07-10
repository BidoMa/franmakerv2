import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Nueva importación

const FranmakerInterface = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'demo@franmaker.com' && password === 'demo123') {
      setLoginMessage('Login exitoso');
      setIsLoggedIn(true);
      setTimeout(() => setShowLoginModal(false), 1500);
    } else {
      setLoginMessage('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setLoginMessage('');
  };

  const features = [
    { name: 'Dashboard intuitivo', description: 'Visualiza todos tus datos en un solo lugar' },
    { name: 'Creador de manuales', description: 'Crea y actualiza manuales de franquicia fácilmente' },
    { name: 'Gestión de clientes', description: 'Administra tus franquiciados de manera eficiente' },
    { name: 'Análisis de datos con IA', description: 'Obtén insights valiosos con nuestra IA avanzada' }
  ];

  const plans = [
    { name: 'Básico', price: '29', features: ['Dashboard básico', 'Creación de manuales', 'Soporte por email'] },
    { name: 'Pro', price: '59', features: ['Todo lo del plan Básico', 'Gestión avanzada de clientes', 'Análisis de datos con IA', 'Soporte prioritario 24/7'] }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#121212',
      color: '#e0e0e0',
    },
    header: {
      backgroundColor: '#1e1e1e',
      color: 'white',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    logo: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      color: '#4fc3f7',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
    },
    navItem: {
      marginLeft: '1.5rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.1rem',
      transition: 'color 0.3s ease',
    },
    button: {
      backgroundColor: '#4fc3f7',
      color: '#121212',
      padding: '0.6rem 1.2rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    main: {
      flexGrow: 1,
      padding: '3rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '4rem',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#4fc3f7',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    featureCard: {
      backgroundColor: '#1e1e1e',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#4fc3f7',
    },
    planGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    planCard: {
      backgroundColor: '#1e1e1e',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      flex: '1 1 300px',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    planTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#4fc3f7',
    },
    planPrice: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: 'white',
    },
    planFeatures: {
      listStyle: 'none',
      padding: 0,
      marginBottom: '1.5rem',
      flexGrow: 1,
    },
    planFeature: {
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
    },
    footer: {
      backgroundColor: '#1e1e1e',
      color: '#e0e0e0',
      padding: '2rem',
      textAlign: 'center',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: '#1e1e1e',
      padding: '2rem',
      borderRadius: '10px',
      maxWidth: '400px',
      width: '100%',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #333',
      borderRadius: '5px',
      backgroundColor: '#333',
      color: 'white',
    },
    closeButton: {
      position: 'absolute',
      top: '0.5rem',
      right: '0.75rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      color: '#e0e0e0',
      cursor: 'pointer',
    },
  };

  // Nueva condición para mostrar el Dashboard
  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>Franmaker</div>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#inicio" style={styles.navLink}>Inicio</a></li>
            <li style={styles.navItem}><a href="#caracteristicas" style={styles.navLink}>Características</a></li>
            <li style={styles.navItem}><a href="#precios" style={styles.navLink}>Precios</a></li>
            <li style={styles.navItem}>
              {isLoggedIn ? (
                <button onClick={handleLogout} style={styles.button}>Cerrar sesión</button>
              ) : (
                <button onClick={() => setShowLoginModal(true)} style={styles.button}>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main style={styles.main}>
        <section id="inicio" style={styles.section}>
          <h1 style={{...styles.sectionTitle, fontSize: '3rem'}}>Franmaker: Tu Asistente de Franquicias con IA</h1>
          <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem'}}>Simplifica la gestión de tu franquicia con inteligencia artificial. Optimiza tus operaciones, mejora la comunicación y aumenta tus beneficios.</p>
        </section>

        <section id="caracteristicas" style={styles.section}>
          <h2 style={styles.sectionTitle}>Características Principales</h2>
          <div style={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} style={{...styles.featureCard, ':hover': {transform: 'translateY(-5px)', boxShadow: '0 6px 12px rgba(79, 195, 247, 0.2)'}}}>
                <h3 style={styles.featureTitle}>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="precios" style={styles.section}>
          <h2 style={styles.sectionTitle}>Planes de Precios</h2>
          <div style={styles.planGrid}>
            {plans.map((plan, index) => (
              <div key={index} style={{...styles.planCard, ':hover': {transform: 'translateY(-5px)', boxShadow: '0 6px 12px rgba(79, 195, 247, 0.2)'}}}>
                <h3 style={styles.planTitle}>{plan.name}</h3>
                <p style={styles.planPrice}>${plan.price}<span style={{fontSize: '1rem', color: '#a0a0a0'}}>/mes</span></p>
                <ul style={styles.planFeatures}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} style={styles.planFeature}>
                      <span style={{marginRight: '0.5rem', color: '#4fc3f7'}}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{...styles.button, backgroundColor: '#4fc3f7', color: '#121212', width: '100%'}}>Seleccionar Plan</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Franmaker. Todos los derechos reservados.</p>
      </footer>

      {showLoginModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button 
              onClick={() => setShowLoginModal(false)}
              style={styles.closeButton}
            >
              ×
            </button>
            <h2 style={{...styles.sectionTitle, marginBottom: '1rem', fontSize: '2rem'}}>Acceso Demo</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={{...styles.button, backgroundColor: '#4fc3f7', color: '#121212', width: '100%'}}>Iniciar sesión</button>
            </form>
            {loginMessage && (
              <div style={{
                marginTop: '1rem',
                padding: '0.5rem',
                borderRadius: '5px',
                backgroundColor: loginMessage === 'Login exitoso' ? '#1b5e20' : '#b71c1c',
                color: 'white',
                textAlign: 'center',
              }}>
                {loginMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FranmakerInterface;