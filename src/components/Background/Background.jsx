import { FiGithub } from 'react-icons/fi';
import s from './Background.module.css';

const Background = () => {
  return (
    <div className={s.background}>
      <FiGithub className={s.icon} size="450" />
    </div>
  );
};

export default Background;
