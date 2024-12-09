export type GridItemLayout = "1x2" | "1x6" | "2x1" | "2x2" | "2x4" | "2x7";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  description?: string;
  color?: string;
  backgroundColor?: {
    light: string;
    dark: string;
  };
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  price?: string;
  oldPrice?: string;
  stars?: number;
  equipments?: EqiupmentItem[];
  image?: string;
  images?: string[];
  video?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "WhatsApp",
    backgroundColor: {
      light: "#dcf8c6",
      dark: "#075e54",
    },
    icon: "whatsapp",
    description: "Quer conhecer nossas lindas semijoias? Entre em contato!",
    color: "#25d366",
    buttonTitle: "17 991904-8732",
    buttonLink:
      "https://api.whatsapp.com/send?phone=5517991904873&text=Oii,%20gostaria%20de%20saber%20mais%20sobre%20as%20semijoias.",
    buttonSecondaryText: "",
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Nossa nova coleção está cheia de braceletes e anéis incríveis.",
    image: "2.jpg",
  },
  {
    layout: "1x6",
    type: "equipment",
    title: " Explore nossas semijoias e encontre seu novo favorito!",
    video: "/1.mp4",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Joias em Prata 925",
    icon: "gem",
    color: "#090707",
    backgroundColor: {
      light: "#e6f3ff",
      dark: "#0d2847",
    },
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    description:
      "Acompanhe meu trabalho no Instagram para ver mais projetos e atualizações.",
    buttonTitle: "Seguidores",
    buttonLink: "https://www.instagram.com/usetalatay/",
    buttonSecondaryText: "909",
    color: "rgba(104, 60, 190, 1)",
    backgroundColor: {
      light: "#f7e3fc",
      dark: "#2e1437",
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Corações que encantam e completam qualquer look ❤️✨",
      image: "1.jpg",
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Peças leves, sofisticadas e feitas para brilhar junto com você.",
      image: "3.jpg",
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Um dos mix mais bonitos que eu já montei aqui.🥰",
    images: ["4.jpg", "5.jpg"],
  },
];

export const siteConfig = {
  creator: "TALATAY",
  title: "Semijoias",
  bio: "Evidencie a sua elegância com nossas semijoias ✨",
  location: "São José Rio Preto - SP",
  locationLink:
    "https://www.google.com/maps/place/São+José+do+Rio+Preto+-+SP/data=!4m2!3m1!1s0x94bc52ce6910005f:0xb39d5c0e3b8c5675?sa=X&ved=1t:242&ictx=111",
  email: "maurobrumato@gmail.com",
  items: GridItems,
} as const;
