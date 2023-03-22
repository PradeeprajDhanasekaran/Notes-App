import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';
import { HashRouter, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <HashRouter>
    <div className='container dark'>
      <div className="app">
        <Header />
        <Route path="/"  exact  component={NotesListPage} />
        <Route path="/notes/:id"  component={NotePage} />

      </div>
    </div>
    </HashRouter>
    </>
  );
  
}

export default App;
