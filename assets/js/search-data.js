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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/newpubs/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Artifacts from prior teaching experiences",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-llms-and-the-eliza-effect",
          title: 'LLMs and the ELIZA effect',
          description: "2023 · first-year undergraduates · UMass",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emc.html";
            },},{id: "projects-using-word-embeddings-for-computational-social-science",
          title: 'Using word embeddings for Computational Social Science',
          description: "2021 · social scientists · online",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nlp_css.html";
            },},{id: "projects-static-word-embeddings-in-computational-social-science",
          title: 'Static word embeddings in Computational Social Science',
          description: "2024 · cs undergraduates · Pitt",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pitt.html";
            },},{id: "projects-75-year-anniversary-of-the-turing-test",
          title: '75 year anniversary of the Turing Test',
          description: "2025 · undergraduates · Mt Holyoke",
          section: "Projects",handler: () => {
              window.location.href = "/projects/turing.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%6E%6E%61%72%64@%63%73.%75%6D%61%73%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nnkennard", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/144012209", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RpIHn88AAAAJ", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/nnkennard.bsky.social", "_blank");
        },
      },];
