import classNames from "classnames";
import Link from "next/link";

export type IIconTabs = {
  selectedTab?: "profile" | "home" | "library";
};

export const IconTabs = ({ selectedTab }: IIconTabs) => (
  <>
    <div className="w-full h-20" />
    <nav className="h-20 fixed bottom-0 inset-x-0 flex justify-center ">
      <div className="absolute -bottom-1 -top-20 pointer-events-none bg-gradient-to-t from-black inset-x-0 -z-[1]" />
      <ul className="flex gap-12 items-end">
        <li>
          <Link
            href="/dj/library"
            className={classNames("w-12 h-12 inline-block p-2 text-gray", {
              "!text-primary": selectedTab === "library",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 45"
              fill="none"
              className="w-full"
            >
              <circle
                cx="22.5"
                cy="22.5"
                r="21.1"
                stroke="currentColor"
                strokeWidth="2.8"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 32.145V20.58M32.277 32.145V20.579M16.856 36h11.566M32.277 32.145A3.855 3.855 0 0 1 28.422 36M13 32.145A3.856 3.856 0 0 0 16.857 36M13 20.58a1.928 1.928 0 0 1 1.928-1.927M32.277 20.58a1.927 1.927 0 0 0-1.928-1.928M14.928 18.652H30.35M16.856 10.942c0-1.064.86-1.942 1.925-1.942M28.422 10.941A1.938 1.938 0 0 0 26.496 9M18.784 9h7.712M16.856 10.941v7.71M28.422 10.941v7.71M20.711 9.014v3.855M24.566 9.014v3.855"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/dj/requests"
            className={classNames("w-18 h-18 inline-block p-2 text-black", {
              "!text-primary": selectedTab === "home",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71 71"
              fill="none"
              className="w-full"
            >
              <circle cx="35.5" cy="35.5" r="35.5" fill="white" />
              <path
                fill="currentColor"
                d="M41.38.501A35.5 35.5 0 0 0 35.5 0C15.886 0 0 15.886 0 35.5c0 7.53 2.367 14.488 6.346 20.26 2.44-3.586 8.07-6.06 14.595-6.06 4.481 0 8.535 1.183 11.44 3.084L41.38.501Zm18.863 9.574c6.13 13.557.753 20.799.753 20.799-4.16-12.514-16.208-14.342-16.208-14.342s-7.926 42.706-7.926 43.243c0 4.626-4.912 8.536-11.582 9.718A35.524 35.524 0 0 0 35.5 71C55.114 71 71 55.114 71 35.5c0-9.969-4.125-18.97-10.757-25.425Z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="/dj/profile"
            className={classNames("w-12 h-12 inline-block p-2 text-white", {
              "!text-primary": selectedTab === "profile",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 49 49"
              fill="none"
              className="w-full"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.438"
                d="M24.5 2C12.073 2 2 12.073 2 24.5S12.073 47 24.5 47 47 36.927 47 24.5 36.927 2 24.5 2Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.438"
                d="M7.11 38.779s5.015-6.404 17.39-6.404 17.392 6.404 17.392 6.404M24.5 24.5a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  </>
);
