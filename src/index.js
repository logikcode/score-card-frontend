import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IndexPage } from './IndexStyled';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';
import SuperAdminDashboardPage from './pages/SuperAdminDashBoardPage/SuperAdminDashboard';
import DecadevDashboardPage from './pages/DecadevDashboardPage/DecadevDashboardPage';
import SuperAdminNavBar from './components/SuperAdmin/SuperAdminNavBar';
import ViewWeeklyPerformancePage from './pages/SuperAdminDashBoardPage/ViewWeeklyPerformancePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element ={<SuperAdminNavBar />}> 
          
          <Route path='/super-admin/dashboard' element={<SuperAdminDashboardPage />}> 
          
          </Route>
           <Route path="/super-admin/weekly-performance" element={<ViewWeeklyPerformancePage/>} />
        </Route>
       
        <Route path='/admin/dashboard' element={<AdminDashboardPage/>} />
        <Route path='/decadev/dashboard' element={<DecadevDashboardPage />} />
      </Routes>
    </BrowserRouter>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
