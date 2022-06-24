import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MonthStatisticsPage } from "./pages/MonthStatisticsPage/MonthStatisticsPage";
import { Header } from "./components/Header/Header";
import { Popup } from "./components/Popup/Popup";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Popup />
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
