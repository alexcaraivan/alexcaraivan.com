import React from 'react';
import SbEditable from 'storyblok-react';

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-8 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">{blok.title}</h2>
          <div className="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50" />
        </div>
        <ul className="flex">
          {blok.posts.map((post) => {
            return post.content ? (
              <li key={post.content._uid} className="mt-16 mr-8 border">
                <a
                  href={`/blog/${post.slug}`}
                  className="block transition hover:opacity-50 p-8 w-80"
                >
                  <img src={post.content.image} className="pb-10 w-full h-60" />
                  <h2 className="pb-6 text-lg font-bold">{post.content.title}</h2>
                  <p className="pb-6 leading-loose">{post.content.intro}</p>
                </a>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
