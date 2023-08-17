import React, { useState } from 'react';
import './styles.scss';
import { SideBar } from '../SideBar';
import { Dashboard } from '../../views/Dashboard';
import { Order } from '../../views/Order';
import { Revenue } from '../../views/Revenue';
import { Profile } from '../../views/Profile';

function App() {
  const [activePage, setActivePage] = useState('');

  const displayPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Profile':
        return <Profile />;
      case 'Order':
        return <Order />;
      case 'Revenue':
        return <Revenue />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <SideBar activePage={activePage} setActivePage={setActivePage} />
      {displayPage()}
    </div>
  );
}

export default App;
