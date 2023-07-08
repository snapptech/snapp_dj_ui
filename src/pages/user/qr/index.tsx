import songs from "@/data/songs.json";
import { SongDisplayPic } from "@/lib/components/SongDisplayPic";
import { Avatar } from "@/lib/components/Avatar";
import { useCallback, useEffect, useState } from "react";
import { User, getUser } from "@/lib/modals/user";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";
import classNames from "classnames";
import Link from "next/link";
import { motion } from "framer-motion";

type Song = {
  title: string;
  artist: string;
  uuid: string;
};

const MySongList = () => {
  const {
    query: { dj_id },
    push,
  } = useRouter();

  const [data, setData] = useState(songs);
  const [selectedSong, setSelectedSong] = useState<Song>();
  const [input, setInput] = useState("");
  const [dj, setDj] = useState<User>();

  useEffect(() => {
    (async () => {
      if (!dj_id || typeof dj_id !== "string") return;
      const { result, error } = await getUser(dj_id);
      setDj(result || undefined);
    })();
  }, [dj_id]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput((e.target as HTMLInputElement).value);
  };
  const handleSubmit = useCallback(() => {
    console.log({ input });
    push(`/user/qr/song?dj_id=${dj_id}&song_id=${selectedSong?.uuid}&cents=${input}`);
  }, [input, push, dj_id, selectedSong?.uuid]);

  if (!dj)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <main className="px-5 py-2 min-h-screen flex flex-col justify-between">
      <div className="flex flex-row justify-center flex-1 items-center mt-16 mb-5">
        <Avatar image={dj?.photoUrl} onChange={() => {}} />
      </div>
      <div className="flex flex-row justify-center flex-1 items-center">
        <p className="text-lg text-bold">
          {dj?.artistName}{" "}
          <span className="text-base">( {dj?.countryCode} )</span>
        </p>
      </div>

      <hr className="-mx-5 my-5" />

      {/* <div onClick={(e) => onSelectSong(e)}> */}
      {data.songs.slice(50).map((item) => (
        <div
          onClick={() => setSelectedSong(item)}
          className={classNames("flex mb-6 transition-all", {})}
          key={item.uuid}
        >
          <div
            className={classNames("h-12 w-12 transition-all mr-4 relative", {
              "ml-4": item.uuid === selectedSong?.uuid,
            })}
          >
            <SongDisplayPic image="/images/songdisplaypic.png" />
            <div
              className={classNames(
                "transition-all absolute left-1/2 inset-y-0 -right-4 -z-[1]",
                {
                  "bg-primary": item.uuid === selectedSong?.uuid,
                }
              )}
            />
          </div>
          <div
            className={classNames("border-b w-full transition-all", {
              "bg-primary": item.uuid === selectedSong?.uuid,
            })}
          >
            <h4 className="font-bold">{item.title}</h4>
            <p className=" text-xs  ">{item.artist}</p>
          </div>
        </div>
      ))}
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
              href={`/user/qr/song?dj_id=${dj_id}&song_id=${selectedSong?.uuid}&cents=${500}`}
              className="text-xl h-full flex items-center justify-start flex-row text-bold border-r border-white w-1/3"
            >
              5,00
            </Link>

            <Link
              href={`/user/qr/song?dj_id=${dj_id}&song_id=${selectedSong?.uuid}&cents=${1000}`}
              className="text-xl h-full flex items-center justify-start flex-row text-bold border-r border-white w-1/3"
            >
              10,00
            </Link>
            <div className="w-1/3">
              <input
                className="text-xl flex items-center justify-start flex-row text-bold bg-black h-full"
                placeholder="0,00$"
                type="text"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
};
export default MySongList;