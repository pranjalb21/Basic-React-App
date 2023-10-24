// Module import
import Video from './components/video/Video';
import videoList from './assets/videosList';

// CSS file import
import './App.css';
import { useEffect, useState } from 'react';
import ModifyCard from './components/modifyCard/ModifyCard';
import VideoSection from './components/videoSection/VideoSection';

function App() {
  let [videos, setVideos] = useState([]);
  let [editableVideo, setEditableVideo] = useState(null);

  useEffect(() =>
    setVideos(videoList)
  ,[]);

  function deleteVideo(id) {
    let newVideos = videos.filter(v => v.id !== id);
    setVideos(newVideos);
    if(editableVideo?.id === id)
      handleReset();
  }

  function addVideo(video) {
    let newVideo = [...videos, { ...video, id: videos.length + 1, imageLink: 'https://loremflickr.com/300/200/'}]
    setVideos(newVideo);
  }

  
  function handleEdit(id){
    setEditableVideo(videos.find(v => v.id === id));
  }

  function editVideo(video){
    let index = videos.findIndex(v => v.id === video.id);
    let newVideo = [...videos]
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
    setEditableVideo(null); 
  }

  function handleReset(){
    setEditableVideo(null);
  }

  return (
    <div className="container">
      <div className='row justify-content-center'>
        <ModifyCard modify={false} addVideo={addVideo} editableVideo={editableVideo} editVideo={editVideo} handleReset={handleReset} />
        <VideoSection videos={videos} deleteVideo={deleteVideo} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
