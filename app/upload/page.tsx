'use client';

import React, { useState } from 'react';

import {
  CldUploadWidget,
  CldImage,
  CloudinaryUploadWidgetResults,
} from 'next-cloudinary';

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  const handleUpload = (results: CloudinaryUploadWidgetResults) => {
    if (
      results.event === 'success' &&
      results.info &&
      typeof results.info === 'object' &&
      'public_id' in results.info
    ) {
      setPublicId(results.info.public_id);
    }
  };

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="A coffee image"
        />
      )}

      <CldUploadWidget
        uploadPreset="lhandkzd"
        onUpload={handleUpload}
        options={{ sources: ['local', 'camera'], multiple: false }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
