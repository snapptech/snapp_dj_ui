import songs from "@/data/songs.json";
import { SongDisplayPic } from "@/lib/components/SongDisplayPic";
import { Avatar } from "@/lib/components/Avatar";
import { useEffect, useState } from "react";
import { User, getUser } from "@/lib/modals/user";
import { useRouter } from "next/router";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";

type Song = {
  id: string;
  name: string;
  artist: string;
};

const MySongList = () => {
  const {
    query: { dj_id },
  } = useRouter();

  const [data, setData] = useState(songs);
  const [selectedSong, setSelectedSong] = useState<Song[]>([]);
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
  const onSelectSong = (item: any) => {
    setSelectedSong((prevState) => [...prevState, item]);
    console.log(selectedSong);
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
      {data.songs.slice(50).map((item: any, index) => (
        <div
          onClick={() => onSelectSong(item)}
          className=" flex py-6 border-b border-white justify-start visited:bg-purple-500 focus:bg-purple-500"
          key={index}
        >
          <div className="h-16 w-16">
            <SongDisplayPic image="/images/songdisplaypic.png" />
          </div>
          <div className="px-2 py-1">
            <h4>{item.title}</h4>
            <p>{item.artist}</p>
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
