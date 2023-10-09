import { useColorScheme } from "nativewind";
//Activities
import {
  Campfire,
  Armchair,
  Baby,
  Bathtub,
  Boat,
  Car,
  Code,
  Crosshair,
  Detective,
  Envelope,
  Exam,
  File,
  FileCss,
  FileHtml,
  FileJs,
  FileJsx,
  FileTs,
  FileTsx,
  FilmScript,
  FilmStrip,
  FirstAidKit,
  GameController,
  Gear,
  GraduationCap,
  Headphones,
  House,
  Laptop,
  Lifebuoy,
  MapPin,
  Megaphone,
  Microphone,
  Newspaper,
  Package,
  PaintBrushHousehold,
  Phone,
  PhoneCall,
  Planet,
  ShoppingCart,
  Shower,
  Strategy,
  Target,
  Tree,
  UsersThree,
  VideoCamera,
} from "phosphor-react-native";
//Health
import {
  Baseball,
  Basketball,
  Bicycle,
  Football,
  ForkKnife,
  Heart,
  Horse,
  Medal,
  Mountains,
  SoccerBall,
  TennisBall,
  Trophy,
  Volleyball,
  YinYang,
} from "phosphor-react-native";
//Food
import {
  AppleLogo,
  BeerBottle,
  Brandy,
  Coffee,
  Cookie,
  CookingPot,
  Egg,
  Fish,
  Hamburger,
  Martini,
  Pizza,
  Popcorn,
  Wine,
} from "phosphor-react-native";
//General
import {
  CheckSquare,
  Alarm,
  Alien,
  At,
  Binoculars,
  Database,
  Ear,
  FacebookLogo,
  FaceMask,
  FileSearch,
  Globe,
  GlobeHemisphereEast,
  GlobeHemisphereWest,
  GlobeSimple,
  InstagramLogo,
  MathOperations,
  Rainbow,
  Rocket,
  RocketLaunch,
  Smiley,
  SmileyNervous,
  SmileySad,
  SmileyWink,
  TiktokLogo,
  Translate,
  TwitterLogo,
  WhatsappLogo,
  YoutubeLogo,
  Lightbulb,
} from "phosphor-react-native";
//Financial
import {
  ChartLine,
  ChartLineUp,
  ChartPie,
  Coin,
  Coins,
  CoinVertical,
  CreditCard,
  CurrencyBtc,
  CurrencyCny,
  CurrencyDollar,
  CurrencyEth,
  CurrencyGbp,
  PresentationChart,
  Receipt,
  Vault,
} from "phosphor-react-native";

interface Icon {
  key: string;
  name: string;
  component: React.ReactElement;
}

