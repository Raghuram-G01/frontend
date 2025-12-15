import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 50%, #00d2ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
    hero: {
      textAlign: 'center',
      color: 'white',
      marginBottom: '3rem',
      zIndex: 1,
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      marginBottom: '1rem',
      textShadow: '0 4px 8px rgba(0,0,0,0.3)',
      lineHeight: '1.1',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '500',
      opacity: 0.9,
      marginBottom: '2rem',
    },
    buttonContainer: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      zIndex: 1,
    },
    button: (isPrimary) => ({
      padding: '1rem 2.5rem',
      fontSize: '1.2rem',
      fontWeight: '700',
      borderRadius: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      background: isPrimary 
        ? 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
        : 'rgba(255,255,255,0.2)',
      color: 'white',
      boxShadow: isPrimary 
        ? '0 8px 25px rgba(255, 107, 107, 0.4)'
        : '0 8px 25px rgba(255,255,255,0.2)',
      backdropFilter: !isPrimary ? 'blur(10px)' : 'none',
      border: !isPrimary ? '1px solid rgba(255,255,255,0.3)' : 'none',
    }),
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
      maxWidth: '1000px',
      width: '100%',
      zIndex: 1,
    },
    featureCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      display: 'block',
    },
    featureTitle: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
    },
    featureDesc: {
      fontSize: '1rem',
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.hero}>
        <h1 style={styles.title}>
          🎓 Welcome to Our<br/>Learning Management Portal
        </h1>
        <p style={styles.subtitle}>
          Empowering Education Through Technology
        </p>
      </div>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button(true)}
          onClick={() => navigate('/login')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
          }}
        >
          🔑 Login
        </button>
        
        <button
          style={styles.button(false)}
          onClick={() => navigate('/register')}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.background = 'rgba(255,255,255,0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'rgba(255,255,255,0.2)';
          }}
        >
          📝 Register
        </button>
      </div>

      <div style={styles.features}>
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>📚</span>
          <h3 style={styles.featureTitle}>Assignment Management</h3>
          <p style={styles.featureDesc}>Create, submit, and track assignments with ease</p>
        </div>
        
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>📊</span>
          <h3 style={styles.featureTitle}>Grade Tracking</h3>
          <p style={styles.featureDesc}>Monitor progress and view detailed feedback</p>
        </div>
        
        <div style={styles.featureCard}>
          <span style={styles.featureIcon}>👥</span>
          <h3 style={styles.featureTitle}>User Management</h3>
          <p style={styles.featureDesc}>Seamless admin and student collaboration</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;