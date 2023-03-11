import { FidgetSpinner } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.overlay}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        ballColors={['#6e61ca', '#c282fa', '#ebedee']}
        backgroundColor="#243d66"
      />
    </div>
  );
};

export default Loader;
