import { songs } from "@/data/songs.json";
import { LibraryData } from "../modals/library";

export type Song = (typeof songs)[0];

type ISongsList = {
  search: string;
  library: LibraryData[];
  onSelect: (song: Song) => void;
};

export const SongsList = ({ search = "", onSelect, library }: ISongsList) => {
  const filteredSongs = songs
    .filter((song) => song.title.toLowerCase().includes(search.toLowerCase()))
    .filter((song) => !library.find((item) => item.songId === song.uuid));

  return (
    <ul>
      {filteredSongs.map((song) => (
        <li
          key={song.uuid}
          className="flex justify-between gap-2 p-2 border-b border-stroke/30"
        >
          <div className="flex-1">
            <div className="text-lg">{song.title}</div>
            <div className="text-sm">{song.artist}</div>
          </div>
          <button className="text-white" onClick={() => onSelect(song)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
            >
              <path fill="currentColor" d="M21 12h-9v9H9v-9H0V9h9V0h3v9h9v3Z" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
