import React from 'react';
import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="bg-white-half">
        <div className="pb-6 pt-16 container mx-auto">
          <div className="flex items-center justify-around">
            <div>
              <h2 className="text-6xl font-bold font-serif text-primary mb-4">{blok.headline}</h2>
              <div>{render(blok.bio)}</div>
            </div>

            {blok.image && <img src={blok.image.filename} alt={blok.image.alt} className="w-48 rounded-full" />}
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default Teaser;
