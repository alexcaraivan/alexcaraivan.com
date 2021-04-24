import React, { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 400,
  height: 'auto',
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

function Upload(props) {
  const [files, setFiles] = useState([]);
  const [alt, setAlt] = useState('');
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  const uploadFiles = async () => {
    const data = new FormData();
    const file = files[0];
    data.append('file', file);
    data.append('upload_preset', 'nina-draws');
    data.append('tags', 'nina-draws');
    data.append('context', `alt=${alt}|caption=${file.name}`);
    const res = await fetch(`https://api.cloudinary.com/v1_1/diumpjpz6/image/upload`, {
      method: 'POST',
      body: data,
    });
    const uploadData = await res.json();
    console.log('Uploaded: ');
    console.log(uploadData);
  };

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  const handleChange = (evt) => {
    setAlt(evt.target.value);
    console.log(evt.target.value)
  }

  return (
    <section className="flex items-center justify-center flex-col p-6">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
      <textarea name="alt" value={alt} onChange={handleChange} className="block text-black w-96"/>
      <button type="button" className="bg-white text-black px-4 py-2 rounded mt-2" onClick={uploadFiles}>
        Upload
      </button>
    </section>
  );
}

export default Upload;
