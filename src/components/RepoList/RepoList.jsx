import PropTypes from 'prop-types';
import RepoItem from 'components/RepoItem/RepoItem';

const RepoList = ({ repoList }) => {
  return (
    <ul>
      {Array.isArray &&
        repoList?.map(({ id, name, language, description }) => {
          return (
            <RepoItem
              key={id}
              name={name}
              language={language || 'not known'}
              description={description || 'there is no'}
            />
          );
        })}
    </ul>
  );
};

RepoList.propTypes = {
  repoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      language: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default RepoList;
