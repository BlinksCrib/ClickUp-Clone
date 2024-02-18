import logo from "../../assets/logo.svg";
import apple from "../../assets/app-store-badge-white.png";
import google from "../../assets/google-play-badge-white.png";
import uptime from "../../assets/uptime_badge-white.svg";
import security from "../../assets/security_badge-white.svg";
import support from "../../assets/support_badge-white.svg";

import { Logo } from "../../utils/Icons";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      name: "CLICKUP",
      links: [
        { name: "Download", path: "download" },
        { name: "Careers", path: "careers" },
        { name: "About Us", path: "about" },
        { name: "Product Roadmap", path: "product" },
        { name: "Press", path: "press" },
        { name: "Clients", path: "customers" },
        { name: "Brand", path: "brand" },
        { name: "Community", path: "community" },
        { name: "Affiliate & Referrals", path: "partners/affiliates" },
        { name: "Reviews", path: "reviews" },
        { name: "Status", path: "status" },
      ],
    },
    {
      name: "RESOURCES",
      links: [
        { name: "Help Docs", path: "help" },
        { name: "On-Demand Demo", path: "on-demand-demo" },
        { name: "Webinars", path: "webinars" },
        { name: "Contact Us", path: "contact" },
        { name: "Templates", path: "templates" },
        { name: "Import", path: "import" },
        { name: "API", path: "api" },
        { name: "Consultants", path: "consultants" },
        { name: "Partners", path: "partners" },
        { name: "ClickUp University", path: "university" },
        { name: "Events", path: "events" },
      ],
    },
    {
      name: "FEATURES",
      links: [
        { name: "Gantt Chart", path: "features/gantt-chart-view" },
        { name: "Dashboards", path: "features/dashboards" },
        {
          name: "Native Time Tracking",
          path: "features/project-time-tracking",
        },
        { name: "Mind Maps", path: "features/mind-maps" },
        { name: "Automations", path: "features/automations" },
        { name: "Notepad", path: "features/notepad" },
        { name: "Integrations", path: "integrations" },
        { name: "Email", path: "features/email-project-management" },
        { name: "To-Do List", path: "online-to-do-list" },
        { name: "Kanban Board", path: "features/kandan-board" },
        { name: "Sprints", path: "features/sprints" },
      ],
    },
    {
      name: "COMPARE",
      links: [
        { name: "vs Monday", path: "compare/monday-alternative" },
        { name: "vs Asana", path: "compare/asana-alternative" },
        { name: "vs Jira", path: "compare/jira-alternative" },
        { name: "vs Trello", path: "compare/trello-alternative" },
        { name: "vs Airtable", path: "compare/airtable-alternative" },
        { name: "vs Notion", path: "compare/notion-alternative" },
        { name: "vs Basecamp", path: "compare/basecamp-alternative" },
        { name: "vs Wrike", path: "compare/wrike-alternative" },
        {
          name: "vs MS Project",
          path: "compare/microsoft-project-alternative",
        },
        { name: "vs Todoist", path: "compare/todoist-alternative" },
        { name: "vs Smartsheet", path: "compare/smartsheet-alternative" },
      ],
    },
  ];

  const reel = [
    {
      bold: "Free training",
      normal: "& 24-hours support",
      icon: support,
    },
    {
      bold: "security & privacy",
      normal: "Serious about",
      icon: security,
    },
    {
      bold: "Highest levels of uptime",
      normal: "the last 12 months",
      icon: uptime,
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center w-full footer-bg rounded-tr-[4rem] rounded-tl-[10rem] mt-[10rem]">
        <div className="flex justify-center items-center w-[90%] flex-col relative">
          {/* first box overlapping */}
          <section className="bg-[#ffffff] absolute md:top-[-10%] top-[-8%] rounded-lg w-full flex justify-center items-center md:py-[3rem] py-[2rem] overlap">
            <img
              src={logo}
              alt="clickup"
              className="absolute lg:left-[0%] right-0 lg:top-0 bottom-0 bg-cover overflow-y-hidden w-[8%]"
            />

            <div className="w-[80%] flex lg:justify-between justify-start lg:items-center items-start lg:flex-row flex-col">
              <div className="w-full lg:mb-0 mb-1">
                <div>
                  <h1 className="font-extrabold lg:text-5xl md:text-3xl text-2xl text-[rgb(51,51,51)]">
                    One app to replace them all.
                  </h1>
                  <p className="text-[rgb(41,45,52)]">
                    All of your work in one place: Tasks, Docs, Chat, Goals, &
                    more.
                  </p>
                </div>
              </div>
              <div className="w-full lg:mt-0 mt-6">
                <button className="bg-[rgb(123,104,238)] text-[#ffffff] font-bold rounded-md py-3 px-6">
                  Free Forever
                </button>
              </div>
            </div>
          </section>
          {/* first box overlapping */}

          {/* first footer section */}
          <section className="mt-[8rem] mb-[2rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:justify-between justify-center md:items-center items-start w-full">
            {reel?.map((item, i) => (
              <div className="flex lg:justify-center justify-start items-center lg:mb-0 mb-4" key={i}>
                <img src={item.icon} alt="reel icon" />
                {item.bold === "security & privacy" ? (
                  <p className="text-[#ffffff] ml-4">
                     {item.normal} 
                    <b> {item.bold}</b>
                  </p>
                ) : (
                  <p className="text-[#ffffff] ml-4">
                    <b>{item.bold}</b> {item.normal}
                  </p>
                )}
              </div>
            ))}
          </section>
          {/* first footer section */}

          {/* second footer section */}
          <section className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4 w-full py-8 border-t border-b text-[#ffffff]">
            {footerLinks?.map((footer, i) => (
              <div key={i} className="flex justify-center items-center w-full">
                <div className=" justify-center items-center w-full">
                  <div className="">
                    <h1 className="font-bold mb-4">{footer.name}</h1>
                    <ul>
                      {footer.links?.map((link, i) => (
                        <li className="mb-4 cursor-pointer" key={i}>
                          {link.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <h1 className="font-bold mb-4">LEARN</h1>
              <ul>
                <li className="mb-4 cursor-pointer">Blog</li>
                <li className="mb-4 cursor-pointer">Software Team Hub</li>
                <li className="mb-4 cursor-pointer">Agency Hub</li>
                <li className="mb-4 cursor-pointer">Newsletter</li>
                <li className="mb-4 cursor-pointer">Podcast</li>
              </ul>
              <div className="mt-[7rem]">
                <hr className="md:w-[80%] w-full mb-6" />
                <div className="flex justify-center items-start flex-col">
                  <button className="lg:w-[80%] w-full rounded-lg">
                    <img src={apple} alt="apple logo" />
                  </button>
                  <button className="lg:w-[80%] w-full rounded-lg mt-3">
                    <img src={google} alt="google logo" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* second footer section */}

          {/* last footer section */}
          <section className="flex md:justify-between justify-center items-center md:flex-row flex-col my-8 w-full">
            <div className="flex md:justify-start justify-center items-center md:items-start flex-col">
              <Logo />
              <p className="text-[#ffffff] font-medium md:my-0 my-3 lg:text-start text-center">
                &copy; {year} | Security | Your Privacy | Terms
              </p>
            </div>
            <div>
              <ul className="flex justify-center items-center">
                <li>
                  <i className="fa-brands fa-linkedin text-[#ffffff] mr-2 text-3xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-square-facebook text-[#ffffff] mr-2 text-3xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-instagram text-[#ffffff] mr-2 text-3xl"></i>
                </li>
                <li>
                  <i className="fa-brands fa-x-twitter text-[#ffffff] text-3xl"></i>
                </li>
              </ul>
            </div>
          </section>
          {/* last footer section */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
