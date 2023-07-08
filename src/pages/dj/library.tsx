import { AuthLayoutWrapper } from "@/lib/auth/AuthLayout";
import { Input } from "@/lib/components/Input";
import classNames from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Library = () => {
  const { register, watch } = useForm();
  const [tab, setSelectedTab] = useState<"library" | "search">("library");
  const [selectedLibrarySet, setSelectedLibrarySet] = useState<1 | 2 | 3>(1);

  return (
    <div className="p-8">
      <div className="mb-4">
        <Input register={register("search")} placeholder="Search" />
      </div>

      {tab === "library" && (
        <div className="flex justify-center gap-12 my-16">
          <button
            className={classNames(
              "text-white flex flex-col justify-center items-center",
              {
                "!text-primary": selectedLibrarySet === 1,
              }
            )}
            onClick={() => setSelectedLibrarySet(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="68"
              fill="none"
            >
              <path fill="currentColor" d="M2.002 56.862V29.449v27.413Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M2.002 56.862V29.449"
              />
              <path fill="currentColor" d="M47.693 56.862V29.447v27.415Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M47.693 56.862V29.447"
              />
              <path fill="currentColor" d="M11.14 66h27.415H11.14Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M11.14 66h27.415"
              />
              <path
                fill="currentColor"
                d="M47.693 56.862A9.138 9.138 0 0 1 38.555 66"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M47.693 56.862A9.138 9.138 0 0 1 38.555 66"
              />
              <path
                fill="currentColor"
                d="M2.002 56.862A9.138 9.138 0 0 0 11.14 66"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M2.002 56.862A9.138 9.138 0 0 0 11.14 66"
              />
              <path
                fill="currentColor"
                d="M2 29.449a4.57 4.57 0 0 1 4.57-4.57"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M2 29.449a4.57 4.57 0 0 1 4.57-4.57"
              />
              <path
                fill="currentColor"
                d="M47.693 29.447a4.57 4.57 0 0 0-4.569-4.569"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M47.693 29.447a4.57 4.57 0 0 0-4.569-4.569"
              />
              <path fill="currentColor" d="M6.571 24.878h36.553H6.571Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M6.571 24.878h36.553"
              />
              <path
                fill="currentColor"
                d="M11.14 6.604C11.14 4.08 13.18 2 15.704 2L11.14 6.604Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M11.14 6.604C11.14 4.08 13.18 2 15.704 2"
              />
              <path
                fill="currentColor"
                d="M38.555 6.602C38.555 4.078 36.513 2 33.989 2l4.566 4.602Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M38.555 6.602C38.555 4.078 36.513 2 33.989 2"
              />
              <path fill="currentColor" d="M15.71 2h18.28-18.28Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M15.71 2h18.28"
              />
              <path fill="currentColor" d="M11.14 6.602v18.276V6.602Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M11.14 6.602v18.276"
              />
              <path fill="currentColor" d="M38.555 6.602v18.276V6.602Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M38.555 6.602v18.276"
              />
              <path fill="currentColor" d="M20.278 2.033v9.138-9.138Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M20.278 2.033v9.138"
              />
              <path fill="currentColor" d="M29.417 2.033v9.138-9.138Z" />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M29.417 2.033v9.138"
              />
              <path
                fill="currentColor"
                d="M25.626 38.636V51H24.13V40.206h-.072l-3.019 2.004V40.69l3.091-2.053h1.497Z"
              />
            </svg>
            <span className="mt-2">Set</span>
          </button>
          <button
            className={classNames(
              "text-white flex flex-col justify-center items-center",
              {
                "!text-primary": selectedLibrarySet === 2,
              }
            )}
            onClick={() => setSelectedLibrarySet(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="68"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M2.695 56.862V29.449M48.386 56.862V29.447M11.833 66h27.415M48.386 56.862A9.138 9.138 0 0 1 39.248 66M2.695 56.862A9.138 9.138 0 0 0 11.833 66M2.693 29.449a4.57 4.57 0 0 1 4.57-4.57M48.386 29.447a4.57 4.57 0 0 0-4.569-4.569M7.264 24.878h36.553M11.833 6.604C11.833 4.08 13.873 2 16.397 2M39.248 6.602C39.248 4.078 37.206 2 34.683 2M16.402 2h18.28M11.833 6.602v18.276M39.248 6.602v18.276M20.971 2.033v9.138M30.11 2.033v9.138"
              />
              <path
                fill="currentColor"
                d="M22.28 51v-1.087l4.08-4.467c.48-.523.874-.978 1.184-1.364.31-.39.54-.757.688-1.099a2.66 2.66 0 0 0 .23-1.087c0-.434-.105-.81-.314-1.129a2.037 2.037 0 0 0-.845-.736 2.74 2.74 0 0 0-1.208-.26c-.475 0-.89.099-1.243.296-.35.193-.622.465-.815.815-.19.35-.284.76-.284 1.232h-1.425c0-.725.167-1.36.501-1.908a3.481 3.481 0 0 1 1.364-1.28c.58-.306 1.23-.459 1.95-.459.725 0 1.367.153 1.926.46.56.305.998.718 1.316 1.237.318.519.477 1.096.477 1.732 0 .455-.082.9-.247 1.334-.161.431-.443.912-.845 1.443-.399.527-.952 1.171-1.66 1.932l-2.778 2.97v.097h5.747V51h-7.8Z"
              />
            </svg>
            <span className="mt-2">Set</span>
          </button>
          <button
            className={classNames(
              "text-white flex flex-col justify-center items-center",
              {
                "!text-primary": selectedLibrarySet === 3,
              }
            )}
            onClick={() => setSelectedLibrarySet(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="68"
              fill="none"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.438"
                d="M2.388 56.862V29.449M48.08 56.862V29.447M11.526 66h27.415M48.08 56.862A9.138 9.138 0 0 1 38.94 66M2.388 56.862A9.138 9.138 0 0 0 11.526 66M2.386 29.449a4.57 4.57 0 0 1 4.57-4.57M48.08 29.447a4.57 4.57 0 0 0-4.57-4.569M6.957 24.878H43.51M11.526 6.604C11.526 4.08 13.566 2 16.09 2M38.941 6.602C38.941 4.078 36.899 2 34.376 2M16.095 2h18.28M11.526 6.602v18.276M38.941 6.602v18.276M20.665 2.033v9.138M29.803 2.033v9.138"
              />
              <path
                fill="currentColor"
                d="M24.457 51.169c-.797 0-1.507-.137-2.13-.41-.62-.274-1.114-.654-1.48-1.142a3.067 3.067 0 0 1-.591-1.708h1.521c.032.398.169.743.41 1.032.242.286.558.508.948.664.39.157.823.236 1.298.236.532 0 1.002-.093 1.413-.278a2.32 2.32 0 0 0 .966-.773c.233-.33.35-.712.35-1.146 0-.455-.113-.856-.338-1.202-.226-.35-.556-.624-.99-.82-.435-.198-.966-.297-1.594-.297h-.99v-1.328h.99c.491 0 .922-.088 1.292-.266.374-.177.666-.426.875-.748.214-.322.32-.7.32-1.135 0-.419-.092-.783-.277-1.093a1.9 1.9 0 0 0-.785-.724c-.334-.173-.729-.26-1.183-.26a3.12 3.12 0 0 0-1.208.236 2.25 2.25 0 0 0-.918.67c-.237.29-.366.64-.386 1.05h-1.449c.024-.648.22-1.215.586-1.702a3.687 3.687 0 0 1 1.437-1.147 4.644 4.644 0 0 1 1.962-.41c.764 0 1.42.154 1.968.464.547.306.968.71 1.261 1.214.294.503.441 1.046.441 1.63 0 .696-.183 1.29-.55 1.78-.361.492-.855.832-1.478 1.02v.097c.78.13 1.39.461 1.829.996.439.532.658 1.19.658 1.975 0 .672-.183 1.275-.55 1.81-.362.532-.857.95-1.485 1.256-.627.306-1.342.459-2.143.459Z"
              />
            </svg>
            <span className="mt-2">Set</span>
          </button>
        </div>
      )}

      {tab === "search" && (
        <div className="my-16 text-center px-8">
          <p className="">
            <span className="font-bold">SongSeek:</span> Can&apos;t Find Your
            tune? Email Us and We&apos;ll Make It Happen!
          </p>
          <p className="text-sm mt-8">songseek@tiptop.com</p>
        </div>
      )}

      <ul className="grid grid-cols-2 divide-x divide-stroke/30 border-stroke/30 border-b">
        <li>
          <button
            className={classNames(
              "px-1 py-4 text-center w-full h-full font-light text-2xl",
              {
                "text-primary": tab === "library",
              }
            )}
            onClick={() => setSelectedTab("library")}
          >
            My Library
          </button>
        </li>
        <li>
          <button
            className={classNames(
              "px-1 py-4 text-center w-full h-full font-light text-2xl",
              {
                "text-primary": tab === "search",
              }
            )}
            onClick={() => setSelectedTab("search")}
          >
            Search
          </button>
        </li>
      </ul>

      {tab === "library" && (
        <div className="mt-12">
          {/* <LibraryList text={watch('search')} /> */}
        </div>
      )}

      {tab === "search" && (
        <div className="mt-12">
          {/* <Search text={watch('search')} /> */}
        </div>
      )}
    </div>
  );
};

export default AuthLayoutWrapper(Library);
