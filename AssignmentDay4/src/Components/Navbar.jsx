import React from 'react';

const Navigation = () => {
  return (
    <nav style={{
      backgroundColor: '#00000052', // transparent background
      color: 'white',
      padding: '12px 16px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backdropFilter: 'blur(6px)' // optional: add blur for better readability
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          fontSize: '24Px',
          fontWeight: 'bold',
          color: 'white'
        }}>
          template4u
        </div>
        <div style={{
          display: 'flex',
          gap: '24px'
        }}>
          <a href="#home" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px'
          }}>HOME</a>
          <a href="#explore" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px'
          }}>EXPLORE</a>
          <a href="#create" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px'
          }}>CREATE</a>
          <a href="#share" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '15px'
          }}>SHARE</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
