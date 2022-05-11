import {React, useState} from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/pages/Login/SignIn';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <ToastContainer pauseOnFocusLoss={false} theme={theme}/>
      <>
        <GlobalStyles/>
        <Router>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/dashboard/*' element={<Dashboard updateTheme={themeToggler}/>}/>
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
