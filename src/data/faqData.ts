const faqData = [
  {
    id: 1,
    title: "How much time does it take?",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isOpen: false,
  },
  {
    id: 2,
    title: "What is your class naming convention?",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isOpen: false,
  },
  {
    id: 3,
    title: "How do you communicate?",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isOpen: false,
  },
  {
    id: 4,
    title: "I have a bigger project. Can you handle it?",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isOpen: false,
  },
  {
    id: 5,
    title: "What is your class naming convention?",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    isOpen: false,
  },
];

export default faqData;

export interface FaqDataType {
  id: number;
  title: string;
  value: string;
  isOpen: boolean;
}
