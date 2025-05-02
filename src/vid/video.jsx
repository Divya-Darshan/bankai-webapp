import React, { useEffect, useState } from 'react';
import './vid.css';

function Video() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_KEY = 'AIzaSyDmFBrW-Hz7XJRg5N0DpJX-tLzug2X2e4A';
  const CHANNEL_ID = 'UCy7LW_MtXEntDUi2ugmw_zQ'; // Updated channel ID

  useEffect(() => {
    async function fetchVideos() {
      try {
        // Step 1: Get the uploads playlist ID for the channel
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        const uploadsId = channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

        if (!uploadsId) throw new Error('Uploads playlist not found.');

        // Step 2: Get videos from the uploads playlist
        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsId}&maxResults=20&key=${API_KEY}`
        );
        const videoData = await videosRes.json();

        setVideos(videoData.items || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load videos. Check API key or channel ID.');
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="video-container">

      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="video-grid">
        {videos.map((video, idx) => (
          <div className="video-item" key={idx}>
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
