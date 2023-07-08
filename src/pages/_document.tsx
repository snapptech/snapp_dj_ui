import classNames from "classnames";
import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

export default function Document(ctx: any) {
  return (
    <Html lang="en">
      <Head />
      <body
        className={classNames({
          desktop: ctx.req?.url === "/",
        })}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
