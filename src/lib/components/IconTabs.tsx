import classNames from "classnames";
import Link from "next/link";

export type IIconTabs = {
  selectedTab: "profile" | "home" | "settings";
};

export const IconTabs = ({ selectedTab }: IIconTabs) => {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-12 items-end">
        <li>
          <Link
            href="/dj/profile"
            className={classNames("w-12 h-12 inline-block p-2 text-gray", {
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
        <li>
          <Link
            href="/dj"
            className={classNames("w-16 h-16 inline-block p-2 text-gray", {
              "!text-primary": selectedTab === "home",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 71 71"
              fill="none"
              className="w-full"
            >
              <circle cx="35.5" cy="35.5" r="35.5" fill="currentColor" />
              <path
                className="text-dark"
                fill="currentColor"
                d="M41.38.501A35.5 35.5 0 0 0 35.5 0C15.886 0 0 15.886 0 35.5c0 7.53 2.367 14.488 6.346 20.26 2.44-3.586 8.07-6.06 14.595-6.06 4.481 0 8.535 1.183 11.44 3.084L41.38.501Zm18.863 9.574c6.13 13.557.753 20.799.753 20.799-4.16-12.514-16.208-14.342-16.208-14.342s-7.926 42.706-7.926 43.243c0 4.626-4.912 8.536-11.582 9.718A35.524 35.524 0 0 0 35.5 71C55.114 71 71 55.114 71 35.5c0-9.969-4.125-18.97-10.757-25.425Z"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="/dj/settings"
            className={classNames("w-12 h-12 inline-block p-2 text-gray", {
              "!text-primary": selectedTab === "settings",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47 49"
              fill="none"
              className="w-full"
            >
              <path
                stroke="currentColor"
                stroke-width="3.438"
                d="M23.213 31.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z"
              />
              <path
                stroke="currentColor"
                stroke-width="3.438"
                d="M27.185 2.342C26.359 2 25.31 2 23.213 2s-3.145 0-3.97.342a4.5 4.5 0 0 0-2.438 2.437c-.207.502-.29 1.089-.321 1.942a3.638 3.638 0 0 1-1.778 3.044 3.64 3.64 0 0 1-3.526.018c-.756-.4-1.302-.621-1.845-.693a4.5 4.5 0 0 0-3.325.89c-.707.547-1.233 1.454-2.282 3.27-1.048 1.816-1.575 2.723-1.69 3.611a4.5 4.5 0 0 0 .892 3.328c.333.432.798.794 1.52 1.249C5.516 22.106 6.2 23.244 6.2 24.5c0 1.256-.684 2.394-1.748 3.06-.723.457-1.19.819-1.521 1.251a4.5 4.5 0 0 0-.891 3.328c.117.886.64 1.795 1.687 3.611 1.05 1.816 1.575 2.722 2.284 3.27a4.5 4.5 0 0 0 3.328.89c.54-.072 1.086-.292 1.842-.693a3.639 3.639 0 0 1 3.526.018c1.087.63 1.733 1.789 1.778 3.044.031.855.112 1.44.321 1.942a4.5 4.5 0 0 0 2.437 2.437c.826.342 1.874.342 3.971.342s3.146 0 3.972-.342a4.501 4.501 0 0 0 2.436-2.437c.207-.502.29-1.086.322-1.941.045-1.256.69-2.417 1.778-3.045a3.64 3.64 0 0 1 3.525-.018c.756.4 1.303.621 1.843.693a4.5 4.5 0 0 0 3.328-.89c.709-.545 1.233-1.454 2.281-3.27 1.049-1.816 1.575-2.722 1.69-3.611a4.5 4.5 0 0 0-.89-3.328c-.334-.432-.8-.794-1.522-1.249a3.639 3.639 0 0 1-1.748-3.062c0-1.256.684-2.394 1.748-3.06.722-.457 1.19-.819 1.521-1.251a4.5 4.5 0 0 0 .891-3.328c-.117-.886-.641-1.795-1.687-3.611-1.051-1.816-1.575-2.723-2.284-3.27a4.5 4.5 0 0 0-3.328-.89c-.54.072-1.087.292-1.845.693a3.64 3.64 0 0 1-3.523-.018 3.638 3.638 0 0 1-1.778-3.045c-.031-.854-.112-1.44-.322-1.941a4.5 4.5 0 0 0-2.436-2.437Z"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
