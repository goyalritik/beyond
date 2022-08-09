import { useState, useEffect } from "react";

import { IoPeopleCircleSharp } from "react-icons/io5";
import { BsFillBagFill } from "react-icons/bs";

import client from "../../Utils/client";
import { Button } from "../../components/Button";

interface IITSectionConent {
  title: String;
  description: String;
  iconName: String;
}

function Candidates() {
  const [sectionContent, setSectionContent] = useState<IITSectionConent[]>([]);

  const getSection = async () => {
    try {
      const content = await client.getEntries({ content_type: "candidates" });
      setSectionContent(
        content.items.map((item: any) => {
          return {
            title: item.fields.title,
            description: item.fields.description,
            iconName: item.fields.iconName,
          };
        }),
      );
    } catch (err) {
      // console.log(`Unable to fetch data -> ${err}`);
    }
  };
  useEffect(() => {
    getSection();
  }, []);

  return (
    <div className="bg-[#EDEDED] py-14">
      <svg
        className="w-2/3 h-2/3 absolute right-0 hidden sm:block"
        viewBox="0 0 1118 588"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.98781 587.061L5.88515 559.524C21.1572 337.87 252.676 199.326 455.227 290.63L495.284 308.687C630.757 369.754 790.215 311.677 854.681 177.787L881.709 121.652C929.404 22.5936 1046.01 -22.1703 1147.74 19.5223V19.5223"
          stroke="#E6692E"
          strokeWidth="6"
        />
      </svg>
      <div className=" sm:flex justify-center relative">
        {sectionContent.map((item) => {
          return (
            <div
              key={`${item.title}`}
              className="flex-col bg-white m-5 p-10 sm:w-1/3"
            >
              {item.iconName === "IoPeopleCircleSharp" ? (
                <IoPeopleCircleSharp className="text-primary text-2xl my-2" />
              ) : (
                <BsFillBagFill className="text-[#11984B]  text-2xl my-2" />
              )}
              <div className="font-bold text-xl my-2">{item.title}</div>
              <p className="my-2">{item.description}</p>
              <Button label="Learn more" buttonType="secondary" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Candidates;
