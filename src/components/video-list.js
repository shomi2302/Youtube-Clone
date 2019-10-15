import React from 'react';
import { Grid } from '@material-ui/core'
import VideoItem from './video-item'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
   gridBox:{
     display: 'grid',
     gridGap: '30px',
     gridTemplateColumns: '1fr 1fr 1fr 1fr'
   }
});


const VideoList = ({videos, selectVideoFunc}) => {
  const VidsList = videos.map((video,index) => {
    return (<VideoItem video={video} selectVideoFunc={selectVideoFunc} key={index}/>)
  })

  const classes = useStyles()

  return (
    <div>
      <div className={classes.gridBox}>
        {VidsList}
      </div>
    </div>
  )
}

export default VideoList;
