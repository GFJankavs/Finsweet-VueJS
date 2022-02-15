const navigationTitles = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Us",
    route: "/about",
  },
  {
    title: "Features",
    route: "/features",
  },
  {
    title: "Pricing",
    route: "/pricing",
  },
  {
    title: "FAQ",
    route: "/faq",
  },
  {
    title: "Blog",
    route: "/blog",
  },
];

export type NavigationType = {
  title: string;
  route: string;
};

export default navigationTitles;
