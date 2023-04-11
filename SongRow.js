import React from 'react'
import './SongRow.css'

function SongRow({track}) {
  console.log(track);
  return (
    <div className="songRow">
        <img className="songRow_album"src={track.album.image[0].url} alt=''/>
        <div  className='songRow__info'>
            <h1>my song row</h1>
            <p>
                {track.artists.map((artists)=>artists.name).join(',')}
                {track.album.name}
            </p>

        </div>
      
    </div>
  )
}

export default SongRow
