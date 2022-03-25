const PROJECTS_DATA = {
  projects: [
    {
      id: 1,
      title: "Stock portfolio website",
      description:
        "It was written in React Redux Saga + NodeJs + Mongo. The goal of the app is to experiment and show the level of my knowledge.",
      image: "https://www.getbidbar.com/assets/blog/programming_topics.jpg",
      tags: ["MongoDB", "React", "Redux", "Docker", "NodeJs"],
      links: [
        { type: "website", name: "Website link", url: "url3" },
        { type: "github", name: "Frontend code", url: "url1" },
        { type: "github", name: "Backend code", url: "url2" },
      ],
    },
    {
      id: 2,
      title: "Crypto portfolio manager",
      description:
        "It is an app written for myself. I used Vue and Laravel with Mysql as the database. It was a personal project so the code is not perfect.",
      image: "https://www.getbidbar.com/assets/blog/programming_topics.jpg",
      tags: ["MySQL", "Laravel", "VueJs"],
      links: [
        {
          type: "website",
          name: "Website link",
          url: "https://mycryptoportfolio.co",
        },
        { type: "github", name: "Code", url: "url1" },
      ],
    },
    {
      id: 2,
      title: "This website",
      tags: ["React", "Context Api"],
      description:
        "You can find the code of this website. It's a simple website. It was written in react and used a little context api with some static data.",
      image: "https://www.getbidbar.com/assets/blog/programming_topics.jpg",
      links: [{ type: "github", name: "Frontend code", url: "url1" }],
    },
  ],
};

export default PROJECTS_DATA;
