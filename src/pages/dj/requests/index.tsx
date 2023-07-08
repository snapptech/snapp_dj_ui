import Button from "@/lib/components/Button";

const Info = ({ leftTitle, leftValue, rightTitle, rightValue }: any) => (
  <div className="flex justify-between">
    <div>
      <p className="text-sm">{leftTitle}</p>
      <p className="text-xl">{leftValue}</p>
    </div>
    <div className="text-right">
      <p className="text-sm">{rightTitle}</p>
      <p className="text-xl">{rightValue}</p>
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
      rightValue="$10,00"
    />
    <Info
      leftTitle="Artist"
      leftValue="David Guetta"
      rightTitle="Countdown"
      rightValue="24:59"
    />
    <div className="flex justify-between">
      <Button
        type="submit"
        onClick={console.log}
        value="Accept"
        color="primary"
      />
      <Button
        type="submit"
        onClick={console.log}
        value="Decline"
        color="secondary"
      />
    </div>
  </>
);

const AcceptedRequest = ({
  song,
  tip,
  countdown,
  shouldWarn,
}: Record<string, string | boolean>) => (
  <div className="flex justify-between">
    <div>
      <p className="text-xs">Song</p>
      <p className="text">{song}</p>
    </div>
    <div>
      <p className="text-xs">Tip</p>
      <p className="text">{tip}</p>
    </div>
    <div>
      <p className="text-xs ">Countdown</p>
      <p className={`text ${shouldWarn && "text-error"}`}>{countdown}</p>
    </div>
    <div>
      <Button type="submit" onClick={console.log} value="Played" />
    </div>
  </div>
);

const Requests = () => {
  return (
    <div className="bg-dark h-full p-5">
      <div className="pb-3">
        <NewRequest />
      </div>
      <hr className="pb-3" />
      <AcceptedRequest
        song="Titanium"
        tip="$08,00"
        countdown="24:59"
        shouldWarn
      />
      <AcceptedRequest song="Titanium" tip="$32,00" countdown="24:59" />
      <AcceptedRequest song="Titanium" tip="$08,00" countdown="24:59" />
      <AcceptedRequest song="Titanium" tip="$08,00" countdown="24:59" />
      <AcceptedRequest song="Titanium" tip="$08,00" countdown="24:59" />
    </div>
  );
};

export default Requests;
