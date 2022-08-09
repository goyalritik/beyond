import React, { useEffect, useState } from "react";
import client from "../../Utils/client";
import { Button } from "../../components/Button";

interface ITSectionContent {
  primaryTitle: string;
  secondaryTitle: string;
  description: string;
  imageUrl: string;
}

function AboutTeam() {
  const [sectionContent, setSectionContent] = useState<ITSectionContent>();

  const getSection = async () => {
    const assetId = `${process.env.REACT_APP_ABOUT_TEAM_ASSET_ID}`;
    try {
      const content: any = await client.getEntry(assetId);
      setSectionContent({
        primaryTitle: content.fields.primaryTitle,
        secondaryTitle: content.fields.secondaryTitle,
        description: content.fields.description,
        imageUrl: content.fields.image.fields.file.url,
      });
    } catch (err) {
      console.log(`Unable to fetch image -> ${err}`);
    }
  };
  useEffect(() => {
    getSection();
  }, []);

  return (
    <div
      className="bg-[#FAE1D54D] sm:flex items-center justify-center sm:px-8 py-5 sm:py-14 relative"
      id="about"
    >
      <div className="absolute left-0 -top-40 hidden sm:block">
        <svg
          width="511"
          height="614"
          viewBox="0 0 511 614"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M507.703 613.4L507.175 412.862C506.94 323.502 420.453 259.761 335.028 285.991L276.881 303.846C191.249 330.14 114.129 244.028 149.67 161.802V161.802C178.69 94.6637 131.898 19.1656 58.8594 15.2806L-166.462 3.29542"
            stroke="#E6692E"
            strokeWidth="6"
          />
        </svg>
      </div>

      <div className="w-100 sm:w-1/3 justify-self-end sm:m-5">
        <img src={`https:${sectionContent?.imageUrl}`} alt="Our Team" />
      </div>
      <div className="w-100 sm:w-1/3 m-5">
        <div className="text-primary text-sm my-3">
          {sectionContent?.primaryTitle}
        </div>
        <div className="text-4xl my-3">{sectionContent?.secondaryTitle}</div>
        <div className="text-base my-3">{sectionContent?.description}</div>
        <Button label="Learn more" />
      </div>
    </div>
  );
}

export default AboutTeam;
