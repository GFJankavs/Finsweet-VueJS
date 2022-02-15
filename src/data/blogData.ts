const blogData = [
  {
    id: 1,
    imageURL:
      "https://images.pexels.com/photos/9623794/pexels-photo-9623794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 2,
    imageURL:
      "https://images.pexels.com/photos/3766189/pexels-photo-3766189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 3,
    imageURL:
      "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "19 Jan 2022",
    title:
      "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    description:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
];

export default blogData;

export interface BlogDataType {
  id: number;
  imageURL: string;
  date: string;
  title: string;
  description: string;
}
