{
  /****************************************************************
                 BLOG PAGE - PATH: src/app/blog/page.tsx
   ***************************************************************/
}

import React from "react";
import Link from "next/link";

function BlogPage() {
  return (
    <div>
      {/****************************************************************
                          RENDER BLOG LISTING SECTION
        ***************************************************************/}
      <section className="min-h-screen bg-brand-cream px-8 py-16">
        <h1 className="text-5xl font-bold text-brand-charcoal mb-8 text-center">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example blog posts */}
          <div className="bg-brand-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">First Blog Post</h2>
            <p className="text-lg text-brand-charcoal mb-4">
              This is the first blog post.
            </p>
            <Link href="/blog/first-blog-post">
              <p className="text-brand-mocha font-bold hover:underline">
                Read More
              </p>
            </Link>
          </div>

          <div className="bg-brand-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Second Blog Post</h2>
            <p className="text-lg text-brand-charcoal mb-4">
              This is the second blog post.
            </p>
            <Link href="/blog/second-blog-post">
              <p className="text-brand-mocha font-bold hover:underline">
                Read More
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
