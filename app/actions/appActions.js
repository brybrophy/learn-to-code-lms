import appStore from '../stores/appStore';
import axios from 'axios';

export function trackSlideIndex(value) {
  return appStore.trackSlideIndex(value);
}

export function getEvents() {
  return axios.get('/auth/meetup/events')
  .then((res) => {
    appStore.getEvents(res.data)
  })
  .catch((err) => {
    console.error(err);
  });
}
