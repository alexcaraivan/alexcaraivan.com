import { Image, Transformation } from 'cloudinary-react';
import { formatDate } from '../utils/date';

function Card({
  public_id,
  created_at,
  context: {
    custom: { alt },
  },
}) {
  return (
    <article className="overflow-hidden rounded-lg bg-gray-800">
      <Image publicId={public_id} className="block h-auto w-full" quality="80">
        <Transformation quality="auto" fetchFormat="auto" />
      </Image>

      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <p className="text-lg">{alt}</p>
      </header>

      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline" href="#">
          <img
            alt="Placeholder"
            className="block rounded-full"
            src="https://picsum.photos/32/32/?random"
          />
          <p className="ml-2 text-sm">Nina</p>
        </a>
        <p className="text-sm">{formatDate(created_at)}</p>
      </footer>
    </article>
  );
}

export default Card;
