import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/mainpage/MainPage';
import DetailPage from './components/detailpage/DetailPage';
import theme from './components/theme';
import store from './redux/store';
import { fetchLeagues } from './redux/homepage/homePageSlice';

const App = () => {
  store.dispatch(fetchLeagues());
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
