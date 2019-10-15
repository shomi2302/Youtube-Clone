import React from 'react';
import './App.css';
import {Grid,Container,makeStyles} from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom'
import youtube from './api/youtube'
import SearchBar from './components/search-bar'
import VideoDetails from './components/video-details'
import VideoList from './components/video-list'

class App extends React.Component {

  state = {
    videos:[],
    selectedVideo:null
  }

  submitForm = async (searchTerm) => {
    const res = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults: 8,
        key: 'AIzaSyCvTJVsowiCrEtQ79R9CHEeOglFCY1Q_rI',
        q: searchTerm
      }
    })

    this.setState({
      videos:res.data.items
    })

  }

  selectVideoFunc = (video) => {
    console.log(video)
    this.setState({selectedVideo:video})
  }

  componentDidMount(){
    this.submitForm('liverpool champions')
  }


  render() {

    const {videos,selectedVideo} = this.state
    return (
      <BrowserRouter>

        <Container maxWidth="lg" fixed >
          <Grid justify="center" container spacing={3}>
            <Grid item xs={12}>
              <SearchBar submitForm={this.submitForm}/>
            </Grid>

            <Grid item xs={12}>
              <Route path="/:video_id" render={(routeProps) => (<VideoDetails {...routeProps} video={selectedVideo} selectVideoFunc={this.selectVideoFunc} videos={videos}/>)}/>
              <Route exact path="/" render={(routeProps) => (<VideoList {...routeProps} selectVideoFunc={this.selectVideoFunc} videos={videos} />)}/>
            </Grid>


          </Grid>
        </Container>
      </BrowserRouter>)
  }

}

export default App;
