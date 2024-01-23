import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex h-14 border-b bg-white/70 px-4 backdrop-blur-lg">
      <MaxWidthWrapper className="flex w-full items-center justify-between">
        <Link href="/">
          <h2 className=" text-xl font-medium">TemporalName</h2>
        </Link>
        <div>
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            My subscriptions
          </Link>
          <Link
            href="/accounts"
            className={buttonVariants({ variant: "link" })}
          >
            Accounts
          </Link>
          <Link
            href="/settings"
            className={buttonVariants({ variant: "link" })}
          >
            Settings
          </Link>
          <Link href="/help" className={buttonVariants({ variant: "link" })}>
            Customer service
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
