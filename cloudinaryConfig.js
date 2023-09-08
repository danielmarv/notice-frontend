// cloudinaryConfig.js
import cloudinary from "cloudinary-core";

const cloudinaryCore = new cloudinary.Cloudinary({
  cloud_name: "your-cloud-name",
  api_key: "your-api-key",
});

export default cloudinaryCore;
