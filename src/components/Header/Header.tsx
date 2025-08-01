import React from 'react';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title = 'Multi Theme Switcher', children }) => {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        background: '#f5f5f5',
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{title}</h1>
      <div>{children}</div>
    </header>
  );
};

export default Header;
