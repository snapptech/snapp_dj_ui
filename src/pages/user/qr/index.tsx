import { SongDisplayPic } from "@/lib/components/SongDisplayPic";
import { Avatar } from "@/lib/components/Avatar";
import { useCallback, useEffect, useState } from "react";
import { User, getUser } from "@/lib/modals/user";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";
import { LibraryData, getSongsInLibrary } from "@/lib/modals/library";
import { DjHeader } from "@/lib/components/DjHeader";
import { useForm } from "react-hook-form";

const MySongList = () => {
  const {
    query: { dj_id },
    push,
  } = useRouter();

  const [data, setData] = useState<LibraryData[]>([]);
  const [selectedSong, setSelectedSong] = useState<LibraryData>();
  const [dj, setDj] = useState<User>();
  const { register, handleSubmit } = useForm<{ value: number }>();

  useEffect(() => {
    (async () => {
      if (!dj_id || typeof dj_id !== "string") return;
      const { result, error } = await getUser(dj_id);
      setDj(result || undefined);
    })();
  }, [dj_id]);

  useEffect(() => {
    (async () => {
      const { result, error } = await getSongsInLibrary(String(dj_id));
      setData(result || []);
    })();
  }, [dj_id]);

  const payCustomPrice = useCallback(
    ({ value = 0 }: { value?: number }) => {
      push(
        `/user/qr/song?dj_id=${dj_id}&song_id=${selectedSong?.songId}&cents=${(
          value * 100
        ).toFixed()}`
      );
    },
    [push, dj_id, selectedSong?.songId]
  );

  if (!dj)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <main className="px-5 py-2 min-h-screen flex flex-col justify-between">
      {dj ? <DjHeader {...dj} /> : <LoadingSpinner className="mx-auto" />}

      <hr className="-mx-5 my-5" />

      {/* <div onClick={(e) => onSelectSong(e)}> */}
      {data.length === 0 && (
        <div className="mb-32 text-center flex-1">
          No songs available in the DJ&apos;s library for you to select.
        </div>
      )}
      <div className="flex-1">
        {data.map((item) => (
          <div
            onClick={() => setSelectedSong(item)}
            className={classNames("flex mb-6 transition-all", {})}
            key={item.songId}
          >
            <div
              className={classNames("h-12 w-12 transition-all mr-4 relative", {
                "ml-4": item.songId === selectedSong?.songId,
              })}
            >
              <SongDisplayPic image="/images/songdisplaypic.png" />
              <div
                className={classNames(
                  "transition-all absolute left-1/2 inset-y-0 -right-4 -z-[1]",
                  {
                    "bg-primary": item.songId === selectedSong?.songId,
                  }
                )}
              />
            </div>
            <div
              className={classNames(
                "border-b border-gray w-full transition-all rounded-r",
                {
                  "bg-primary": item.songId === selectedSong?.songId,
                },
                item.songId !== selectedSong?.songId
                  ? "border-opacity-30"
                  : "border-opacity-0"
              )}
            >
              <h4 className="font-bold">{item.title}</h4>
              <p className=" text-xs  ">{item.artist}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
      {selectedSong && (
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          className=" fixed -bottom-4 pb-4 w-full bg-black"
        >
          <h3 className="text-sm text-bold pr-5 my-4">Song request tip</h3>
          <div className="  flex flex-row justify-center flex-1 items-center gap-3 h-12">
            <Link
              href={`/user/qr/song?dj_id=${dj_id}&song_id=${
                selectedSong?.songId
              }&cents=${500}`}
              className="text-xl h-full flex items-center justify-start flex-row text-bold border-r border-white w-1/3"
            >
              €5,00
            </Link>

            <Link
              href={`/user/qr/song?dj_id=${dj_id}&song_id=${
                selectedSong?.songId
              }&cents=${1000}`}
              className="text-xl h-full flex items-center justify-start flex-row text-bold border-r border-white w-1/3"
            >
              €10,00
            </Link>
            <form className="w-1/3" onSubmit={handleSubmit(payCustomPrice)}>
              <input
                className="text-xl flex items-center justify-start flex-row text-bold bg-black h-full"
                placeholder="€0,00"
                step="0.01"
                min="0"
                type="number"
                enterKeyHint="send"
                {...register("value")}
              />
            </form>
          </div>
        </motion.div>
      )}
    </main>
  );
};
export default MySongList;
