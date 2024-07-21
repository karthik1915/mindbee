import Image from "next/image";
import React from "react";

type Props = {};

const content: {
  id: number;
  fileUrl: string;
  headline: string;
  subheadline: string;
}[] = [
  {
    id: 1,
    fileUrl: "/WhatSetUsApart/invoice.png",
    headline: "Flexible Billing",
    subheadline:
      "Choose between set scope, by-the-hour, or longer-term monthly retainer contracts-whichever suits you best!",
  },
  {
    id: 2,
    fileUrl: "/WhatSetUsApart/handshake.png",
    headline: "Collaborative Approach",
    subheadline:
      "We're here to support you in your goals, whatever they may be. From strategy to execution, we fit seamlessly into your flow.",
  },
  {
    id: 3,
    fileUrl: "/WhatSetUsApart/online-support.png",
    headline: "No Middleman",
    subheadline:
      "Work directly with a dedicated team of certified experts. After all, your team knows you best.",
  },
  {
    id: 4,
    fileUrl: "/WhatSetUsApart/flowchart.png",
    headline: "End-to-End Support",
    subheadline:
      "Collaborate with our design team, web development team, or CRM team. We have you covered, whatever your needs are.",
  },
  {
    id: 5,
    fileUrl: "/WhatSetUsApart/board.png",
    headline: "Deep Industry Expertise",
    subheadline:
      "Established in 2008, we have deep industry knowledge with clients across all verticals, from start-ups to enterprises, local and global.",
  },
];

const WhatSetUsApart = (props: Props) => {
  return (
    <section className="mt-20 w-screen bg-secondary">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center p-4 pb-8">
        <h3 className="inline-block -translate-y-10 rounded-xl bg-navbar px-6 py-2 text-center font-semibold text-white shadow-md md:text-xl lg:text-2xl">
          WHAT SET US APART
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-10">
          {content.map((w) => {
            return (
              <React.Fragment key={w.id}>
                <figure className="flex h-44 w-96 flex-col items-center justify-center">
                  <Image src={w.fileUrl} alt="invoice" width={64} height={64} />
                  <figcaption>
                    <h3 className="mt-2 text-center font-exo text-xl font-semibold text-headline">
                      {w.headline}
                    </h3>
                    <p className="mt-1 text-balance text-center text-subheadline">
                      {w.subheadline}
                    </p>
                  </figcaption>
                </figure>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatSetUsApart;
