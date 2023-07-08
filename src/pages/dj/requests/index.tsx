const Info = ({ leftTitle, leftValue, rightTitle, rightValue }: any) => (
  <div className="flex justify-between">
    <div>
      <p className="text-sm">{leftTitle}</p>
      <p className="text-lg">{leftValue}</p>
    </div>
    <div className="text-right">
      <p className="text-sm">{rightTitle}</p>
      <p className="text-lg">{rightValue}</p>
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
      <button>Accept</button>
      <button>Decline</button>
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
      <p className="text-sm">Song</p>
      <p className="text-lg">{song}</p>
    </div>
    <div>
      <p className="text-sm">Tip</p>
      <p className="text-lg">{tip}</p>
    </div>
    <div>
      <p className="text-sm ">Countdown</p>
      <p className={`text-lg ${shouldWarn && "text-error"}`}>{countdown}</p>
    </div>
    <div>
      <button>Played</button>
    </div>
  </div>
);

const Requests = () => {
  return (
    <div className="bg-dark h-full p-3">
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
