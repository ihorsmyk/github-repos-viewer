import { useState, useEffect } from 'react';
import Background from 'components/Background/Background';
import SearchBar from 'components/SearchBar/SearchBar';
import RepoList from 'components/RepoList/RepoList';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRepos } from 'services/API';

export const App = () => {
  const [repos, setRepos] = useState([]);
  const [request, setRequest] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!request) return;

    const makeRequest = async request => {
      try {
        setIsLoading(true);
        const fetchedRepos = await getRepos(request);
        if (fetchedRepos.length === 0)
          Notify.warning(`no user with the name ${request} was found`);

        const resultRepos =
          Array.isArray &&
          fetchedRepos.map(({ id, name, language, description }) => {
            return { id, name, language, description };
          });
        setRepos(resultRepos);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    makeRequest(request);
  }, [request]);

  useEffect(() => {
    if (!error) return;

    Notify.failure(`some error occured ${error}`);
  }, [error]);

  const requestManage = requestFromSearchBar => {
    requestFromSearchBar.trim();
    if (!requestFromSearchBar) {
      Notify.info('the input field is empty!');
    } else if (requestFromSearchBar === request) {
      Notify.info('already found!');
    } else {
      setRepos([]);
      setRequest(requestFromSearchBar);
      setError(null);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <SearchBar search={requestManage} />
      <Background />
      <RepoList repoList={repos} />
    </>
  );
};
