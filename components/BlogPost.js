import React from 'react';
import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';

const BlogPost = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="w-full px-8">
        <div className="max-w-3xl mx-auto text-center pt-4 md:pt-20 flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl font-bold font-serif text-primary tracking-wide">
            {blok.title}
          </h1>
          <p className="text-lg max-w-lg">{blok.intro}</p>
          <img className="w-full my-8 md:my-16" src={blok.image} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-4 md:pt-20 flex flex-col items-center px-8">
        <div className="leading-relaxed text-xl text-left drop-cap">{render(blok.long_text)}</div>
      </div>
    </SbEditable>
  );
};

export default BlogPost;
