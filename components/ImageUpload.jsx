// components/ImageUploader.js
import React from "react";
import cloudinaryCore from ".cloudinaryConfig";

class ImageUploader extends React.Component {
  componentDidMount() {
    const options = {
      cloud_name: "your-cloud-name",
      upload_preset: "your-upload-preset",
    };

    cloudinaryCore.createUploadWidget(options, (error, result) => {
      if (!error && result && result.event === "success") {
        // Handle the uploaded image URL here, e.g., pass it to a callback function.
        const imageUrl = result.info.secure_url;
        this.props.onImageUpload(imageUrl);
      }
    }).open(); // Open the upload widget
  }

  render() {
    return <div className="image-uploader">Upload Image</div>;
  }
}

export default ImageUploader;
