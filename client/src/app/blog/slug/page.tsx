{
    /****************************************************************
                   BLOG POST PAGE - PATH: src/app/blog/[slug]/page.tsx
     ***************************************************************/
  }
  
  import React from "react";
  
  function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params; // Get the slug from the URL
  
    // Dummy data (replace with actual data fetching)
    const post = {
      title: "Sample Blog Post",
      content: `This is the content of the post with the slug: ${slug}`,
    };
  
    return (
      <div>
        {/****************************************************************
                            RENDER BLOG POST SECTION
          ***************************************************************/}
        <section className="min-h-screen bg-brand-light-tan px-8 py-16">
          <h1 className="text-5xl font-bold text-brand-charcoal mb-8 text-center">
            {post.title}
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-brand-charcoal">{post.content}</p>
          </div>
        </section>
      </div>
    );
  }
  
  export default BlogPost;
  