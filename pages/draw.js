import Layout from '@components/Layout';
import { fetchPhotos } from '../utils/cloudinary-service';
import {CloudinaryContext} from 'cloudinary-react';
import Card from '../components/Card';
import Upload from '../components/Upload';

const cloudName = 'diumpjpz6';

function Draw({photos}) {
  return (
    <Layout>
      <CloudinaryContext cloudName={cloudName}>
        <h1 className="text-center text-4xl pt-6">Nina Draws Images</h1>
        <Upload />
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {photos.map((photo) => (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={photo.public_id}>
                <Card {...photo}/>
              </div>
            ))}
          </div>
        </div>
      </CloudinaryContext>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      photos: await fetchPhotos(cloudName),
    },
  };
}

export default Draw;
