import './App.css';
import Header from './sections-site/header';
import Meetme from './sections-site/meetMe';
import Cert from './sections-site/cert';
import Welcome from './sections-site/welcome';
import Projects from './sections-site/projects';
import Footer from './sections-site/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Meetme/>
      <Welcome/>
      <Cert/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
