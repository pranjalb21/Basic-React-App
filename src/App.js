// Module import
import Video from './components/video/Video';
import videoList from './assets/videosList';

// CSS file import
import './App.css';
import { useEffect, useState } from 'react';
import ModifyCard from './components/modifyCard/ModifyCard';

function App() {
  let [videos, setVideos] = useState([]);

  useEffect(() =>
    setVideos(videoList)
  ,[]);

  function deleteVideo(id) {
    setVideos(videos.filter(v => v.id !== id));
  }

  function addVideo(video) {
    let x = { ...video, id: videos.length + 1, imageLink: 'https://loremflickr.com/300/200/'}
    let newVideo = [...videos, x]
    setVideos(newVideo);
    console.log('Added video');
    console.log(x);
  }



  return (
    <div className="container">
      <div className='row justify-content-center'>
        <ModifyCard modify={false} addVideo={addVideo} />
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
                addVideo={addVideo}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
