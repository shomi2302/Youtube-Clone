import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
            <Typography gutterBottom variant="h5" component="h5">
              {video.snippet.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {video.snippet.description}
            </Typography>
          </CardContent>

        </CardActionArea>
        <Link className={classes.linkButton} to={'/' + video.id.videoId} onClick={() => selectVideoFunc(video)}></Link>
      </Card>)
  }

export default VideoItem;
