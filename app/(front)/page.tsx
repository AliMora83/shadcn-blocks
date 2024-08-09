import React from "react";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/Hero/page-header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="relative container">
      <PageHeader>
        <PageHeaderHeading className="hidden md:block">
        Welcome to NAMKA
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
        <PageHeaderDescription>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-xl">
        <li>
          Watch Movies - <span className="font-bold">Simple</span>
        </li>
        <li>
          Listen to Music - <span className="font-bold">Simple</span>
        </li>
        <li>
          Namka Courses - <span className="font-bold">Simple</span>
        </li>
        <li>
          Play NAMKA Games - <span className="font-bold">Medium</span>
        </li>
        <li>
          NAMKA QA Committee - <span className="font-bold">Advanced</span>
        </li>
        <li>
          NAMKA Subscriptions -{" "}
          <span className="font-bold">Advanced</span>
        </li>
      </ul>
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants(), "rounded-[6px]")}>
            Get Started
          </Link>
          <Link
            href="/components"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-[6px]"
            )}
          >
            Components
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}




// import BoldHeading from "@/components/BoldHeading";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="p-8">
      
//       <BoldHeading heading="Welcome to NAMKA" />

//     </main>
//   );
// }
