import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <BookOpen size={40} />,
      title: 'Interactive Learning',
      description: 'Access assignments and learning materials in an engaging format'
    },
    {
      icon: <Users size={40} />,
      title: 'Student Management',
      description: 'Streamlined enrollment and progress tracking for administrators'
    },
    {
      icon: <Award size={40} />,
      title: 'Performance Analytics',
      description: 'Track progress and performance with detailed analytics'
    }
  ];

  const benefits = [
    'Easy assignment submission and tracking',
    'Real-time progress monitoring',
    'Secure user authentication',
    'Admin approval system',
    'Responsive design for all devices'
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
    },
    nav: {
      display: 'flex',
      gap: '1rem',
    },
    navButton: {
      padding: '0.5rem 1.5rem',
      borderRadius: '8px',
      border: '2px solid white',
      background: 'transparent',
      color: 'white',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s',
      cursor: 'pointer',
    },
    navButtonPrimary: {
      background: 'white',
      color: '#667eea',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      color: 'white',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto 2rem',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    ctaButton: {
      padding: '1rem 2rem',
      borderRadius: '12px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s',
      cursor: 'pointer',
    },
    ctaPrimary: {
      background: 'white',
      color: '#667eea',
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
    },
    ctaSecondary: {
      background: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '2px solid white',
    },
    featuresSection: {
      background: 'white',
      padding: '4rem 2rem',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '3rem',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '16px',
      background: '#f8fafc',
      border: '1px solid #e2e8f0',
    },
    featureIcon: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      color: 'white',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1a202c',
      marginBottom: '0.5rem',
    },
    featureDescription: {
      color: '#718096',
      lineHeight: '1.6',
    },
    benefitsSection: {
      background: '#f8fafc',
      padding: '4rem 2rem',
    },
    benefitsContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    benefitsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
      marginTop: '2rem',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    footer: {
      background: '#1a202c',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>LMS Platform</div>
        <nav style={styles.nav}>
          <Link to="/login" style={styles.navButton}>
            Sign In
          </Link>
          <Link to="/register" style={{...styles.navButton, ...styles.navButtonPrimary}}>
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Welcome to Our Learning Management System
        </h1>
        <p style={styles.heroSubtitle}>
          Streamline your educational experience with our comprehensive platform designed for students and administrators
        </p>
        <div style={styles.ctaButtons}>
          <Link to="/register" style={{...styles.ctaButton, ...styles.ctaPrimary}}>
            Get Started <ArrowRight size={20} />
          </Link>
          <Link to="/login" style={{...styles.ctaButton, ...styles.ctaSecondary}}>
            Sign In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose Our Platform?</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.benefitsSection}>
        <div style={styles.benefitsContainer}>
          <h2 style={styles.sectionTitle}>Platform Benefits</h2>
          <div style={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <div key={index} style={styles.benefitItem}>
                <CheckCircle size={20} color="#10b981" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 LMS Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;