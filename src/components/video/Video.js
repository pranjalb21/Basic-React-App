// Module import
import React from 'react';

// CSS file import
import './video.css';

function Video({ id, imageLink, title, views, viewsParam, channelName, verified, deleteVideo, addVideo }) {
  return (

    <div className="card" style={{ 'width': '15rem' }}>
      <button className="btn btn-danger close" onClick={()=>deleteVideo(id)}><b>X</b></button>
      <img src={`${imageLink}${id}`} alt="thumbneil" className="card-img-top" />
      <div className="card-body">
        <h5 className='card-title'>{title}</h5>
        <p className="card-text">{channelName} {verified ? '✅' : ''} | {views}{viewsParam} views</p>
      </div>
    </div>
  )
}

export default Video
