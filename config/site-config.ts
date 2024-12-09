export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "2x7";
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
      light: "#7bf1a8",
      dark: "#386641"  
    },
    icon: "whatsapp",
    description:
      "Para mais informações e agendamento de orçamentos, entre em contato.",
    color: "#128c7e",
    buttonTitle: "17 99213-7832",
    buttonLink:
      "https://api.whatsapp.com/send/?phone=5517992137832&text&type=phone_number&app_absent=0",
    buttonSecondaryText: "",
  },
  {
    layout: "2x7",
    type: "equipment",
    title: "Pintura interior em latex acrílico & restauração de grade com tinta esmalte.",
    video: "/joao.mp4",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Pintura de paredes, portões e janelas",
    icon: "paintbrush",
    color: "#090707",
    backgroundColor: {
      light: "#e6f3ff",
      dark: "#0d2847"
    },
  },
  {
    layout: "1x2",
    type: "project",
    title: "Fixação de quadros e prateleiras",
    icon: "drill",
    color: "#090707",
  },
  {
    layout: "1x2",
    type: "project",
    title: "Montagem de móveis",
    icon: "wrench",
    color: "#090707",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Instalação de suportes de TV e cortinas",
    icon: "ruler",
    color: "#090707",
  },
  {
    layout: "2x2",
    type: "project",
    title: "Troca de lâmpadas, tomadas, interruptores, fechaduras e dobradiças",
    icon: "lampceiling",
    color: "#090707",
  },
  {
    layout: "2x1",
    type: "project",
    title: "Instalação de chuveiros e torneiras",
    icon: "showerhead",
    color: "#090707",
  },
  {
    layout: "2x7",
    type: "equipment",
    title:
      "A lixadeira de parede agiliza o processo de lixamento e garante uma superfície mais uniforme. Pode ser utilizada em diferentes superfícies, como drywall, alvenaria, gesso e massa corrida em paredes e tetos.",
    video: "/mauro.mp4",
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
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
    buttonLink: "https://www.instagram.com/maurobrumato/?img_index=7",
    buttonSecondaryText: "352",
    color: "rgba(104, 60, 190, 1)",
    backgroundColor: {
      light: "#f7e3fc",
      dark: "#2e1437"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Substituição de papel de parede e pintura interior em latex acrílico.",
    images: [
      "pintura1.jpeg",
      "pintura3.jpeg",
      "pintura4.jpeg",
    ],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title:
      "Pintura em grade realizada com rolos e pincéis com tinta esmalte sintético a base d'água & calçada restaurada com tinta indicada para áreas externas.",
    images: ["portao-verde1.jpeg", "portao-verde2.jpeg"],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Pintura em portão com tinta automotiva acrílica indicada para ferragens & calçada restaurada com tinta específica para áreas externas.",
    images: ["portao1.jpeg", "portao2.jpeg"],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x7",
    type: "equipment",
    title: "Pintura interior em latex acrílico & piso restaurado com tinta específica para áreas externas.",
    video: "/celisa.mp4",
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Pintura em portão e janelas com tinta automotiva acrílica indicada para ferragens.",
    images: ["casa2-1.jpeg", "casa2-2.jpeg", "casa2-3.jpeg", "casa2-8.jpeg"],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Pintura interior em látex acrílico.",
    images: [ "casa2-4.jpeg", "casa2-5.jpeg", "casa2-6.jpeg"],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Montagem de móveis: Rack para TV.",
    images: [ "casa2-7.jpeg", "casa2-9.jpeg"],
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
  },
  {
    layout: "2x4",
    type: "equipment",
    title: "Pintura em portão com tinta automotiva acrílica indicada para ferragens.",
    image: "portao-marron.jpeg",
    backgroundColor: {
      light: "#f0f0f0",
      dark: "#1a1a1a"
    },
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