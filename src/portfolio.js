/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shiva Raj Mishra",
  title: "Welcome All",
  subTitle: emoji(
    "I am Shiva Raj Mishra. I am a global health researcher and programmer with passions in building statistical and ML applications to help redress world's many health problems. I enjoy traveling and exploring new places, cultures, and foods."
  ),
  resumeLink:
    "https://au.linkedin.com/in/shivarajmishra", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shivarajmishra",
  linkedin: "https://www.linkedin.com/in/shivarajmishra/",
  gmail: "shivarajmishra@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GLOBAL HEALTH RESEARCHER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Public health consulting using decision analytics, predictive and statistical modelling"
    ),
    emoji("⚡ Data scientist with skills over core research domains: epidemiology, cardiovascular health and implementation research"),
    emoji(
      "⚡ Causal inference research to understand impacts of interventions and policies on health "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "SAS",
      fontAwesomeClassname: "fa-brands fa-sass"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fa-brands fa-sass"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Visting PhD Student",
      duration: "January 2020 - March 2020",
      desc: "Participated in the research of the Nepal NCDI Poverty Commission and supported in publishing 2 papers."
    },
    {
      schoolName: "University of Queensland",
      logo: require("./assets/images/uq.png"),
      subHeader: "Doctor of Philosophy",
      duration: "April 2017 - June 2021",
      desc: "Awarded the Global Change Scholarship from the UQ Global Change Institute. Took courses on Software Engineering, Biostatistics and Causal Inference alongside working on PhD"
    },
    {
      schoolName: "University of Western Australia",
      logo: require("./assets/images/uwa.png"),
      subHeader: "Masters of Public Health",
      duration: "January 2015 - April 2017",
      desc: "Received Top Student Prize in Epidemiology from the Australasian Epidemiological Association. Took courses about Biostatistics, Epidemiology, Linked Data Analysis"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Public Health", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Biostatistics", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Fellow",
      company: "University of Sydney",
      companylogo: require("./assets/images/unisyd.png"),
      date: "January 2023 – Present",
    },
    {
      role: "Research Fellow",
      company: "University of Melbourne",
      companylogo: require("./assets/images/unimelb.png"),
      date: "March 2021 – December 2022"
    },
    {
      role: "PhD Intern",
      company: "Harvard University",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "Jan 2020 – March 2020"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME NON PROFITS AND STARTUPS THAT I CONTINUOUSLY COLLABORATED AND HELPED WITH THEIR STACK OF WORK",
  projects: [
    {
      image: require("./assets/images/neds.jpeg"),
      projectName: "Nepal Development Society",
      projectDesc: "Leading research based non-profit in Nepal working in non communicable diseases.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nedsnepal.org.np/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dsacademy.jpg"),
      projectName: "dsAcademy",
      projectDesc: "Innovating on the intersection of global health and data science.",
      footerLink: [
        {
          name: "Visit Website",
          url: "www.thedsacademy.org"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Project reports, Blogs and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Global Change Scholar",
      subtitle:
        "Picked up from a pool of PhD students commencing studies in 2017. I got training in advocacy, starting micro enterpreneurship and developing non-profit work.",
      image: require("./assets/images/uqsmall.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Linkedin Blog post",
          url: "https://www.linkedin.com/posts/shivarajmishra_good-news-amidst-covid-i-have-finally-completed-activity-6679326427722203136-nuF-/?originalSubdomain=au"
        }
      ]
    },
    {
      title: "World Heart Federation Emerging Leader Fellow",
      subtitle:
        "Co-led projects to improve undestanding around factors affecting adherence to hypertensive medication in Southeast Nigeria.",
      image: require("./assets/images/whf.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Final project",
          url: "https://world-heart-federation.org/emerging-leaders/projects/clubmeds/"
        }
      ]
    },

    {
      title: "Youth Commissioner",
      subtitle: "Served two years term as a youth commissioner in the Lancet Youth Commission on Essential Medicine Policies (YECMP). Contributed to two reports and several publications.",
      image: require("./assets/images/lancet.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://remed.org/wp-content/uploads/2016/11/resume_report_essential_medicines_Lancet_2016.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for programming, science communication, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(23)00624-2/ppt",
      title: "The fight against the deadly rise of anti-science",
      description:
        "In this book review, I write about the book The Deadly Rise of Anti-Science: a Scientist's Warning, by Peter Hotez, Dean for the National School of Tropical Medicine at Baylor College of Medicine Houston, TX, USA. Peter is an internationally acclaimed researcher known for defending vaccines and combating anti-science, explores how anti-science and anti-vaccination rhetoric are on the rise. "
    },
    {
      url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(16)30054-7/fulltext",
      title: "Liberating data to combat NCDs",
      description:
        "I wrote that data generation and sharing needs sustainable funding and trained human resources. Also, explained what can be done to redress these challenges when public funding is generally scarce in LMICs. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Ideas, codes and worked examples for creating Forrest Plot and Gap Minder Visualization in SAS 9.4",
      subtitle: "Gapminder visualisation in SAS",
      slides_url: "https://shivarajmishra.tumblr.com/post/638934132740718592/etutorial-ideas-codes-and-worked-examples-for",
      event_url: "https://shivarajmishra.tumblr.com/post/638934132740718592/etutorial-ideas-codes-and-worked-examples-for"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I dont have any podcast as of yet",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    " "
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-449505822",
  email_address: "shivarajmishra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ShivaRajMisra", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
