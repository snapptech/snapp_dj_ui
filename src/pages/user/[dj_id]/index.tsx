import songs from "@/data/songs.json";
import { SongDisplayPic } from "@/lib/components/SongDisplayPic";
import { Avatar } from "@/lib/components/Avatar";
import { useCallback, useEffect, useState } from "react";
import { User, getUser } from "@/lib/modals/user";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";
import classNames from "classnames";

type Song = {
  title: string;
  artist: string;
  uuid: string;
};

const MySongList = () => {
  const {
    query: { dj_id },
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

  if (!dj)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <main className="px-5 py-2 min-h-screen flex flex-col justify-between">
      <div className="flex flex-row justify-center flex-1 items-center">
        <Avatar image={dj?.photoUrl} onChange={() => {}} />
      </div>
      <div className="flex flex-row justify-center flex-1 items-center">
        <p className="text-lg text-bold">
          {dj?.artistName}{" "}
          <span className="text-base">( {dj?.countryCode} )</span>
        </p>
      </div>

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
              className={classNames("transition-all absolute left-1/2 inset-y-0 -right-4 -z-[1]", {
                "bg-primary": item.uuid === selectedSong?.uuid,
              })}
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

      <div className=" fixed bottom-0 w-full bg-black py-3 ">
        <h3 className="text-sm text-bold  pr-5 py-4">Song request tip</h3>
        <div className="  flex flex-row justify-center flex-1 items-center py-3">
          <h2 className="text-xl text-bold border-r border-white pr-5 py-4">
            5,00
          </h2>

          <h2 className="text-xl text-bold border-r border-white pr-5 pl-5 py-4 mx-5">
            10,00
          </h2>
          <input
            className="text-xl text-bold pl-5 py-4 w-1/5 bg-black border rounded-[15%] border-white"
            placeholder="Enter"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </main>
  );
};
export default MySongList;
