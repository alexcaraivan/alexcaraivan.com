import React from 'react';
import NextHead from 'next/head';

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>
  </NextHead>
);

export default Head;
