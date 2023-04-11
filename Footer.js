import React from 'react';
import './Footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ReplayIcon from '@mui/icons-material/Replay';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import {Grid,Slider} from '@mui/material';
import { useDataLayerValue } from './DataLayer';



function Footer() {
  const[{token,item,playing},dispatch]=useDataLayerValue();

  return (
    <div className='footer'>
      <div className='footer__left' >

        <img className ="footer_albumLogo"src={item?.album.images[0].url} alt={item?.name}/>
        <div className="footer_songInfo">
         <h5>yeah!</h5>
         <p>user!</p>

        </div>
          



      </div>

      <div className="footer__center">
        
        <ShuffleIcon className='footer__shuffle'/>
        <SkipPreviousIcon className='footer__prev' />
        <PlayCircleIcon fontSize='large' className='footer__play'/>
        <SkipNextIcon className='footer__next'/>
        <ReplayIcon className='footer__shuffle'/>
        

      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
          <Grid item>
            <Slider default-defaultValue={10} aria-labelledby='continuous-slider'/>

          </Grid>
        </Grid>
      </div>
      
    </div>
  )
}

export default Footer
