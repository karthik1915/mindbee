import Link from "next/link";
import React from "react";

const NonProfitCloud = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3">
      <header className="space-y-3">
        <h2 className="text-center font-exo text-3xl font-semibold text-headline">
          What We Offer
        </h2>
        <p className="text-balance text-center text-xl">
          At Mindbees Consultation, we bring the capabilities of the Salesforce
          Nonprofit Cloud to organizations seeking to strengthen their
          engagement and fundraising efforts. Our Salesforce-certified experts
          acknowledge the dynamic demands of the nonprofit sector. We unite
          volunteers, staff members, and donors using state-of-the-art
          Salesforce technology.
        </p>
      </header>
      <div className="space-y-6 pt-8 text-center text-xl">
        <p className="text-balance">
          Mindbees Consulation will be your trusted guide in the world of
          Salesforce Nonprofit Cloud. Need support or training for your team? We
          have you covered. Looking for strategic advice? Our certified experts
          are here to help!
        </p>
        <Link
          href="/#contact"
          className="inline-block rounded-xl bg-headline px-4 py-2 font-exo text-white hover:bg-headline/80"
        >
          Lets Talk
        </Link>
      </div>
    </section>
  );
};

export default NonProfitCloud;
