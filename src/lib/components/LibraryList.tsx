import { LibraryData } from "../modals/library";

type ILibraryList = {
  search: string;
  library: LibraryData[];
  onSelect: (song: LibraryData) => void;
};

export const LibraryList = ({
  search = "",
  onSelect,
  library,
}: ILibraryList) => {
  const filteredSongs = library.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filteredSongs.length === 0 && "No songs in library that matches your criteria"}
      {filteredSongs.map((song) => (
        <li
          key={song.songId}
          className="flex justify-between gap-2 p-2 border-b border-stroke/30"
        >
          <div className="flex-1">
            <div className="text-lg">{song.title}</div>
            <div className="text-sm">{song.artist}</div>
          </div>
          <button className="text-white" onClick={() => onSelect(song)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="3"
              fill="none"
            >
              <path stroke="currentColor" strokeWidth="3" d="M0 1.5h19" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
