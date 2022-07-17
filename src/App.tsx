import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MonthStatisticsPage } from './pages/MonthStatisticsPage/MonthStatisticsPage';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/redux';
import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather';
//import { Popup } from './components/Popup/Popup';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather('tallinn'));
  }, [dispatch]);
    
   return (
    <div className='container'>
      <BrowserRouter>
        {/* <Popup /> */}
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/month-statistics' element={<MonthStatisticsPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
