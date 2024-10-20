{
  /****************************************************************
                 SERVICES PAGE - PATH: src/app/services/page.tsx
   ***************************************************************/
}

import React from "react";
import { client } from "../../../sanity"; // Import sanity client

// Fetch the data directly in the server component
async function getServicesData() {
  const query = `*[_type == "servicesPage"][0]{
    title,
    heroSection{
      heading,
      subheading
    },
    services[]{
      title,
      description
    }
  }`;

  const servicesData = await client.fetch(query);
  return servicesData;
}

export default async function ServicesPage() {
  const servicesData = await getServicesData();

  return (
    <div>
      {/****************************************************************
                          RENDER HERO SECTION
        ***************************************************************/}
      <section className="h-screen flex flex-col justify-center items-center bg-brand-mocha text-brand-white text-center px-8">
        <h1 className="text-6xl font-bold mb-4">
          {servicesData?.heroSection?.heading || "Our Services"}
        </h1>
        <p className="text-lg max-w-2xl">
          {servicesData?.heroSection?.subheading ||
            "Unavailable at the moment. Please check back later."}
        </p>
      </section>

      {/****************************************************************
                          RENDER SERVICES GRID
        ***************************************************************/}
      <section className="min-h-screen bg-brand-light-tan px-8 py-16">
        <h2 className="text-4xl font-bold text-brand-charcoal mb-8 text-center">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Loop through services dynamically */}
          {servicesData?.services?.map((service: any, index: number) => (
            <div key={index} className="bg-brand-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-brand-charcoal mb-4">
                {service?.title || `Service ${index + 1}`}
              </h3>
              <p className="text-lg text-brand-charcoal mb-4">
                {service?.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla."}
              </p>
              <button className="bg-brand-mocha text-brand-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
