const pricingData = [
  {
    title: "Landing Page",
    description: "When you’re ready to go beyond prototyping in Figma.",
    top: {
      price: "299",
      type: "Per Design",
    },
    features: [
      {
        text: "All limited links",
        isAvailable: true,
      },
      {
        text: "Own analytics platform",
        isAvailable: true,
      },
      {
        text: "Chat support",
        isAvailable: true,
      },
      {
        text: "Optimize hashtags",
        isAvailable: false,
      },
      {
        text: "Unlimited users",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Website Page",
    description:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    top: {
      price: "399",
      type: "Multi Design",
    },
    features: [
      {
        text: "All limited links",
        isAvailable: true,
      },
      {
        text: "Own analytics platform",
        isAvailable: true,
      },
      {
        text: "Chat support",
        isAvailable: true,
      },
      {
        text: "Optimize hashtags",
        isAvailable: true,
      },
      {
        text: "Unlimited users",
        isAvailable: true,
      },
    ],
  },
  {
    title: "Complex Project",
    description: "When you’re ready to go beyond prototyping in Figma.",
    top: {
      price: "499 +",
      type: "Per Design",
    },
    features: [
      {
        text: "All limited links",
        isAvailable: true,
      },
      {
        text: "Own analytics platform",
        isAvailable: true,
      },
      {
        text: "Chat support",
        isAvailable: true,
      },
      {
        text: "Optimize hashtags",
        isAvailable: true,
      },
      {
        text: "Unlimited users",
        isAvailable: true,
      },
      {
        text: "Unlimited users",
        isAvailable: true,
      },
      {
        text: "Assist and Help",
        isAvailable: true,
      },
    ],
  },
];

type FeaturesType = {
  text: string;
  isAvailable: boolean;
};

export interface PricingDataType {
  title: string;
  description: string;
  top: {
    price: string;
    type: string;
  };
  features: FeaturesType[];
}

export default pricingData;
