import logo from "../../assets/logo.svg"

const Footer = () => {
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

  return (
    <div>
      <div className="flex justify-center items-center w-full footer-bg rounded-tr-[4rem] rounded-tl-[10rem] mt-[10rem]">
        <div className="flex justify-center items-center w-[90%] flex-col relative">
          {/* first box overlapping */}
          <section className="bg-[#ffffff] absolute top-[-10%] rounded-lg w-full flex justify-center items-center py-[3rem] overlap">
          <img src={logo} alt="clickup" className="absolute left-[0%] top-0 bg-cover overflow-y-hidden w-[8%]"/>

            <div className="border w-[80%] flex justify-between items-center">
            <div className="">
              <div>
                <h1 className="font-extrabold text-5xl text-[rgb(51,51,51)]">One app to replace them all.</h1>
                <p className="text-[rgb(41,45,52)]">
                  All of your work in one place: Tasks, Docs, Chat, Goals, &
                  more.
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[rgb(123,104,238)] text-[#ffffff] font-bold rounded-md py-3 px-6" >Free Forever</button>
            </div>
            </div>
          </section>
          {/* first box overlapping */}

          {/* first footer section */}
          <section className="mt-[10rem]">{}</section>
          {/* first footer section */}

          {/* second footer section */}
          <section className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4 w-full py-8 border-t border-b text-[#ffffff]">
            {footerLinks?.map((footer, i) => (
              <div key={i} className="flex justify-center items-center w-full">
                <div className=" justify-center items-center w-full">
                  <div className="">
                    <h1 className="font-bold mb-4">{footer.name}</h1>
                    <ul>
                      {footer.links?.map((link,i) => (
                        <li className="mb-4 cursor-pointer" key={i}>{link.name}</li>
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
                <hr className="w-[80%] mb-6" />
                <div className="flex justify-center items-center flex-col">
                  <button>
                    <img src="" alt="" />
                    <small className="flex justify-center items-start flex-col">
                      <p>Download on the</p>
                      <h6>App Store</h6>
                    </small>
                  </button>
                  <button>
                    <img src="" alt="" />
                    <small className="flex justify-center items-start flex-col">
                      <p>GET IT ON</p>
                      <h6>Google Play</h6>
                    </small>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* second footer section */}

          {/* last footer section */}
          <section className="flex md:justify-between justify-center items-center my-6">
            <div></div>
            <div></div>
          </section>
          {/* last footer section */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
