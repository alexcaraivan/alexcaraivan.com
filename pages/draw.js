import Layout from '@components/Layout';
import { fetchPhotos, openUploadWidget } from '../utils/cloudinary-service';
import { CloudinaryContext, Image, Placeholder } from 'cloudinary-react';
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'lib/auth';

const cloudName = 'diumpjpz6';

function Draw() {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (!loading && !user) {
    router.push('/');
  }

  const [images, setImages] = useState([]);
  const [upload, setUpload] = useState(false);
  const [alt, setAlt] = useState('');

  const toggleUpload = () => {
    setUpload(!upload);
  };

  useEffect(() => {
    fetchPhotos(cloudName, setImages);
  }, []);

  const beginUpload = () => {
    if (!alt) {
      alert('please insert description');
      return;
    }
    const uploadOptions = {
      cloudName,
      tags: ['nina-draws'],
      uploadPreset: 'nina-draws',
      context: `alt=${alt}`,
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          setImages([
            ...images,
            {
              id: photos.info.public_id,
              alt: photos.info.context.custom.alt,
              date: photos.created_at,
            },
          ]);
          setAlt('');
          setUpload(false);
        }
      } else {
        console.log(error);
      }
    });
  };

  const handleChange = (evt) => {
    setAlt(evt.target.value);
  };

  return (
    user && (
      <Layout>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
        <CloudinaryContext cloudName={cloudName}>
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="text-center text-2xl md:text-4xl py-6">Nina Draws Images</h1>
              <button className="bg-gray-100 rounded text-black ml-4 px-2" onClick={toggleUpload}>
                Upload New
              </button>
            </div>
            {upload && (
              <div className="flex justify-center my-8 pb-8">
                <textarea
                  name="alt"
                  value={alt}
                  onChange={handleChange}
                  cols="40"
                  rows="2"
                  className="block text-black p-2 outline-none resize-none"
                  placeholder="description of image"
                />
                <button
                  onClick={() => beginUpload()}
                  className="bg-gray-100 text-black px-4 border"
                >
                  Upload Image
                </button>
              </div>
            )}
            <section className="grid md:grid-cols-4 gap-4">
              {images.map((image) => (
                <Card key={image.id} {...image} />
              ))}
            </section>
          </div>
        </CloudinaryContext>
      </Layout>
    )
  );
}

export default Draw;
