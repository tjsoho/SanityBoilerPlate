{
  /****************************************************************
                 ABOUT PAGE - PATH: src/app/about/page.tsx
   ***************************************************************/
}

import React from "react";
import { client } from "../../../sanity"; // Import the sanity client

// Fetch the data directly in the server component
async function getAboutData() {
  const query = `*[_type == "aboutPage"][0]{
    sections[]{
      _type == "section1" => {
        heading,
        subheading,
        text,
        image {
          asset -> {
            url
          }
        }
      },
      _type == "section2" => {
        teamSectionTitle,
        teamMembers[]{
          name,
          role,
          image {
            asset -> {
              url
            }
          }
        }
      },
      _type == "section3" => {
        heading,
        text
      }
    }
  }`;

  const aboutData = await client.fetch(query);
  return aboutData;
}

export default async function AboutPage() {
  const aboutData = await getAboutData();

  return (
    <div>
      {/****************************************************************
                          RENDER SECTION 1
        ***************************************************************/}
      {aboutData?.sections?.[0] && (
        <section className="h-screen flex items-center justify-between px-8 bg-brand-light-tan">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              {aboutData?.sections[0]?.heading || "Heading Not Available"}
            </h2>
            <p className="text-lg text-brand-charcoal mb-4">
              {aboutData?.sections[0]?.text || "Content not available"}
            </p>
          </div>
          <div className="w-1/2">
            {aboutData?.sections[0]?.image && (
              <img
                src={aboutData.sections[0].image.asset.url}
                alt="About Section Image"
                className="w-full max-h-screen h-auto rounded-lg shadow-md"
              />
            )}
          </div>
        </section>
      )}

      {/****************************************************************
                          RENDER SECTION 2
        ***************************************************************/}
      {aboutData?.sections?.[1] && (
        <section className="h-screen flex flex-col justify-center items-center bg-brand-white text-brand-charcoal px-8">
          <h2 className="text-4xl font-bold mb-8">
            {aboutData?.sections[1]?.teamSectionTitle || "Team Section Title Not Available"}
          </h2>
          <div className="grid grid-cols-4 gap-12">
            {aboutData?.sections[1]?.teamMembers?.map((member: any, idx: number) => (
              <div key={idx} className="text-center">
                {member?.image && (
                  <img
                    src={member.image.asset.url}
                    alt={member?.name || "Team Member"}
                    className="rounded-full w-40 h-40 mb-4 mx-auto"
                  />
                )}
                <h3 className="text-xl font-semibold">
                  {member?.name || "Name Not Available"}
                </h3>
                <p className="text-sm">
                  {member?.role || "Role Not Available"}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/****************************************************************
                          RENDER SECTION 3
        ***************************************************************/}
      {aboutData?.sections?.[2] && (
        <section className="h-screen flex items-center justify-center bg-brand-charcoal text-brand-white text-center px-8">
          <div>
            <h2 className="text-5xl font-bold mb-4">
              {aboutData?.sections[2]?.heading || "Heading Not Available"}
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              {aboutData?.sections[2]?.text || "Text Not Available"}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
