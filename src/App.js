import React from 'react';
import './App.css';
import { Grid,Container } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import youtube from './api/youtube'
import SearchBar from './components/search-bar'
import VideoDetails from './components/video-details'
import VideoList from './components/video-list'
import { CSSTransition,TransitionGroup } from 'react-transition-group';

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
    this.setState({selectedVideo:video})
  }

  componentDidMount(){
    this.submitForm('liverpool champions')
  }


  render() {

    const {videos,selectedVideo} = this.state
    return (
      <BrowserRouter>
         <Route render={({ history, location }) => (
          <Container maxWidth="lg" fixed style={{marginBottom:'30px'}}>
            <Grid justify="center" container spacing={3}>
              <Grid item xs={12}>
                <SearchBar history={history} submitForm={this.submitForm}/>
              </Grid>

              <Grid item xs={12}>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={1500}
                    classNames="fade"
                    >
                    <Switch location={location}>
                      <Route exact path="/" render={(routeProps) => (<VideoList {...routeProps} selectVideoFunc={this.selectVideoFunc} videos={videos} />)}/>
                      <Route path="/:video_id" render={(routeProps) => (<VideoDetails {...routeProps} video={selectedVideo} selectVideoFunc={this.selectVideoFunc} videos={videos}/>)}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Grid>


            </Grid>
          </Container>
        )}/>
      </BrowserRouter>)
  }

}

export default App;
