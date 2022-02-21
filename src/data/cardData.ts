export const featuresData = [
  {
    id: 1,
    title: "Uses Client First",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque  et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_clients.svg"),
  },
  {
    id: 2,
    title: "Two Free Revision Round",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_revision.svg"),
  },
  {
    id: 3,
    title: "Template Customization",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_template.svg"),
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_support.svg"),
  },
  {
    id: 5,
    title: "Quick Delivery",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_delivery.svg"),
  },
  {
    id: 6,
    title: "Hands-on approach",
    description:
      "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
    image: require("@/assets/features/icon_approach.svg"),
  },
];

export const benefitsData = [
  {
    id: 1,
    image: require("@/assets/features/icon_approach.svg"),
    title: "Customize with ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    id: 2,
    image: require("@/assets/features/icon_template.svg"),
    title: "Perfectly Responsive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
  {
    id: 3,
    image: require("@/assets/features/icon_clients.svg"),
    title: "Friendly Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
  },
];

export interface CardType {
  id: number;
  title: string;
  description: string;
  image: any;
}
