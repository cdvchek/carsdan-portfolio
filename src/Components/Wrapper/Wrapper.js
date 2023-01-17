import './Wrapper.css';
import Heading from '../Heading/Heading';
import Introduction from '../Introduction/Introduction';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Footing from '../Footing/Footing';

function Wrapper() {

  return (
    <div className="Wrapper">
      <Heading />
      <Introduction />
      <Skills />
      <Work />
      <Footing />
    </div>
  );
}

export default Wrapper;