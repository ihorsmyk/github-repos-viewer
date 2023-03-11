import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const getRepos = async user => {
  const { data } = await githubAPI.get(`${user}/repos`);
  return data;
};
