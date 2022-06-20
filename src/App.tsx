import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { MonthStatisticsPage } from "./pages/MonthStatisticsPage/MonthStatisticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/month-statistics' element={<MonthStatisticsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
