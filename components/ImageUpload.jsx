import React, { useState } from "react";
import cloudinaryCore from "/cloudinaryConfig";

class ImageUploader extends React.Component {
  componentDidMount() {
    const options = {
      cloud_name: "dqewkglb5",
      upload_preset: "g1nx5osi",
    };

    cloudinaryCore.createUploadWidget(options, (error, result) => {
      if (!error && result && result.event === "success") {
        const imageUrl = result.info.secure_url;
        this.props.onImageUpload(imageUrl);
      }
    }).open();
  }

  render() {
    return <div className="image-uploader">Upload Image</div>;
  }
}

export default ImageUploader;
