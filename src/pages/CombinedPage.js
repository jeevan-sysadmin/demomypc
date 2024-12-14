import React from 'react';
import HomePage from './HomePage';
import InfoBoxesPage from '../components/Info/InfoBoxesPage';
import GetInTouchPage from '../components/Contact/GetInTouchPage';

const CombinedPage = () => {
  return (
    <div>
      <HomePage />
      <InfoBoxesPage />
      <GetInTouchPage/>
    </div>
  );
};

export default CombinedPage;
