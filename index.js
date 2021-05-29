const { ImagePool } = require("@squoosh/lib");
const path = require("path");
const fs = require("fs");

const imagePool = new ImagePool();
const file = path.resolve(__dirname, "89993467_p0.jpg");
const image = imagePool.ingestImage(file);
image
  .encode({
    mozjpeg: {
      quality: 90,
    },
  })
  .then(async () => {
    const encodedImage = await image.encodedWith["mozjpeg"];
    const filename =
      file.slice(0, file.lastIndexOf(".") + 1) +
      "compressed." +
      (await encodedImage).extension;
    fs.writeFileSync(filename, (await encodedImage).binary);
  });
