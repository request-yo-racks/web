import { PureComponent } from 'react';

class ServiceWorker extends PureComponent {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.dir(err));
    }
  }

  render() {
    return null;
  }
}

export default ServiceWorker;
