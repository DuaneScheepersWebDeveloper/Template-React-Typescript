import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <div className="titleHeading">
        <h1>
          <FontAwesomeIcon icon={faReact} />
          React + Typescript
          <FontAwesomeIcon icon={faJs} /> Project Template
          <Counter />
        </h1>
      </div>
    </div>
  );
};

export default App;
