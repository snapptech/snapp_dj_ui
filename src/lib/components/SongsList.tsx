import { AnimatePresence, motion } from "framer-motion";
import { songs } from "@/data/songs.json";
import { LibraryData } from "../modals/library";
import Image from "next/image";

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
    <motion.ul className="flex flex-col gap-4">
      {filteredSongs.length === 0 &&
        "No songs in library that matches your criteria"}
      <AnimatePresence>
        {filteredSongs.map((song) => (
          <motion.li
            initial={{ x: -16, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -16, opacity: 0 }}
            key={song.uuid}
            layout="position"
            className="flex justify-start gap-2"
          >
            <div className="flex flex-row justify-start items-center ">
              <Image
                src="/songs/titanium.png"
                width={45}
                height={45}
                alt="Album cover"
                className="rounded mr-4"
              />
            </div>
            <div className="flex flex-row justify-start items-center flex-1 border-b border-gray border-opacity-30 pb-2 w-full overflow-hidden">
              <div className="flex flex-col w-full overflow-hidden gap-1">
                <p className="text-lg leading-none font-bold truncate w-full">
                  {song.title}
                </p>
                <p className="text-sm leading-none truncate w-full">
                  {song.artist}
                </p>
              </div>
              <button className="text-white" onClick={() => onSelect(song)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M21 12h-9v9H9v-9H0V9h9V0h3v9h9v3Z"
                  />
                </svg>
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};
