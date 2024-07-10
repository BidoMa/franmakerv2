import React, { useState } from 'react';

const Dashboard = ({ onLogout }) => {
  const [activeSection, setActiveSection] = useState('Panel de trabajo');

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#fff',
      padding: '2rem 1rem',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#4a4a4a',
    },
    menuItem: {
      padding: '0.75rem',
      marginBottom: '0.5rem',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    activeMenuItem: {
      backgroundColor: '#e6f7ff',
      color: '#1890ff',
    },
    content: {
      flexGrow: 1,
      padding: '2rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    searchBar: {
      padding: '0.5rem',
      width: '300px',
      borderRadius: '20px',
      border: '1px solid #ddd',
    },
    userProfile: {
      display: 'flex',
      alignItems: 'center',
    },
    userName: {
      marginRight: '1rem',
    },
    section: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    guideBox: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
    },
    statGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
    },
    statItem: {
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '1rem',
    },
    progressBar: {
      width: '100%',
      backgroundColor: '#e0e0e0',
      borderRadius: '5px',
      marginTop: '0.5rem',
    },
    progressFill: {
      height: '10px',
      backgroundColor: '#4caf50',
      borderRadius: '5px',
      width: '75%',
    },
  };

  const menuItems = [
    'Panel de trabajo', 'Home', 'Bases Documentales', 'Pasos del proyecto', 'Información',
    'Empresa', 'Modelo de Negocio', 'Modelo de Franquicia', 'Marketing & Comunicación',
    'Productos', 'Medios y Recursos', 'Desarrollo y Expansión', 'Incorporación de Franquiciados',
    'Gestión de la Red de Franquicia', 'Estructura de Gastos', 'Fuentes de Ingreso',
    'Archivos históricos', 'FranUniversity'
  ];

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.logo}>FRANMAKER</div>
        {menuItems.map((item) => (
          <div
            key={item}
            style={{
              ...styles.menuItem,
              ...(activeSection === item ? styles.activeMenuItem : {}),
            }}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={styles.content}>
        <header style={styles.header}>
          <input style={styles.searchBar} type="text" placeholder="Type in to search ..." />
          <div style={styles.userProfile}>
            <span style={styles.userName}>John Doe</span>
            <button onClick={onLogout}>Logout</button>
          </div>
        </header>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>GUIAS DE COMO FRANQUICIAR TU NEGOCIO</h2>
          <div style={styles.guideBox}>
            <h3>Bienvenidos a FRANMAKER</h3>
            <p>Desarrolla tu franquicias fácilmente con video!</p>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>EMPRESA</h2>
          <div style={styles.statGrid}>
            {['Email Subscriptions', 'Updates', 'Channel', 'Locations', 'Misc'].map((stat, index) => (
              <div key={index} style={styles.statItem}>
                <div>{stat}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <div style={styles.progressBar}>
                  <div style={styles.progressFill}></div>
                </div>
                <div>75%</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>HISTORIAL DE MODIFICACIONES</h2>
          {/* Aquí puedes agregar una tabla o lista de modificaciones */}
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>INVITACIÓN A COLABORADORES</h2>
          {/* Aquí puedes agregar un formulario o lista de colaboradores */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;