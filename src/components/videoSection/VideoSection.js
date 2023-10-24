import React from 'react';
import Video from '../video/Video';

function VideoSection({videos, deleteVideo, handleEdit}) {
  return (
    <>
     {
          videos.map(video =>
            <div className="col-md-auto" key={video.id} style={{ 'margin': '10px' }}>
              <Video
                id={video.id}
                title={video.title}
                imageLink={video.imageLink}
                views={video.views}
                viewsParam={video.viewsParam}
                channelName={video.channelName}
                verified={video.verified}
                deleteVideo={deleteVideo}
                handleEdit={handleEdit}
              />
            </div>
          )
        } 
    </>
  )
}

export default VideoSection
