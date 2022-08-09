import { useState, useEffect } from "react";
import client from "../../Utils/client";

function BgImage() {
  const [bgImageUrl, setBgImageUrl] = useState("");
  const getBgImage = async () => {
    const assetId = `${process.env.REACT_APP_BG_IMAGE_ASSET_ID}`;
    try {
      const image = await client.getAsset(assetId);
      setBgImageUrl(image.fields.file.url);
    } catch (err) {
      console.log(`Unable to fetch image -> ${err}`);
    }
  };
  useEffect(() => {
    getBgImage();
  }, []);
  return (
    <div
      className="h-[500px] sm:h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="sm:hidden text-white text-3xl text-center pt-40 relative z-10">
        Take the leap with us
      </div>
      <div className="absolute" style={{ right: "-60px", bottom: "-30px" }}>
        <svg
          height="562px"
          width="727px"
          viewBox="0 0 375 485"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-135.579 482.485L18.1221 328.884C58.0281 289.004 123.713 292.562 159.077 336.52V336.52C217.586 409.248 334.917 362.615 327.538 269.565L318.542 156.121C314.076 99.8052 346.505 47.0554 398.772 25.617L453.912 3"
            stroke="#E6692E"
            strokeWidth="6"
          />
        </svg>
      </div>
    </div>
  );
}

export default BgImage;
