import React, { useState } from 'react';

const YouTubePlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // YouTube API Credentials
  const CLIENT_ID = '1098256885634-75f25is1hcfbocrehi45hevu0n75mm70.apps.googleusercontent.com';  
  const API_KEY = 'AIzaSyB94fC_czG2rp3SgqSI9UYxy8XunWwPNbc';    
  const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

  // Load the API client and authenticate
  const loadClient = () => {
    gapi.load('client:auth2', async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
      console.log('API client loaded');
    });
  };

  // Handle OAuth login
  const handleLogin = async () => {
    try {
      const authResponse = await gapi.auth2.getAuthInstance().signIn();
      if (authResponse) {
        fetchPlaylists();
      }
    } catch (error) {
      console.error('Error during login', error);
      setError('Login failed');
    }
  };

  // Fetch private YouTube playlists
  const fetchPlaylists = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await gapi.client.youtube.playlists.list({
        part: 'snippet',
        mine: true,
        maxResults: 10,  // Adjust number of playlists to fetch
      });
      setPlaylists(response.result.items);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching playlists', error);
      setError('Failed to fetch playlists');
      setLoading(false);
    }
  };

  // OnClick function to trigger YouTube import
  const handleImportClick = () => {
    if (!gapi.auth2.getAuthInstance().isSignedIn.get()) {
      handleLogin();
    } else {
      fetchPlaylists();
    }
  };

  return (
    <div>
      <NavBtn
        icon={
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5H16C16.553 4.5 17 5.057 17 5.5V16.5C17 16.943 16.553 17.5 16 17.5H2C1.447 17.5 1 16.943 1 16.5V5.5C1 5.057 1.447 4.5 2 4.5Z"
              stroke="#017EFA"
              strokeWidth="1.5"
            />
            <path
              d="M3 6.5L9 10.5L3 14.5"
              stroke="#017EFA"
              strokeWidth="1.5"
            />
            <path
              d="M3 6.5L3 14.5"
              stroke="#017EFA"
              strokeWidth="1.5"
            />
          </svg>
        }
        text="Import From YouTube"
        onClick={handleImportClick} // Attach the onClick handler
      />

      {loading && <p>Loading playlists...</p>}
      {error && <p>{error}</p>}

      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <h3>{playlist.snippet.title}</h3>
            <p>{playlist.snippet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubePlaylists;
