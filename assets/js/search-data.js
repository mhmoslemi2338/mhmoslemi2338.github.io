// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publicationss in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Comming Soon!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-selected-for-the-outstanding-senior-project-award-in-electrical-engineering-at-sharif-university-recognized-for-raising-the-bar-in-technical-quality-and-creativity",
          title: 'Selected for the Outstanding Senior Project Award in Electrical Engineering at Sharif University....',
          description: "",
          section: "News",},{id: "news-admitted-to-the-m-sc-program-in-computer-science-at-western-university",
          title: 'Admitted to the M.Sc. program in Computer Science at Western University.',
          description: "",
          section: "News",},{id: "news-graduated-with-a-b-sc-in-electrical-engineering-from-sharif-university-of-technology",
          title: 'Graduated with a B.Sc. in Electrical Engineering from Sharif University of Technology.',
          description: "",
          section: "News",},{id: "news-our-recent-work-otclean-got-accepted-at-sigmod-24",
          title: 'Our recent work OTClean got accepted at SIGMOD’24!',
          description: "",
          section: "News",},{id: "news-our-recent-paper-got-accepted-at-guide-ai-workshop-at-sigmod-24",
          title: 'Our recent paper got accepted at GUIDE-AI workshop at SIGMOD’24!',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-ieee-bigdata-24-evaluating-blocking-biases-in-entity-matching",
          title: 'Paper accepted to IEEE BigData’24: Evaluating Blocking Biases in Entity Matching',
          description: "",
          section: "News",},{id: "news-defended-my-m-sc-thesis-fairness-in-entity-matching-and-blocking-at-western-ontario-university",
          title: 'Defended my M.Sc. thesis: Fairness in Entity Matching and Blocking at Western Ontario...',
          description: "",
          section: "News",},{id: "news-awarded-western-university-doctoral-excellency-scholarship-cad-160k-for-research-excellence",
          title: 'Awarded Western University Doctoral Excellency Scholarship (CAD 160k) for research excellence.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%68%6D%6F%73%6C%65%6D%69%32%33%33%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mhmoslemi2338", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohammad-hosein-moslemi", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-0278-4665# your ORCID ID", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vfufSS0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
