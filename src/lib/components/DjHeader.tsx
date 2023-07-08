import { User } from "@/lib/modals/user";
import { Avatar } from "./Avatar";

export const DjHeader = ({
  photoUrl,
  artistName,
  countryCode,
}: Pick<User, "photoUrl" | "artistName" | "countryCode">) => {
  return (
    <>
      <div className="flex flex-row justify-center flex-1 items-center mt-16 mb-5">
        <Avatar image={photoUrl} />
      </div>
      <div className="flex flex-row justify-center flex-1 items-center">
        <p className="text-lg">
          <span className="font-bold">{artistName + " "}</span>
          <span className="font-light" >({countryCode})</span>
        </p>
      </div>
    </>
  );
};
