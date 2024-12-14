import React, { Component } from "react";
import "./AboutMe.scss";
import Footer from "../../components/Footer/Footer";

class AboutMe extends Component {
  getDownloadUrl = (languageCode: string) => {
    return `${process.env.PUBLIC_URL}/assets/documents/resume-marlon-${languageCode}.pdf`;
  };

  render() {
    return (
      <section className="pt-[8rem]">
        <div className="about xl:w-2/3 mx-auto">
          <div>
            <div className="flex flex-col md:flex-row justify-start items-center mb-5">
              <div className="rounded-2xl overflow-hidden w-1/2 md:w-1/4 shadow-2xl mb-5">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/images/profile-thumbnail.jpg`}
                  alt=""
                />
              </div>
              <div className="ml-5">
                <h3>Fullstack developer specialized in Front-End</h3>
                <p>
                  Hi, I'm Marlon. Vintage 98. Born in Switzerland, grown up in
                  Hungary, German education.
                </p>
              </div>
            </div>

            <h3 className="border-b mb-5">Language Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "German", level: "Native", flag: "flag-de.svg" },
                { name: "Hungarian", level: "Native", flag: "flag-hu.svg" },
                { name: "English", level: "Business Level", flag: "flag-uk.svg" },
                { name: "French", level: "Beginner", flag: "flag-fr.svg" },
                { name: "Spanish", level: "Beginner", flag: "flag-es.svg" },
              ].map((lang, index) => (
                <div
                  key={index}
                  className="language-box mb-5 flex justify-between items-center"
                >
                  <div className="flex justify-start items-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/images/${lang.flag}`}
                      className="h-[30px]"
                      alt={lang.name}
                    />
                    <p className="ml-4">{lang.name}</p>
                  </div>
                  <div>{lang.level}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 pt-5">
            <h3 className="mb-5 border-b">Skills</h3>
            {[
              { years: "6+ years", skills: ["HTML5", "CSS3"] },
              {
                years: "3 years to 5 years",
                skills: [
                  "SCSS",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Bootstrap",
                  "Git",
                ],
              },
              {
                years: "1 year to 3 years",
                skills: ["Vue3", "Ruby on Rails", "Tailwind CSS", "Strapi"],
              },
              {
                years: "Less than 1 year",
                skills: ["Node", "Express", "MongoDb", "MySql"],
              },
            ].map((group, index) => (
              <div key={index} className="mb-5">
                <h5>{group.years}</h5>
                <div className="flex flex-wrap">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="overview-box mt-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-5 pt-5">
            <h3 className="mb-5 border-b">Work Experience</h3>
            <div className="grid md:grid-cols-2">
              {[
                {
                  title: "Freelance",
                  role: "Fullstack Developer",
                  period: "Jan 2022 - Today",
                  tasks: [
                    "Website Development for clients",
                    "Collaboration with other freelancers",
                    "NFT generation",
                    "UI Design",
                    "Integration of CMS",
                  ],
                },
                {
                  title: "Ventzke Media",
                  role: "Frontend Developer",
                  period: "Mar 2018 - Dec 2021",
                  tasks: [
                    "Development and maintenance of web applications Integration of interfaces and databases",
                    "Collaboration with clients to implement custom requirements",
                    "Mentoring",
                    "Learning React JS",
                    "Integration of CMS",
                  ],
                },
              ].map((job, index) => (
                <div key={index} className="mb-5">
                  <div>
                    <div className="flex items-center">
                      <h4 className="pr-5 border-r border-black">
                        {job.title}
                      </h4>
                      <p className="pl-5">{job.role}</p>
                    </div>
                    <small className="border-black">{job.period}</small>
                  </div>
                  <ul className="list-disc mt-2">
                    {job.tasks.map((task, idx) => (
                      <li key={idx} className="ml-4">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5 pt-5 pb-5">
            <h3 className="mb-5 border-b">Download my CV</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { lang: "en", flag: "flag-uk.svg" },
                { lang: "de", flag: "flag-de.svg" },
                { lang: "hu", flag: "flag-hu.svg" },
              ].map((cv, index) => (
                <a
                  key={index}
                  className="language-box flex justify-between items-center"
                  href={this.getDownloadUrl(cv.lang)}
                  download="Marlon Berdefy.pdf"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/images/${cv.flag}`}
                    className="h-[30px]"
                    alt={cv.lang}
                  />
                  <button>Download CV</button>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/images/pdf.svg`}
                    className="h-[25px]"
                    alt="PDF"
                  />
                </a>
              ))}
            </div>
          </div>

          <Footer/>
        </div>
      </section>
    );
  }
}

export default AboutMe;
