export type CommunityPhoto = {
  id: string;
  src: string;
  alt: string;
  aspectRatio: number;
  width: number;
  height: number;
};

export type CommunityInitiative = {
  title: string;
  description: string;
  photo: CommunityPhoto;
  location?: string;
};

export const communityInitiatives: CommunityInitiative[] = [
  {
    title: "Community engagement",
    description:
      "Building constructive relationships with communities surrounding our operations and understanding local priorities.",
    photo: {
      id: "community-gathering",
      src: "/images/community/community-gathering.jpg",
      alt: "Community members gathered outdoors, waving in welcome",
      aspectRatio: 4 / 3,
      width: 1200,
      height: 900,
    },
    location: "Tanzania",
  },
  {
    title: "Education and skills development",
    description:
      "Supporting learning environments, school engagement and practical skills pathways connected to local project areas.",
    photo: {
      id: "education-support",
      src: "/images/community/community-education-support.png",
      alt: "Students at desks with community supporters during a school initiative",
      aspectRatio: 4 / 3,
      width: 1280,
      height: 960,
    },
    location: "Tanzania",
  },
  {
    title: "Local partnerships",
    description:
      "Working constructively with community leaders, local organizations and established partners on shared initiatives.",
    photo: {
      id: "partnership-distribution",
      src: "/images/community/community-partnership-distribution.jpg",
      alt: "Community partners distributing essential supplies to local residents",
      aspectRatio: 4 / 3,
      width: 1200,
      height: 900,
    },
    location: "Tanzania",
  },
  {
    title: "Community infrastructure",
    description:
      "Contributing to shared infrastructure and access improvements that respond to locally identified priorities.",
    photo: {
      id: "water-access",
      src: "/images/community/community-water-access.jpg",
      alt: "Children using a communal water station with multiple taps",
      aspectRatio: 5 / 4,
      width: 1000,
      height: 800,
    },
    location: "Tanzania",
  },
  {
    title: "Local partnerships",
    description:
      "Working constructively with community leaders, local organizations and established partners on shared initiatives.",
    photo: {
      id: "school-partnership",
      src: "/images/community/community-school-partnership.jpg",
      alt: "Geofields team members standing with schoolchildren holding educational materials",
      aspectRatio: 4 / 3,
      width: 1200,
      height: 900,
    },
    location: "Tanzania",
  },
  {
    title: "Environmental responsibility",
    description:
      "Integrating environmental awareness and responsible practices into community-facing engagement around project areas.",
    photo: {
      id: "village-engagement",
      src: "/images/community/community-village-engagement.jpg",
      alt: "Field professional meeting with residents in a rural village setting",
      aspectRatio: 4 / 3,
      width: 1200,
      height: 900,
    },
    location: "Tanzania",
  },
  {
    title: "Community engagement",
    description:
      "Facilitating open dialogue, consultation and collaborative planning with communities surrounding operations.",
    photo: {
      id: "planning-session",
      src: "/images/community/community-planning-session.jpg",
      alt: "Community members reviewing a site plan together during an outdoor consultation",
      aspectRatio: 16 / 10,
      width: 1280,
      height: 800,
    },
    location: "Tanzania",
  },
  {
    title: "Community consultation",
    description:
      "Creating space for respectful, structured conversations that help align project activity with local expectations.",
    photo: {
      id: "consultation",
      src: "/images/community/community-consultation.jpg",
      alt: "Geofields representatives meeting with community members in a shaded outdoor setting",
      aspectRatio: 16 / 10,
      width: 1280,
      height: 800,
    },
    location: "Tanzania",
  },
  {
    title: "Local impact",
    description:
      "Engaging respectfully with communities around operational sites to understand needs and contribute where appropriate.",
    photo: {
      id: "site-engagement",
      src: "/images/community/community-site-engagement.png",
      alt: "Geofields professional in safety gear speaking with a community member at an operational site",
      aspectRatio: 16 / 10,
      width: 1280,
      height: 800,
    },
    location: "Tanzania",
  },
];
