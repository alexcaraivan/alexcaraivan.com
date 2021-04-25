import { Image, Placeholder } from 'cloudinary-react';
import { formatDate } from '../utils/date';

function Card({ id, date, alt }) {
  return (
    <article className="overflow-hidden rounded-lg bg-gray-700 flex flex-col justify-between">
      <div>
        <Image publicId={id} loading="lazy" quality="auto" accessibility="colorblind" width="400">
          <Placeholder type="pixelate" />
        </Image>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <p className="text-lg">{alt}</p>
        </header>
      </div>

      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline" href="#">
          <img
            alt="Placeholder"
            className="block rounded-full"
            src="https://picsum.photos/32/32/?random"
          />
          <p className="ml-2 text-sm">Nina</p>
        </a>
        <p className="text-sm">{formatDate(date)}</p>
      </footer>
    </article>
  );
}

export default Card;
