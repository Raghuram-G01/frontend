import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { FileText, Clock, CheckCircle, Award, Calendar } from 'lucide-react';

const UserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { user } = useAuth();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:21000/api/v1/User/submissions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ userId: user.id })
      });
      const data = await response.json();
      if (data.success) {
        setSubmissions(data.submissions || []);
      }
    } catch (err) {
      setError('Error fetching submissions');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: 'white',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      padding: '1.5rem',
      marginBottom: '1rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    },
    submissionItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    marksContainer: (hasMarks) => ({
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      background: hasMarks ? '#d1fae5' : '#fef3c7',
      color: hasMarks ? '#065f46' : '#92400e',
      fontWeight: 'bold',
    }),
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Loading submissions...</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>📊 My Submissions</h1>
        <p>View your submitted assignments and grades</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {error && (
          <div style={styles.card}>
            <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
          </div>
        )}

        {submissions.length === 0 ? (
          <div style={styles.card}>
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              No submissions found. Submit some assignments to see them here.
            </p>
          </div>
        ) : (
          <div style={styles.card}>
            <h3 style={{ marginBottom: '1.5rem', color: '#1f2937' }}>
              Submitted Assignments ({submissions.length})
            </h3>
            
            {submissions.map((submission) => (
              <div key={submission._id} style={styles.submissionItem}>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={20} color="#667eea" />
                    {submission.assignment?.assignmentName || 'Assignment'}
                  </h4>
                  <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={14} />
                    Submitted: {submission.submittedAt ? new Date(submission.submittedAt).toLocaleDateString() : 'N/A'}
                  </p>
                  {submission.assignment?.deadline && (
                    <p style={{ margin: '0 0 0.25rem 0', color: '#6b7280', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={14} />
                      Deadline: {new Date(submission.assignment.deadline).toLocaleDateString()}
                    </p>
                  )}
                  {submission.feedback && (
                    <p style={{ margin: '0.5rem 0 0 0', color: '#4b5563', fontSize: '0.9rem' }}>
                      <strong>Feedback:</strong> {submission.feedback}
                    </p>
                  )}
                </div>
                
                <div style={styles.marksContainer(submission.marks !== null)}>
                  {submission.marks !== null ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={18} />
                      {submission.marks} marks
                    </div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={18} />
                      Waiting for grading
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSubmissions;