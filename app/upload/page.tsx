'use client';

import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  const handleUpload = (result) => {
    if (result.event !== 'success') return;

    const info = result.info as CloudinaryResult;

    setPublicId(info.public_id);
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
