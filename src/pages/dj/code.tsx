import { useAuthContext } from "@/lib/auth/AuthContext";
import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { IconTabs } from "@/lib/components/IconTabs";
import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Code = () => {
  const { user } = useAuthContext();
  const [url, setUrl] = useState("");
  const qrContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;
    setUrl(`https://localhost:3000/new-request/${user.uid}`);
  }, [user]);

  const downloadQr = async () => {
    if (!qrContainerRef.current) return;
    const dataUrl = await domtoimage.toBlob(qrContainerRef.current, {
      quality: 0.95,
    });
    saveAs(dataUrl, "requests-qr-code.png");
  };

  return (
    <div className="flex min-h-screen flex-col container gap-5 text-center px-10 h-full py-6">
      <h1 className="text-3xl mt-4 font-bold">Code</h1>
      <div className="w-full flex flex-col items-center py-8 flex-1">
        <div ref={qrContainerRef}>
          <QRCode value={url} />
        </div>
        <button className="mt-8" onClick={downloadQr}>
          Download the QR code
        </button>
      </div>

      <IconTabs />
    </div>
  );
};

export default AuthLayoutWrapper(Code);
