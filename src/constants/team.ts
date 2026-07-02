import { IconNames } from "@/components/core/icon/types";

type TeamItem = {
  name: IconNames;
  x: number; // figma left (px)
  y: number; // figma top (px)
  rotate: number; // figma rotate (deg)
  w: number; // figma width (px) — used to scale SVG
};

export const TEAM_HOW_WE_WORK: TeamItem[] = [
  {
    name: "MarketingAndProduct",
    x: 200,
    y: 0,
    rotate: 0,
    w: 176.82,
  },
  { name: "Protocol", x: 0, y: 0, rotate: 0, w: 220.81 },
  { name: "ProductionTeam", x: 0, y: 0, rotate: 0, w: 220.81 },
  {
    name: "CommunityManagement",
    x: 130.66,
    y: 381.07,
    rotate: -43.95,
    w: 199.44,
  },
  { name: "EventManagement", x: 565.18, y: 476.82, rotate: -66.86, w: 138.99 },
  { name: "Finance", x: 317.66, y: 513.86, rotate: -176.41, w: 220.81 },
  { name: "Engineering", x: 369.15, y: 475.02, rotate: 0, w: 177 },
  { name: "SalesAndGrowth", x: 626.61, y: 454.24, rotate: -152.85, w: 220.81 },
  { name: "PrTeam", x: 565.68, y: 407.57, rotate: 0, w: 117 },
  { name: "ContentTeam", x: 716, y: 432, rotate: 10.63, w: 209.85 },
  { name: "AttendeeExperience", x: 872.33, y: 527.41, rotate: 0, w: 187.29 },
  {
    name: "VendorsAndPartners",
    x: 785.48,
    y: 210.45,
    rotate: -43.95,
    w: 199.44,
  },
  { name: "HrTeam", x: 1053, y: 440.69, rotate: 0, w: 121 },
  {
    name: "BrandingAndFesign",
    x: 1075.68,
    y: 518.57,
    rotate: 14.32,
    w: 147.07,
  },
  { name: "SocialMedia", x: 1076.49, y: 630.4, rotate: 0, w: 193 },
  { name: "LegalTeam", x: 1066.68, y: 183.57, rotate: 22.98, w: 209.85 },
  { name: "MediaProduction", x: 1076.68, y: 324.57, rotate: 0, w: 187.29 },
];
