import {
  GrFacebookOption,
  GrLinkedinOption,
  GrInstagram,
} from "react-icons/gr";

function Footer() {
  const Links = [
    { name: "About", link: "/" },
    { name: "Job Search", link: "/" },
    { name: "Candidates", link: "/" },
    { name: "Employers", link: "/" },
    { name: "Latest News", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div>
      <div className="bg-white w-100 flex flex-col sm:flex-row sm:w-2/3 justify-between items-center m-auto py-5 sm:py-10">
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-4 text-base m-2 p-2">
          {Links.map((link) => {
            return (
              <div key={`${link.name}`}>
                <a href={link.link}>{link.name}</a>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-4 text-base m-2 p-2">
          <div className="underline">+62 (0) 9 1245470</div>
          <div className="underline break-words">career@namespace.com</div>
          <div className="col-start-1 sm:col-start-2 row-span-3">
            Level 3 <br />
            79 High Street <br />
            Melbourne CBD <br />
            1010
          </div>
        </div>
        <div className=" flex items-center justify-between text-lg self-end text-primary sm:order-first">
          <div className="mx-2">
            <a href="https://www.techwondoe.com">
              <GrFacebookOption />
            </a>
          </div>
          <div className="m-2">
            <a href="https://www.techwondoe.com">
              <GrLinkedinOption />
            </a>
          </div>
          <div className="mx-2">
            <a href="https://www.techwondoe.com">
              <GrInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#EDEDED] flex justify-center p-2">
        <div>Copyright © 2021 - Beyond Ltd.</div>
      </div>
    </div>
  );
}

export default Footer;
