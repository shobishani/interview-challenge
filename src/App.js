import React, {Component} from 'react';
import {fetchImages} from './components/services';
import AlbumsList from './components/album/AlbumsList';
import {orderBy, uniqBy} from 'lodash';
import './App.css';

class App extends Component {
  state = {albums: [], loading: true}

  componentDidMount() {

    fetchImages()
      .then(({data}) => {
        if (data && data.length) {
          const sortedAlbs = orderBy(data, ['albumId'], ['desc']);
          const unique = uniqBy(sortedAlbs, 'albumId').slice(0, 3);
          const albums = [];
          unique.map((oneUniqueAlb) => {
            const filtered = sortedAlbs.filter(item => item.albumId === oneUniqueAlb.albumId);
            albums.push(filtered.slice(filtered.length - 2, filtered.length));
          });
          this.setState({...this.state, albums, loading: false});
          return;
        }
        this.setState({...this.state, loading: false})
      })
      .catch(error => console.log(error));
  }

  render() {
    const {loading, albums} = this.state;
    return (
      <div className={'App'}>
        {!!loading && <p>Loading.....</p>}
        {!!(albums && albums.length) && <AlbumsList albums={albums}/>}
      </div>
    );
  }
}

export default App;
