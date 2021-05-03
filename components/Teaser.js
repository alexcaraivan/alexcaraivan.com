import React from 'react';
import SbEditable from 'storyblok-react';
import { render } from 'storyblok-rich-text-react-renderer';
import Image from 'next/image';

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="px-4">
        <div className="pb-6 md:pt-16 container mx-auto">
          <div className="flex flex-col items-center justify-around md:flex-row">
            <div className="hidden md:block">
              {blok.image1 && (
                <Image
                  src={blok.image1.filename}
                  alt={blok.image1.alt}
                  width={192}
                  height={192}
                  className="rounded-full"
                />
              )}
            </div>

            <div className="p-4">
              <h2 className="text-2xl md:text-6xl font-bold font-serif text-primary mb-4">
                {blok.headline}
              </h2>
              <div>{render(blok.bio)}</div>
            </div>

            {blok.image && (
              <Image
                src={blok.image.filename}
                alt={blok.image.alt}
                width={192}
                height={192}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default Teaser;
