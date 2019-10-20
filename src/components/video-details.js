import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import VideoList from './video-list'
import Moment from 'react-moment';

const useStyles = makeStyles({
  respContainer: {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '56.25%'
  },
  respIframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      border: '0'
  },
  loadContainer:{
    width:'100%',
    height:'300px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  dataBox:{
    marginTop:'10px',
    padding:'35px 20px'
  },
  titleMargin:{
    marginBottom:'15px'
  }
});

const VideoDetails = ({video,selectVideoFunc,videos}) => {

  const classes = useStyles();
  if(!video) return  (<div className={classes.loadContainer}><Icon className="rotate" fontSize="large" color="primary">loop</Icon></div>)

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return ( 

      <Grid container spacing={3}>
      <Grid item xs={8}>
        <Paper className={classes.respContainer}>
          <iframe className={classes.respIframe} title="Video Player" frameBorder="0" component="iframe" allowFullScreen src={videoSrc}/>
        </Paper>
        <Paper className={classes.dataBox}>
          <Typography className={classes.titleMargin}  variant="h5" component="h2">
            {video.snippet.title}
          </Typography>
          <Typography  color="textSecondary" component="p">
            Date: <Moment format="YYYY/MM/DD">{video.snippet.publishedAt}</Moment>
          </Typography>
        </Paper>

        <Paper className={classes.dataBox}>
          <Typography  variant="h6" component="h5">
            Channel Name
          </Typography>
          <Typography  variant="h6" color="textSecondary" component="h6">
            {video.snippet.channelTitle}
          </Typography>

        </Paper>

        <Paper className={classes.dataBox}>
          <Typography className={classes.titleMargin} variant="h6" component="h6">
            Summary
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {video.snippet.description}
          </Typography>
        </Paper>
      </Grid>
      <Grid className={classes.videoList} item xs={4}>
        <VideoList selectVideoFunc={selectVideoFunc} videos={videos.slice(0,4)}></VideoList>
      </Grid>
      </Grid>

  );
}

export default VideoDetails;
