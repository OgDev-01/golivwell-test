import { TeamCardProps } from "@/components/Shared/TeamCard";

export const REVIEWS = [
  {
    review:
      "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
    rating: 8,
    reviewer: {
      name: "John Doe",
      avatar: "https://avatars.githubusercontent.com/u/35623",
      occupation: "Founder at Example Startup",
    },
  },
  {
    review:
      "“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job! ",
    rating: 4,
    reviewer: {
      name: "Jane Doe",
      avatar: "https://avatars.githubusercontent.com/u/35623",
      occupation: "Designer at Example Agency",
    },
  },
  {
    review:
      "Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything",
    rating: 9,
    reviewer: {
      name: "Alice Doe",
      avatar: "https://avatars.githubusercontent.com/u/35623",
      occupation: "Freelancer",
    },
  },
];

export const PRICING = [
  {
    title: "Free",
    price: 0,
    features: [
      "10+ Landing Page Templates",
      "Basic Components",
      "Community Support",
    ],
    excerpt: "Best for Small Teams or Individuals.",
  },
  {
    title: "Pro",
    price: 29,
    features: [
      "50+ Landing Page Templates",
      "Advanced Components",
      "Priority Support",
    ],
    excerpt: "Ideal for Growing Companies.",
  },
  {
    title: "Enterprise",
    price: 99,
    features: [
      "100+ Landing Page Templates",
      "All Components",
      "Dedicated Support",
    ],
    excerpt: "Ultimate for Enterprise Solutions.",
  },
];

export const TEAM_MEMBERS: TeamCardProps[] = [
  {
    name: "John Doe",
    avatar: "https://avatars.githubusercontent.com/u/35623",
    role: "Founder",
    socials: [
      { name: "twitter", url: "#" },
      { name: "dribbble", url: "#" },
      { name: "instagram", url: "#" },
    ],
  },
  {
    name: "Alice Doe",
    avatar: "https://avatars.githubusercontent.com/u/35623",
    role: "Developer",
    socials: [
      { name: "twitter", url: "#" },
      { name: "dribbble", url: "#" },
      { name: "instagram", url: "#" },
    ],
  },
  {
    name: "Bob Doe",
    avatar: "https://avatars.githubusercontent.com/u/35623",
    role: "Marketer",
    socials: [
      { name: "twitter", url: "#" },
      { name: "dribbble", url: "#" },
      { name: "instagram", url: "#" },
    ],
  },
];
