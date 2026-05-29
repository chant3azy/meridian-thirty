export const SITE = {
  name: "MeredianThirty",
  shortName: "M30",
  tagline: "Strategy. Transformation. Impact.",
  email: "contact@meredianthirty.com",
  offices: ["London", "New York", "Singapore"] as const,
} as const

export const NAV_ITEMS = [
  { label: "Our Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
] as const

export const CLIENTS = [
  "J.P. Morgan",
  "Standard Chartered",
  "nationalgrid",
  "PepsiCo",
  "Veloce Partners",
  "Atkins",
] as const

export const CAPABILITIES = [
  {
    title: "Strategy",
    description:
      "Define winning strategies and create clarity for the future.",
  },
  {
    title: "Transformation",
    description:
      "Design and deliver transformations that unlock value at scale.",
  },
  {
    title: "Performance",
    description:
      "Improve performance through data, insight, and operational excellence.",
  },
  {
    title: "Organisation",
    description:
      "Build organisations and capabilities that empower and endure.",
  },
] as const

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=85"

export const INSIGHT_IMAGE =
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=85"
