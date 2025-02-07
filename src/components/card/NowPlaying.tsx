"use client";

import { useEffect, useState } from "react";
const LAST_FM_KEY = process.env.NEXT_PUBLIC_LAST_FM_KEY;

interface Track {
  name: string;
  artist: {
    "#text": string;
  };
  image: Array<{
    "#text": string;
    size: string;
  }>;
  "@attr"?: {
    nowplaying: boolean;
  };
}

interface LastFMResponse {
  recenttracks: {
    track: Track[];
  };
}

const NowPlaying = () => {
  const [song, setSong] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const apiKey = LAST_FM_KEY;
      const username = "VAVRIL";

      console.log(apiKey);

      if (!apiKey) {
        setError("Missing API key");
        setLoading(false);
        return;
      }

      if (!username) {
        setError("Missing username");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: LastFMResponse = await response.json();

        const nowPlayingTrack = data.recenttracks?.track?.find(
          (track: Track) => track["@attr"]?.nowplaying
        );

        setSong(nowPlayingTrack || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // will fetch every 10 seconds

    return () => clearInterval(interval);
  }, []);



  if (loading) {
    return <div className="text-gray-400">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-2 rounded-lg bg-opacity-10">
      {song ? (
        <div className="flex items-center space-x-10">
          <img
            src={song.image[1]["#text"] || "/default-album.png"}
            alt={song.name}
            className="w-20 h-20"
          />

          <div className=" flex flex-col ">
            <p
              className="text-sm text-white "
              style={{ textShadow: "0px 0px 5px #ffffff" }}
            >
              Artist // {song.artist["#text"]}
            </p>
            <p className="text-xl">Song // {song.name}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-400">No song currently playing</p>
      )}
    </div>
  );
};

export default NowPlaying;
