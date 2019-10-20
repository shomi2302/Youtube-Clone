import React from 'react';
import VideoItem from './video-item'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
   gridBox:{
     display: 'grid',
     gridGap: '30px',
     gridTemplateColumns: '1fr 1fr 1fr'
   },
   gridBox2:{
     display: 'grid',
     gridGap: '10px'
   }
});


const VideoList = ({videos, selectVideoFunc, match}) => {

  const VidsList = videos.map((video,index) => {
    return (<VideoItem video={video} selectVideoFunc={selectVideoFunc} key={index}/>)
  })

  const classes = useStyles()

  return (
      <div className={(match) ? classes.gridBox : classes.gridBox2}>
        {VidsList}
      </div>
  )
}

export default VideoList;
