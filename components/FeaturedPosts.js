import React from 'react';
import SbEditable from 'storyblok-react';

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="p-8 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">{blok.title}</h2>
        </div>
        <ul className="grid md:grid-cols-4 mt-8 gap-4">
          {blok.posts.map((post) =>
            post.content ? (
              <li
                key={post.content._uid}
                className="overflow-hidden rounded-lg bg-gray-700 flex flex-col justify-between"
              >
                <a href={`/blog/${post.slug}`} className="block transition hover:opacity-50">
                  <img src={post.content.image} className="w-full border-b border-gray-500" />
                  <div className="p-4">
                    <h2 className="pb-2 text-lg font-bold">{post.content.title}</h2>
                    <p>{post.content.intro}</p>
                  </div>
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
