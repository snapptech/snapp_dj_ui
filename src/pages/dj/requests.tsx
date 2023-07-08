import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import Button from "@/lib/components/Button";
import { IconTabs } from "@/lib/components/IconTabs";
import { RequestData, getRequests, updateRequest } from "@/lib/modals/requests";
import { FC, useCallback, useEffect, useState } from "react";

const Info = ({ leftTitle, leftValue, rightTitle, rightValue }: any) => (
  <div className="flex justify-between">
    <div>
      <p className="text-sm">{leftTitle}</p>
      <p className="text-xl font-bold">{leftValue}</p>
    </div>
    <div className="text-right">
      <p className="text-sm">{rightTitle}</p>
      <p className="text-xl font-bold">{rightValue}</p>
    </div>
  </div>
);

type NewRequestProps = Pick<
  RequestData,
  "songName" | "amount" | "createdAt" | "id" | "artist"
> & {
  id: string;
  onSubmit: (id: string, status: "approved" | "rejected") => void;
};

const NewRequest: FC<NewRequestProps> = ({
  songName,
  artist,
  amount,
  onSubmit,
  id,
}) => (
  <>
    <Info
      leftTitle="Song"
      leftValue={songName}
      rightTitle="Tip"
      rightValue={`€${amount}`}
    />
    <Info
      leftTitle="Artist"
      leftValue={artist}
      rightTitle="Countdown"
      rightValue="24:59"
    />
    <div className="flex justify-between gap-6 pt-3">
      <Button
        type="submit"
        onClick={() => onSubmit(id, "approved")}
        value="Accept"
        color="primary"
        fullWidth
      />
      <Button
        type="submit"
        onClick={() => onSubmit(id, "rejected")}
        value="Decline"
        color="secondary"
        fullWidth
      />
    </div>
  </>
);

type AcceptedRequestProps = Pick<
  RequestData,
  "songName" | "amount" | "createdAt" | "id"
> & {
  onSubmit: (id: string, status: "done") => void;
};
const AcceptedRequest: FC<AcceptedRequestProps> = ({
  id,
  songName,
  amount,
  createdAt,
  onSubmit,
}) => {
  const [countdown, setCountdown] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const created = new Date(createdAt * 1000);
      const timeElapsed = now.getTime() - created.getTime();

      const remainingTime = 25 * 60 * 1000 - timeElapsed;

      const minutes = Math.floor(remainingTime / 1000 / 60);
      const seconds = Math.floor(remainingTime / 1000) % 60;
      setCountdown(`${minutes < 0 ? 0 : minutes}:${seconds < 0 ? 0 : seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-between pt-3 items-center">
      <div>
        <p className="text-xs">Song</p>
        <p className="text">{songName}</p>
      </div>
      <div>
        <p className="text-xs">Tip</p>
        <p className="text">{amount}</p>
      </div>
      <div>
        <p className="text-xs ">Countdown</p>
        <p className={`text €{shouldWarn && "text-error"}`}>{countdown}</p>
      </div>
      <div>
        <Button
          type="submit"
          onClick={() => {
            onSubmit(id, "done");
          }}
          value="Played"
          color="primary"
        />
      </div>
    </div>
  );
};

const Requests = () => {
  const [pendingRequests, setPendingRequests] = useState<RequestData[]>([]);
  const [acceptedRequests, setAcceptedRequests] = useState<RequestData[]>([]);

  const { user } = useAuthContext();

  const loadAllRequests = useCallback(async () => {
    if (!user) return;
    const { result, error } = await getRequests(user.uid);
    if (error || !result) return console.error(error);

    const pendingRequests = result.filter(
      (request) => request.status === "pending"
    );
    setPendingRequests(pendingRequests);

    const acceptedRequests = result.filter(
      (request) => request.status === "approved"
    );
    setAcceptedRequests(acceptedRequests);
  }, [user]);

  useEffect(() => {
    loadAllRequests();
  }, [loadAllRequests, user]);

  const handleConfirmRequest = async (
    id: string,
    status: RequestData["status"]
  ) => {
    const request = [...pendingRequests, ...acceptedRequests].find(
      (el) => el.id === id
    );

    if (request) {
      const updatedRequest = { ...request, status: status };

      try {
        await updateRequest(id, updatedRequest);
        loadAllRequests();
      } catch (error) {
        console.log("update request failed", error);
      }
    }
  };

  if (pendingRequests.length === 0 && acceptedRequests.length == 0) {
    return (
      <div className="bg-dark min-h-screen px-5 py-2 flex flex-col justify-between">
        <div />
        <div className="text-center">
          <p className="text-2xl">No Requests</p>

          <p className="text-sm">You do not have any requests for now. </p>
          <p className="text-sm"> Please wait for users to request a song</p>
        </div>
        <IconTabs selectedTab="home" />
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen h-full px-5 py-2 flex flex-col justify-between">
      <div>
        <div className="pb-5">
          {pendingRequests.length > 0 ? (
            pendingRequests
              .slice(0, 1)
              .map((request) => (
                <NewRequest
                  key={request.id}
                  id={request.id}
                  onSubmit={handleConfirmRequest}
                  songName={request.songName}
                  amount={request.amount}
                  artist={request.artist}
                  createdAt={request.createdAt}
                />
              ))
          ) : (
            <div className="py-6">
              <p className="text-lg text-center">No New Requests</p>
            </div>
          )}
        </div>
        <hr className="pb-3" />
        {acceptedRequests.map((request) => (
          <AcceptedRequest
            key={request.id}
            songName={request.songName}
            amount={request.amount}
            createdAt={request.createdAt}
            id={request.id}
            onSubmit={handleConfirmRequest}
          />
        ))}
      </div>
      <IconTabs selectedTab="home" />
    </div>
  );
};

export default AuthLayoutWrapper(Requests);
