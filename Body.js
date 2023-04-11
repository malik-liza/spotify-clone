import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongRow from './SongRow';



function Body() {
    const[{ discover_weekly },dispatch]=useDataLayerValue();

  return (
    <div className="body">
      
      <Header/>
      <div className="body__info">
        <img className='back_image'src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLISTS</strong>
          <h2>DISCOVER WEEKLY</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className="body__icons">
          <PlayCircleFilled   className='body__play'/>
          <Favorite />
          <MoreHoriz/>
        </div>
        {discover_weekly?.tracks.items.map((items)=>{
          <SongRow  track={items.track}/>
        })}
        
      </div>
    </div>
  )
}

export default Body
