type IAvatar = {
  image?: string;
};

export const SongDisplayPic = ({ image }: IAvatar) => {
  return (
    <div className="w-12 h-12 overflow-hidden rounded-[15%]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="avatar" />
    </div>
  );
};
