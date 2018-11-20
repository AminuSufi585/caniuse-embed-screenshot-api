const cloudinary = require('cloudinary').v2;
cloudinary.config(require("../cloudinary-config"));

module.exports = (feature, screenshot) => {
  return new Promise((resolve, reject) => {

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const date = `${yyyy}-${mm}-${dd}`;

    const options = {
      folder: 'caniuse-embed',
      public_id: `${feature}-${date}`
    };

    cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error) reject(error)
      else resolve(result);
    }).end(screenshot);
  });
}
