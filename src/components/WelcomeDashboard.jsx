import { useAuth } from '../context/AuthContext';
import { BookOpen, Users, Award, Clock } from 'lucide-react';

const WelcomeDashboard = () => {
  const { user, isAdmin } = useAuth();

  const userStats = [
    { icon: <BookOpen size={24} />, label: 'Active Assignments', value: '3', color: '#3b82f6' },
    { icon: <Clock size={24} />, label: 'Pending Submissions', value: '1', color: '#f59e0b' },
    { icon: <Award size={24} />, label: 'Completed', value: '12', color: '#10b981' },
  ];

  const adminStats = [
    { icon: <Users size={24} />, label: 'Total Students', value: '45', color: '#3b82f6' },
    { icon: <BookOpen size={24} />, label: 'Active Assignments', value: '8', color: '#f59e0b' },
    { icon: <Award size={24} />, label: 'Pending Requests', value: '3', color: '#ef4444' },
  ];

  const stats = isAdmin ? adminStats : userStats;

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    welcomeCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    welcomeTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.5rem',
    },
    welcomeSubtitle: {
      fontSize: '1.1rem',
      color: '#718096',
      marginBottom: '1.5rem',
    },
    roleTag: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: isAdmin ? '#fef3c7' : '#dbeafe',
      color: isAdmin ? '#92400e' : '#1e40af',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    statCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    statIcon: (color) => ({
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    }),
    statContent: {
      flex: 1,
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '0.25rem',
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#718096',
    },
    quickActions: {
      background: 'white',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1a202c',
      marginBottom: '1rem',
    },
    actionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
    },
    actionButton: {
      padding: '1rem',
      background: '#f8fafc',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      textAlign: 'center',
    },
    actionTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#1a202c',
      marginTop: '0.5rem',
    },
  };

  const userActions = [
    { icon: '📚', title: 'View Assignments', description: 'Check your current assignments' },
    { icon: '📝', title: 'Submit Work', description: 'Submit completed assignments' },
    { icon: '📊', title: 'Check Grades', description: 'View your performance' },
  ];

  const adminActions = [
    { icon: '➕', title: 'Create Assignment', description: 'Add new assignments' },
    { icon: '👥', title: 'Manage Users', description: 'Handle user requests' },
    { icon: '✅', title: 'Grade Work', description: 'Review submissions' },
  ];

  const actions = isAdmin ? adminActions : userActions;

  return (
    <div style={styles.container}>
      <div style={styles.welcomeCard}>
        <h1 style={styles.welcomeTitle}>
          Welcome back, {user?.firstName}! 👋
        </h1>
        <p style={styles.welcomeSubtitle}>
          {isAdmin 
            ? 'Manage your learning platform and track student progress'
            : 'Continue your learning journey and track your progress'
          }
        </p>
        <span style={styles.roleTag}>
          {isAdmin ? '👨‍💼 Administrator' : '🎓 Student'}
        </span>
      </div>

      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div style={styles.statIcon(stat.color)}>
              {stat.icon}
            </div>
            <div style={styles.statContent}>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.quickActions}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <div style={styles.actionGrid}>
          {actions.map((action, index) => (
            <div 
              key={index} 
              style={styles.actionButton}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#667eea';
                e.target.style.background = '#f0f4ff';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.background = '#f8fafc';
              }}
            >
              <div style={{ fontSize: '2rem' }}>{action.icon}</div>
              <div style={styles.actionTitle}>{action.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#718096', marginTop: '0.25rem' }}>
                {action.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;