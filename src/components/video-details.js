import React from 'react';
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'

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
  }
});

const VideoDetails = ({video}) => {
  const classes = useStyles();
  if(!video) return  (<div className={classes.loadContainer}><Icon className="rotate" fontSize="large" color="primary">loop</Icon></div>)

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <Paper className={classes.respContainer}>
      <iframe className={classes.respIframe} title="Video Player" frameBorder="0" component="iframe" allowFullScreen src={videoSrc}/>
    </Paper>);
}

export default VideoDetails;
