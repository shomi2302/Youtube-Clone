import React from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card:{
    position:'relative'
  },
  linkButton:{
    position:'absolute',
    width:'100%',
    height:'100%',
    left:'0',
    top:'0',
    zIndex:'100'
  }
})

const VideoItem = ({video, selectVideoFunc}) => {
  const classes = useStyles()
  return (
      <Card className={classes.card}>
        <CardActionArea>

          <CardMedia
            component="img"
            alt={video.snippet.title}
            height="160"
            className={classes.media}
            src={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
          />

          <CardContent>
            <Typography gutterBottom>
              <b> {video.snippet.title}</b>
            </Typography>
            <Typography gutterBottom color="primary">
              {video.snippet.channelTitle}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {video.snippet.description}
            </Typography>
          </CardContent>

        </CardActionArea>
        <NavLink className={classes.linkButton} to={'/' + video.id.videoId} onClick={() => selectVideoFunc(video)}></NavLink>
      </Card>)
  }

export default VideoItem;
