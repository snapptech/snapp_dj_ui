import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { IconTabs } from "@/lib/components/IconTabs";
import { Input } from "@/lib/components/Input";
import { LibraryList } from "@/lib/components/LibraryList";
import { Song, SongsList } from "@/lib/components/SongsList";
import {
  LibraryData,
  addUpdateSong,
  getSongsInLibrary,
  removeSong,
} from "@/lib/modals/library";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Library = () => {
  const { register, watch } = useForm();
  const [tab, setSelectedTab] = useState<"library" | "search">("library");

  const [library, setLibrary] = useState<LibraryData[]>([]);

  const { user } = useAuthContext();

  const addToLibrary = async (song: Song) => {
    if (!user) return;

    await addUpdateSong(song.uuid, { ...song, songId: song.uuid, userId: user.uid });
    
    setLibrary((prev) => [
      ...prev,
      { ...song, songId: song.uuid, userId: user?.uid } as LibraryData,
    ]);
  };
  
  const removeFromLibrary = async (song: LibraryData) => {
    if (!user) return;
    
    await removeSong(song.songId);
    setLibrary((prev) => prev.filter((s) => s.songId !== song.songId));
  };

  useEffect(() => {
    // fetch library
    async function updateSongs() {
      if (!user) return;

      const { result, error } = await getSongsInLibrary(user.uid);
      if (error || !result) return;
      setLibrary(result);
    }
    updateSongs();
  }, [user]);

  return (
    <div className="p-8">
      <div className="mb-4">
        <Input register={register("search")} placeholder="Search" />
      </div>

      <AnimatePresence>
        {tab === "search" && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="my-16 text-center px-8">
              <p className="">
                <span className="font-bold">SongSeek:</span> Can&apos;t Find
                Your tune? Email Us and We&apos;ll Make It Happen!
              </p>
              <p className="text-sm mt-8">songseek@tiptop.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="grid grid-cols-2 divide-x divide-stroke/30 border-stroke/30 border-b">
        <li>
          <button
            className={classNames(
              "px-1 py-4 text-center w-full h-full font-light text-2xl",
              {
                "text-primary": tab === "library",
              }
            )}
            onClick={() => setSelectedTab("library")}
          >
            My Library
          </button>
        </li>
        <li>
          <button
            className={classNames(
              "px-1 py-4 text-center w-full h-full font-light text-2xl",
              {
                "text-primary": tab === "search",
              }
            )}
            onClick={() => setSelectedTab("search")}
          >
            Search
          </button>
        </li>
      </ul>

      <AnimatePresence>
        {tab === "library" && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mt-4"
          >
            <LibraryList
              library={library}
              search={watch("search")}
              onSelect={removeFromLibrary}
            />
          </motion.div>
        )}

        {tab === "search" && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mt-4"
          >
            <SongsList
              library={library}
              search={watch("search")}
              onSelect={addToLibrary}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <IconTabs selectedTab="library" />
    </div>
  );
};

export default AuthLayoutWrapper(Library);
