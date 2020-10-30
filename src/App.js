import './App.css';
import bg from './background.png'

  function App() {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${bg})`,
          backgroundRepeat  : 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
    );
  }
export default App;
 