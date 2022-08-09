import { useEffect, useState } from "react";
import client from "../../Utils/client";
import { Card } from "../../components/Card";

interface SectionContentItemsIf {
  title: string;
  description: string;
}
interface SectionContentIf {
  title: string;
  description: string;
  content: SectionContentItemsIf[];
}

function WhyChooseUs() {
  const [sectionContent, setSectionContent] = useState<SectionContentIf>();

  const getSection = async () => {
    try {
      const data = await client.getContentType("whyChooseUs");
      const content = await client.getEntries({ content_type: "whyChooseUs" });
      setSectionContent({
        title: data.name,
        description: data.description,
        content: content.items.map((item: any) => {
          return {
            title: item.fields.title,
            description: item.fields.description,
          };
        }),
      });
    } catch (err) {
      console.log(`Unable to Fetch WhyChooseSection -> ${err}`);
    }
  };
  useEffect(() => {
    getSection();
  }, []);

  return (
    <div className="py-5 sm:py-14">
      <div className="sm:w-2/3 flex flex-col items-center p-5 m-auto">
        <div className="text-4xl m-2 text-center">{sectionContent?.title}</div>
        <div className="text-lg text-center sm:w-4/5 m-2">
          {sectionContent?.description}
        </div>
        <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2">
          {sectionContent?.content.map((item) => {
            return (
              <Card
                key={`${item.title}`}
                title={item.title}
                description={item.description}
                icon="correct"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
