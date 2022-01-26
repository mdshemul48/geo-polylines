import { Wrapper } from '@googlemaps/react-wrapper';
import './App.css';

// components
import MapMainComponent from './components/GoogleMap/MainMapContainer';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const render = (status) => {
    console.log(status);
    return null;
  };
  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_API} render={render}>
      <div className='App'>
        <h1>Google Initial Demo</h1>
        <button className='btn btn-primary my-3 ms-2'>ADD</button>
        <MapMainComponent />
      </div>
    </Wrapper>
  );
}

export default App;
