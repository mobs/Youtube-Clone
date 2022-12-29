import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import youtube from './api/youtube';

/*
instead of importing as below we can have an index.js file in components folder
index.js has some benfits over the other folders in ReactJS
import SearchBar from './components/SearchBar';
import {VideoList} from './components/VideoList';
import VideoDetail from './components/VideoDetail';
*/

import { SearchBar, VideoDetail, VideoList } from './components';

class App extends React.Component {
  
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.handleSubmit('virat kohli 100');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = async (searchText) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBLWEg0oEcLj4KmBDBiKKhISQ9vhjw2EFM',
        q: searchText
      }   
    });
    // console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
    
  } 

  render () {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid justify='center' container spacing ={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              {/* SEARCH BAR */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* VIDEO DETAILS */}
              <VideoDetail video={ selectedVideo } />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
