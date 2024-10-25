/****************************************************************
                 HOME PAGE - PATH: src/app/home/page.tsx
                 This is the main home page of the site.
****************************************************************/

import { GetStaticProps } from 'next'; // Import GetStaticProps from Next.js
import { client } from '../../../sanity'; // Import the sanity client

// Define the query to fetch data from Sanity
const query = `*[_type == "homePage"][0]{
  title,
  sections[]{
    heading,
    subheading,
    paragraph,
    image{
      asset->{
        url
      }
    },
    // Section 3 (gallery) data
    _type == "section3" => {
      galleryTitle,
      images[]{
        asset->{
          url
        }
      }
    }
  }
}`;

/****************************************************************
                 FETCH DATA WITH ISR (GETSTATICPROPS)
  - This function runs at build time and revalidates every 60 secs.
****************************************************************/
export const getStaticProps: GetStaticProps = async () => {
  const homeData = await client.fetch(query); // Fetch data from Sanity

  return {
    props: { homeData }, // Pass the fetched data as props
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

/****************************************************************
                      HOMEPAGE COMPONENT STARTS
****************************************************************/
const HomePage = ({ homeData }: { homeData: any }) => (
  <div>
    {/****************************************************************
                          RENDER SECTION 1
     ***************************************************************/}
    <section className="h-screen flex items-center justify-between px-8 bg-brand-cream">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-brand-charcoal mb-4 text-center">
          {homeData?.sections?.[0]?.heading || 'Heading Not Available'}
        </h1>
        <h2 className="text-2xl font-semibold text-brand-charcoal mb-2 text-center">
          {homeData?.sections?.[0]?.subheading || 'Subheading Not Available'}
        </h2>
        <p className="text-lg text-brand-charcoal text-center">
          {homeData?.sections?.[0]?.paragraph || 'Content not available'}
        </p>
      </div>
      <div className="w-1/2">
        {homeData?.sections?.[0]?.image && (
          <img
            src={homeData.sections[0].image.asset.url}
            alt="Section Image"
            className="w-full h-auto"
          />
        )}
      </div>
    </section>

    {/****************************************************************
                          RENDER SECTION 2
     ***************************************************************/}
    <section className="h-screen flex items-center justify-between px-8 bg-brand-light-tan">
      <div className="w-1/2">
        {homeData?.sections?.[1]?.image && (
          <img
            src={homeData.sections[1].image.asset.url}
            alt="Section Image"
            className="w-full h-auto"
          />
        )}
      </div>
      <div className="w-1/2 justify-center">
        <h2 className="text-4xl text-center font-bold text-brand-mocha mb-4">
          {homeData?.sections?.[1]?.heading || 'Heading Not Available'}
        </h2>
        <p className="text-lg text-brand-mocha text-center">
          {homeData?.sections?.[1]?.paragraph || 'Content not available'}
        </p>
      </div>
    </section>

    {/****************************************************************
                          RENDER SECTION 3 (Gallery)
     ***************************************************************/}
    <section className="h-screen flex flex-col justify-center px-8 bg-brand-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-brand-dark-mocha">
        {homeData?.sections?.[2]?.galleryTitle || 'Gallery'}
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {homeData?.sections?.[2]?.images &&
          homeData.sections[2].images.map((image: any, idx: number) => (
            <div key={idx} className="text-center">
              <img
                src={image.asset.url}
                alt={`Gallery Image ${idx + 1}`}
                className="w-full h-auto mb-4"
              />
            </div>
          ))}
      </div>
    </section>

    {/****************************************************************
                          RENDER SECTION 4
     ***************************************************************/}
    <section className="h-screen flex items-center justify-center bg-brand-charcoal">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-brand-white mb-4">
          {homeData?.sections?.[3]?.heading || 'Heading Not Available'}
        </h2>
        <p className="text-lg text-brand-white max-w-2xl mx-auto">
          {homeData?.sections?.[3]?.paragraph || 'Content not available'}
        </p>
      </div>
    </section>
  </div>
);

/****************************************************************
                      EXPORT HOMEPAGE COMPONENT
****************************************************************/
export default HomePage;
