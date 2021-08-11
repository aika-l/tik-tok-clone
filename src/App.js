import './App.css';
import Video from './Video'
import {useState, useEffect} from 'react';
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    //fires ones when the component loads BUT never after if you don't add dependency as ,[]
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()
      ))
    ))
  }, [videos])

  return (
    <div className="App">
      <div className='app_videos'>

        {videos.map(({ url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
            />
        ))}
      </div>
      <p>© Aika 2021</p>
    </div>
  );
}

export default App;
