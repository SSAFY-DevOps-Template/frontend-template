import axiosInstance from './axiosInstance';

const getCoach = (coachId) => {
  const config = {
    url: `/coach/${coachId}`,
    method: 'get',
  };
  const response = axiosInstance(config);
  return response;
};

const getCoachList = () => {
  const config = {
    url: '/coach/coaches',
    method: 'get',
  };
  const response = axiosInstance(config);
  return response;
};

const createCoach = (coachData) => {
  const config = {
    url: `/coach/create`,
    method: 'post',
    data: coachData,
  };
  const response = axiosInstance(config);
  return response;
};

const updateCoach = (coachId, coachData) => {
  const config = {
    url: `/coach/update/${coachId}`,
    method: 'put',
    data: coachData,
  };
  const response = axiosInstance(config);
  return response;
};

export { getCoach, getCoachList, createCoach, updateCoach };
