import PropTypes from 'prop-types';
import s from './RepoItem.module.css';

const RepoItem = ({ name, language, description }) => {
  return (
    <li data-aos="zoom-in" data-aos-duration="2500" className={s.item}>
      <p className={s.namesOfFields}>
        name: <span className={s.name}> {name}</span>
      </p>
      <p className={s.namesOfFields}>
        language: <span className={s.language}> {language}</span>
      </p>
      <p className={s.namesOfFields}>
        description: <span className={s.description}> {description}</span>
      </p>
    </li>
  );
};

RepoItem.propTypes = {
  name: PropTypes.string.isRequired,
  language: PropTypes.string,
  description: PropTypes.string,
};

export default RepoItem;