export const IconParser = (props: IconParserProps) => {
  let { iconKey, color, size = 22, weight = "fill", returnAll } = props;
  const { colorScheme } = useColorScheme();

  if (!color) {
    color = colorScheme === "dark" ? "white" : "black";
  }

  const icons = [
    {
      group: "Activities",
      icons: [
        {
          key: "arm-chair",
          name: "Arm Chair",
          component: <Armchair color={color} size={size} weight={weight} />,
        },
        {
          key: "campfire",
          name: "Campfire",
          component: <Campfire color={color} size={size} weight={weight} />,
        },
        {
          key: "baby",
          name: "Baby",
          component: <Baby color={color} size={size} weight={weight} />,
        },
        {
          key: "bathtub",
          name: "Bathtub",
          component: <Bathtub color={color} size={size} weight={weight} />,
        },
        {
          key: "boat",
          name: "Boat",
          component: <Boat color={color} size={size} weight={weight} />,
        },
        {
          key: "car",
          name: "Car",
          component: <Car color={color} size={size} weight={weight} />,
        },
        {
          key: "code",
          name: "Code",
          component: <Code color={color} size={size} weight={weight} />,
        },
        {
          key: "crosshair",
          name: "Crosshair",
          component: <Crosshair color={color} size={size} weight={weight} />,
        },
        {
          key: "detective",
          name: "Detective",
          component: <Detective color={color} size={size} weight={weight} />,
        },
        {
          key: "envelope",
          name: "Envelope",
          component: <Envelope color={color} size={size} weight={weight} />,
        },
        {
          key: "exam",
          name: "Exam",
          component: <Exam color={color} size={size} weight={weight} />,
        },
        {
          key: "file",
          name: "File",
          component: <File color={color} size={size} weight={weight} />,
        },
        {
          key: "file-css",
          name: "File CSS",
          component: <FileCss color={color} size={size} weight={weight} />,
        },
        {
          key: "file-html",
          name: "File HTML",
          component: <FileHtml color={color} size={size} weight={weight} />,
        },
        {
          key: "file-js",
          name: "File JS",
          component: <FileJs color={color} size={size} weight={weight} />,
        },
        {
          key: "file-jsx",
          name: "File JSX",
          component: <FileJsx color={color} size={size} weight={weight} />,
        },
        {
          key: "file-ts",
          name: "File TS",
          component: <FileTs color={color} size={size} weight={weight} />,
        },
        {
          key: "file-tsx",
          name: "File TSX",
          component: <FileTsx color={color} size={size} weight={weight} />,
        },
        {
          key: "film-script",
          name: "Film Script",
          component: <FilmScript color={color} size={size} weight={weight} />,
        },
        {
          key: "film-strip",
          name: "Film Strip",
          component: <FilmStrip color={color} size={size} weight={weight} />,
        },
        {
          key: "first-aid-kit",
          name: "First Aid Kit",
          component: <FirstAidKit color={color} size={size} weight={weight} />,
        },
        {
          key: "game-controller",
          name: "Game Controller",
          component: (
            <GameController color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "gear",
          name: "Gear",
          component: <Gear color={color} size={size} weight={weight} />,
        },
        {
          key: "graduation-cap",
          name: "Graduation Cap",
          component: (
            <GraduationCap color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "headphones",
          name: "Headphones",
          component: <Headphones color={color} size={size} weight={weight} />,
        },
        {
          key: "house",
          name: "House",
          component: <House color={color} size={size} weight={weight} />,
        },
        {
          key: "laptop",
          name: "Laptop",
          component: <Laptop color={color} size={size} weight={weight} />,
        },
        {
          key: "lifebuoy",
          name: "Lifebuoy",
          component: <Lifebuoy color={color} size={size} weight={weight} />,
        },
        {
          key: "map-pin",
          name: "Map Pin",
          component: <MapPin color={color} size={size} weight={weight} />,
        },
        {
          key: "megaphone",
          name: "Megaphone",
          component: <Megaphone color={color} size={size} weight={weight} />,
        },
        {
          key: "microphone",
          name: "Microphone",
          component: <Microphone color={color} size={size} weight={weight} />,
        },
        {
          key: "newspaper",
          name: "Newspaper",
          component: <Newspaper color={color} size={size} weight={weight} />,
        },
        {
          key: "package",
          name: "Package",
          component: <Package color={color} size={size} weight={weight} />,
        },
        {
          key: "paint-brush-household",
          name: "Paint Brush Household",
          component: (
            <PaintBrushHousehold color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "phone",
          name: "Phone",
          component: <Phone color={color} size={size} weight={weight} />,
        },
        {
          key: "phone-call",
          name: "Phone Call",
          component: <PhoneCall color={color} size={size} weight={weight} />,
        },
        {
          key: "planet",
          name: "Planet",
          component: <Planet color={color} size={size} weight={weight} />,
        },
        {
          key: "shopping-cart",
          name: "Shopping Cart",
          component: <ShoppingCart color={color} size={size} weight={weight} />,
        },
        {
          key: "shower",
          name: "Shower",
          component: <Shower color={color} size={size} weight={weight} />,
        },
        {
          key: "strategy",
          name: "Strategy",
          component: <Strategy color={color} size={size} weight={weight} />,
        },
        {
          key: "target",
          name: "Target",
          component: <Target color={color} size={size} weight={weight} />,
        },
        {
          key: "tree",
          name: "Tree",
          component: <Tree color={color} size={size} weight={weight} />,
        },
        {
          key: "users-three",
          name: "Users Three",
          component: <UsersThree color={color} size={size} weight={weight} />,
        },
        {
          key: "video-camera",
          name: "Video Camera",
          component: <VideoCamera color={color} size={size} weight={weight} />,
        },
      ],
    },
    {
      group: "Health",
      icons: [
        {
          key: "baseball",
          name: "Baseball",
          component: <Baseball color={color} size={size} weight={weight} />,
        },
        {
          key: "basketball",
          name: "Basketball",
          component: <Basketball color={color} size={size} weight={weight} />,
        },
        {
          key: "bicycle",
          name: "Bicycle",
          component: <Bicycle color={color} size={size} weight={weight} />,
        },
        {
          key: "football",
          name: "Football",
          component: <Football color={color} size={size} weight={weight} />,
        },
        {
          key: "fork-knife",
          name: "Fork Knife",
          component: <ForkKnife color={color} size={size} weight={weight} />,
        },
        {
          key: "heart",
          name: "Heart",
          component: <Heart color={color} size={size} weight={weight} />,
        },
        {
          key: "horse",
          name: "Horse",
          component: <Horse color={color} size={size} weight={weight} />,
        },
        {
          key: "medal",
          name: "Medal",
          component: <Medal color={color} size={size} weight={weight} />,
        },
        {
          key: "mountains",
          name: "Mountains",
          component: <Mountains color={color} size={size} weight={weight} />,
        },
        {
          key: "soccer-ball",
          name: "Soccer Ball",
          component: <SoccerBall color={color} size={size} weight={weight} />,
        },
        {
          key: "tennis-ball",
          name: "Tennis Ball",
          component: <TennisBall color={color} size={size} weight={weight} />,
        },
        {
          key: "trophy",
          name: "Trophy",
          component: <Trophy color={color} size={size} weight={weight} />,
        },
        {
          key: "volleyball",
          name: "Volleyball",
          component: <Volleyball color={color} size={size} weight={weight} />,
        },
        {
          key: "yin-yang",
          name: "Yin Yang",
          component: <YinYang color={color} size={size} weight={weight} />,
        },
      ],
    },
    {
      group: "Food",
      icons: [
        {
          key: "apple-logo",
          name: "Apple Logo",
          component: <AppleLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "beer-bottle",
          name: "Beer Bottle",
          component: <BeerBottle color={color} size={size} weight={weight} />,
        },
        {
          key: "brandy",
          name: "Brandy",
          component: <Brandy color={color} size={size} weight={weight} />,
        },
        {
          key: "coffee",
          name: "Coffee",
          component: <Coffee color={color} size={size} weight={weight} />,
        },
        {
          key: "cookie",
          name: "Cookie",
          component: <Cookie color={color} size={size} weight={weight} />,
        },
        {
          key: "cooking-pot",
          name: "Cooking Pot",
          component: <CookingPot color={color} size={size} weight={weight} />,
        },
        {
          key: "egg",
          name: "Egg",
          component: <Egg color={color} size={size} weight={weight} />,
        },
        {
          key: "fish",
          name: "Fish",
          component: <Fish color={color} size={size} weight={weight} />,
        },
        {
          key: "hamburger",
          name: "Hamburger",
          component: <Hamburger color={color} size={size} weight={weight} />,
        },
        {
          key: "martini",
          name: "Martini",
          component: <Martini color={color} size={size} weight={weight} />,
        },
        {
          key: "pizza",
          name: "Pizza",
          component: <Pizza color={color} size={size} weight={weight} />,
        },
        {
          key: "popcorn",
          name: "Popcorn",
          component: <Popcorn color={color} size={size} weight={weight} />,
        },
        {
          key: "wine",
          name: "Wine",
          component: <Wine color={color} size={size} weight={weight} />,
        },
      ],
    },
    {
      group: "General",
      icons: [
        {
          key: "check-square",
          name: "Check Square",
          component: <CheckSquare color={color} size={size} weight={weight} />,
        },
        {
          key: "alarm",
          name: "Alarm",
          component: <Alarm color={color} size={size} weight={weight} />,
        },
        {
          key: "alien",
          name: "Alien",
          component: <Alien color={color} size={size} weight={weight} />,
        },
        {
          key: "at",
          name: "At",
          component: <At color={color} size={size} weight={weight} />,
        },
        {
          key: "binoculars",
          name: "Binoculars",
          component: <Binoculars color={color} size={size} weight={weight} />,
        },
        {
          key: "database",
          name: "Database",
          component: <Database color={color} size={size} weight={weight} />,
        },
        {
          key: "ear",
          name: "Ear",
          component: <Ear color={color} size={size} weight={weight} />,
        },
        {
          key: "facebook-logo",
          name: "Facebook Logo",
          component: <FacebookLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "face-mask",
          name: "Face Mask",
          component: <FaceMask color={color} size={size} weight={weight} />,
        },
        {
          key: "file-search",
          name: "File Search",
          component: <FileSearch color={color} size={size} weight={weight} />,
        },
        {
          key: "globe",
          name: "Globe",
          component: <Globe color={color} size={size} weight={weight} />,
        },
        {
          key: "globe-hemisphere-east",
          name: "Globe Hemisphere East",
          component: (
            <GlobeHemisphereEast color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "globe-hemisphere-west",
          name: "Globe Hemisphere West",
          component: (
            <GlobeHemisphereWest color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "globe-simple",
          name: "Globe Simple",
          component: <GlobeSimple color={color} size={size} weight={weight} />,
        },
        {
          key: "instagram-logo",
          name: "Instagram Logo",
          component: (
            <InstagramLogo color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "math-operations",
          name: "Math Operations",
          component: (
            <MathOperations color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "rainbow",
          name: "Rainbow",
          component: <Rainbow color={color} size={size} weight={weight} />,
        },
        {
          key: "rocket",
          name: "Rocket",
          component: <Rocket color={color} size={size} weight={weight} />,
        },
        {
          key: "rocket-launch",
          name: "Rocket Launch",
          component: <RocketLaunch color={color} size={size} weight={weight} />,
        },
        {
          key: "smiley",
          name: "Smiley",
          component: <Smiley color={color} size={size} weight={weight} />,
        },
        {
          key: "smiley-nervous",
          name: "Smiley Nervous",
          component: (
            <SmileyNervous color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "smiley-sad",
          name: "Smiley Sad",
          component: <SmileySad color={color} size={size} weight={weight} />,
        },
        {
          key: "smiley-wink",
          name: "Smiley Wink",
          component: <SmileyWink color={color} size={size} weight={weight} />,
        },
        {
          key: "tiktok-logo",
          name: "Tiktok Logo",
          component: <TiktokLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "translate",
          name: "Translate",
          component: <Translate color={color} size={size} weight={weight} />,
        },
        {
          key: "twitter-logo",
          name: "Twitter Logo",
          component: <TwitterLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "whatsapp-logo",
          name: "Whatsapp Logo",
          component: <WhatsappLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "youtube-logo",
          name: "Youtube Logo",
          component: <YoutubeLogo color={color} size={size} weight={weight} />,
        },
        {
          key: "lightbulb",
          name: "Lightbulb",
          component: <Lightbulb color={color} size={size} weight={weight} />,
        },
      ],
    },
    {
      group: "Financial",
      icons: [
        {
          key: "chart-line",
          name: "Chart Line",
          component: <ChartLine color={color} size={size} weight={weight} />,
        },
        {
          key: "chart-line-up",
          name: "Chart Line Up",
          component: <ChartLineUp color={color} size={size} weight={weight} />,
        },
        {
          key: "chart-pie",
          name: "Chart Pie",
          component: <ChartPie color={color} size={size} weight={weight} />,
        },
        {
          key: "coin",
          name: "Coin",
          component: <Coin color={color} size={size} weight={weight} />,
        },
        {
          key: "coins",
          name: "Coins",
          component: <Coins color={color} size={size} weight={weight} />,
        },
        {
          key: "coin-vertical",
          name: "Coin Vertical",
          component: <CoinVertical color={color} size={size} weight={weight} />,
        },
        {
          key: "credit-card",
          name: "Credit Card",
          component: <CreditCard color={color} size={size} weight={weight} />,
        },
        {
          key: "currency-btc",
          name: "Currency BTC",
          component: <CurrencyBtc color={color} size={size} weight={weight} />,
        },
        {
          key: "currency-cny",
          name: "Currency CNY",
          component: <CurrencyCny color={color} size={size} weight={weight} />,
        },
        {
          key: "currency-dollar",
          name: "Currency Dollar",
          component: (
            <CurrencyDollar color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "currency-eth",
          name: "Currency ETH",
          component: <CurrencyEth color={color} size={size} weight={weight} />,
        },
        {
          key: "currency-gbp",
          name: "Currency GBP",
          component: <CurrencyGbp color={color} size={size} weight={weight} />,
        },
        {
          key: "presentation-chart",
          name: "Presentation Chart",
          component: (
            <PresentationChart color={color} size={size} weight={weight} />
          ),
        },
        {
          key: "receipt",
          name: "Receipt",
          component: <Receipt color={color} size={size} weight={weight} />,
        },
        {
          key: "vault",
          name: "Vault",
          component: <Vault color={color} size={size} weight={weight} />,
        },
      ],
    },
  ];

  if (returnAll) {
    return icons;
  }

  const findIconByKey = (
    icons: { group: string; icons: Icon[] }[],
    key?: string
  ): Icon | null => {
    for (const group of icons) {
      const icon = group.icons.find((icon: Icon) => icon.key === key);
      if (icon) {
        return icon;
      }
    }
    //Default
    return {
      key: "check-square",
      name: "Check Square",
      component: <CheckSquare color={color} size={size} weight={weight} />,
    };
  };

  let iconElement = findIconByKey(icons, iconKey)?.component;

  return <>{iconElement}</>;
};

type IconParserProps = {
  iconKey?: string;
  color?: string;
  size?: number;
  weight?: "fill" | "regular" | "duotone";
  returnAll?: boolean;
};
