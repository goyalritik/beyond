import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import client from "../../Utils/client";

interface ITSectionContent {
  title: string;
  description: string;
}

function Career() {
  const [sectionContent, setSectionContent] = useState<ITSectionContent>();
  const getSection = async () => {
    const assetId = `${process.env.REACT_APP_CAREER_ASSET_ID}`;
    try {
      const content: any = await client.getEntry(assetId);
      setSectionContent({
        title: content.fields.title,
        description: content.fields.description,
      });
    } catch (err) {
      console.log(`Unable to fetch image -> ${err}`);
    }
  };
  useEffect(() => {
    getSection();
  }, []);

  return (
    <div className="bg-primary flex justify-center items-center py-5 sm:py-14">
      <div className="sm:w-2/3 flex-col justify-center items-center">
        <div className="text-4xl text-white text-center m-4">
          {sectionContent?.title}
        </div>
        <div className="text-lg text-white text-center m-4">
          {sectionContent?.description}
        </div>
        <div className="flex justify-center m-4">
          <Button label="Get in touch" buttonType="secondary" />
        </div>
      </div>
    </div>
  );
}

export default Career;
