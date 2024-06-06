import React from 'react';
import Header from './components/Header';
import SalaryForm from './components/SalaryForm';
import EarningsList from './components/EarningsList';
import DeductionsList from './components/DeductionsList';
import CalculationResults from './components/CalculationResults';
import GlobalStyles from './styles/GlobalStyles';
import AppStoreProvider from './store/store';

const App = () => {
  return (
      <AppStoreProvider>
        <GlobalStyles />
        <Header />
        <div className="container">
          <SalaryForm />
          <EarningsList />
          <DeductionsList />
          <CalculationResults />
        </div>
      </AppStoreProvider>
  );
};

export default App;
