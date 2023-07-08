import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { songs } from "@/data/songs.json";
import Image from "next/image";
import { LoadingSpinner } from "@/lib/components/LoadingSpinner";
import { Input } from "@/lib/components/Input";
import { User } from "@/lib/modals/user";
import { useForm } from "react-hook-form";
import { RequestData, addRequest, updateRequest } from "@/lib/modals/requests";
import Button from "@/lib/components/Button";

const SongPage = () => {
  const {
    query: { song_id: rawSongId, cents: centsRaw },
  } = useRouter();

  const { push } = useRouter();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestData>();

  const songId = useMemo(
    () => (typeof rawSongId === "string" ? parseInt(rawSongId) : undefined),
    [rawSongId]
  );

  const amount = useMemo(
    () => (typeof centsRaw === "string" ? parseInt(centsRaw) : 0),
    [centsRaw]
  );

  const song = useMemo(() => (songId ? songs[songId] : undefined), [songId]);
  const onSubmit = useCallback(
    async (request: RequestData) => {
      const { result } = await addRequest(request);
      const request_id = result?.id;
      push(`request/${request_id}`);
    },
    [push]
  );

  useEffect(() => {
    if (!song) return;
    reset({ songName: song.title, artist: song.artist, amount });
  }, [amount, reset, song]);

  if (!song)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col min-h-screen justify-start items-center px-8 pb-8 pt-12"
    >
      <Image
        src="/songs/titanium.png"
        width={116}
        height={116}
        className="rounded mb-4"
        alt={song?.title}
      />
      <p className="text-2xl font-sf-pro font-bold mb-1">{song.title}</p>
      <p className="text-lg font-sf-pro font-medium mb-5">{song.artist}</p>
      <p className="text-2xl font-sf-pro font-light mb-5">
        €{amount.toFixed(2).replace(".", ",")}
      </p>
      <div className="w-full">
        <hr className="-mx-8 mb-5" />
      </div>
      <Input
        placeholder="Email"
        register={register("email", { required: "Email is required" })}
        error={errors.email}
      />
      <p className="w-full text-center text-xs mb-6 mt-3">
        Email needed for refund if DJ doesn't play your song within 30 minutes.
      </p>

      <Button
        type="button"
        onClick={() => alert("not implemented yet")}
        color="primary"
        className="flex flex-row px-4 mb-2.5 items-center justify-between w-full"
      >
        <Image src="/ideal.png" alt="ideal" width={29} height={29} />
        Choose your bank
        <Image src="/chevron-down.png" alt="arrow down" width={18} height={9} />
      </Button>

      <p>Or</p>

      <p className="uppercase my-8">Card payment WIP</p>

      <div className="flex flex-1" />

      <input
        type="submit"
        value="Tip"
        className="bg-primary text-white bold text-xl p-2 w-full rounded-2xl mt-auto"
      />
    </form>
  );
};

export default SongPage;
