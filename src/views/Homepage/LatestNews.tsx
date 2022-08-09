import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import client from "../../Utils/client";

interface SectionContentIf {
  author: String;
  date: String;
  title: String;
  imageUrl: String;
}

function LatestNews() {
  const [sectionContent, setSectionContent] = useState<SectionContentIf[]>([]);

  const getSection = async () => {
    try {
      const content = await client.getEntries({ content_type: "latestNews" });
      setSectionContent(
        content.items.map((item: any) => {
          return {
            title: item.fields.title,
            date: item.fields.date,
            author: item.fields.author,
            imageUrl: item.fields.image.fields.file.url,
          };
        }),
      );
    } catch (err) {
      console.log(`Unable to Fetch WhyChooseSection -> ${err}`);
    }
  };
  useEffect(() => {
    getSection();
  }, []);

  return (
    <div className="flex justify-center py-5 sm:py-14">
      <div className="sm:w-2/3 sm:flex-col m-5">
        <div className="flex w-100 justify-between my-2">
          <div className="text-4xl">Latest News</div>
          <Button label="View All" />
        </div>
        <div className="sm:flex">
          {sectionContent.map((item) => {
            return (
              <div key={`${item.title}`} className="flex-col m-3">
                <img
                  src={`https:${item.imageUrl}`}
                  className="h-56 w-84 object-cover"
                  alt={`${item.title}`}
                />
                <div className="text-sm text-[#000000B2] my-2">
                  {`by ${item.author} | ${item.date}`}
                </div>
                <p className="text-lg font-bold">{item.title}</p>
                <Button label="Read more" buttonType="secondary" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
