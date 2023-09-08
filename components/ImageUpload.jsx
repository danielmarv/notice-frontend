import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const CloudinaryUploader = ({ onImageUpload }) => {
  const handleUpload = (result) => {
    if (!result.event) {
      return; 
    }

    const imageUrl = result.info.secure_url;
    onImageUpload(imageUrl);
  };

  return (
    <CldUploadWidget
      cloudName="dqewkglb5" 
      uploadPreset="gxvey7oj" 
      sources={['local', 'url']}
      resourceType="auto"
      onUpload={handleUpload}
    >
      {({ open }) => (
        <div>
          <button onClick={open}>Upload Image</button>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default CloudinaryUploader;
