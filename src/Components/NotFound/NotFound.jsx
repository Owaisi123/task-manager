import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{
      minHeight: 'auto',
      overflow:'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      textAlign: 'center',
    }}>
      <img 
        src="/not-found.webp" 
        alt="404 - Page Not Found" 
        style={{ maxWidth: '400px', width: '100%', marginBottom: '20px' }} 
      />
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" style={{
        marginTop: '20px',
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}>
        ← Go back to homepage
      </a>
    </div>
  );
};

export default NotFoundPage;
