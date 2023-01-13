import { Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LabelBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Container>
          <Route>
          <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Route>
      </Container>
    </div>
    <LabelBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
