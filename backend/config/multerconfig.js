import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudConfig.js";

//cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Hungerjam",
    allowed_formats: [], // File formats allowed
  },
});

// Initialize Multer with Cloudinary storage
const upload = multer({ storage });

export default upload;
