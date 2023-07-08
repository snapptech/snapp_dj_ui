import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import Button from "@/lib/components/Button";
import { IconTabs } from "@/lib/components/IconTabs";
import { RequestData, getRequests } from "@/lib/modals/requests";
import { useEffect, useState } from "react";

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

const NewRequest = () => (
  <>
    <p className="text-center">Request(s) (5)</p>
    <Info
      leftTitle="Song"
      leftValue="Titanium"
      rightTitle="Tip"
      rightValue="€10,00"
    />
    <Info
      leftTitle="Artist"
      leftValue="David Guetta"
      rightTitle="Countdown"
      rightValue="24:59"
    />
    <div className="flex justify-between gap-6 pt-3">
      <Button
        type="submit"
        onClick={console.log}
        value="Accept"
        color="primary"
        fullWidth
      />
      <Button
        type="submit"
        onClick={console.log}
        value="Decline"
        color="secondary"
        fullWidth
      />
    </div>
  </>
);

const AcceptedRequest = ({
  songName,
  amount,
  createdAt,
}: Pick<RequestData, "songName" | "amount" | "createdAt">) => {
  const [countdown, setCountdown] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const created = createdAt;
      const diff = now.getTime() - created.getTime();
      const minutes = Math.floor(diff / 1000 / 60);
      const seconds = Math.floor(diff / 1000) % 60;
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
          onClick={console.log}
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

  useEffect(() => {
    (async () => {
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
    })();
  });

  if (pendingRequests.length === 0) {
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
    <div className="bg-dark h-full px-5 py-2">
      <div className="pb-5">
        {pendingRequests.map((request) => (
          <NewRequest key={request.id} />
        ))}
      </div>
      <hr className="pb-3" />
      {acceptedRequests.map((request) => (
        <AcceptedRequest
          key={request.id}
          songName={request.songName}
          amount={request.amount}
          createdAt={request.createdAt}
        />
      ))}
      <IconTabs selectedTab="home" />
    </div>
  );
};

export default AuthLayoutWrapper(Requests);
