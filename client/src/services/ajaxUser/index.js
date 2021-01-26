import { ajaxWrapper } from '../../helpers/ajaxWrapper';

import {urls} from '../../helpers/constant';

export const login = (data) => {
  const url = `${urls.USER}/login`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};

export const registration = (data) => {
  const url = `${urls.USER}/register`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  });
};

export const addEvent = (data) => {
  const url = `${urls.EVENTS}`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};

export const getAll = (data) => {
  const url = `${urls.EVENTS}`;
  return ajaxWrapper({
    method: 'GET',
    url,
    data,
  }).then(data => data.data)
};