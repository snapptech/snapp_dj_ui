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

const RequestPage = () => {
  const {
    query: { request_id },
  } = useRouter();

  return (
    <div className="flex flex-col justify-center items-center">
      <p>request_id: {request_id}</p>
    </div>
  );
};

export default RequestPage;
