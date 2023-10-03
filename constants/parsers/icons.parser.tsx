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

export const IconParser = (props: IconParserProps) => {
  let { iconKey, color, size = 22, weight = "fill" } = props;
  const { colorScheme } = useColorScheme();

  if (!color) {
    color = colorScheme === "dark" ? "white" : "black";
  }

  let iconElement = <></>;

  switch (iconKey) {
    case "arm-chair":
      iconElement = <Armchair color={color} size={size} weight={weight} />;
      break;

    case "campfire":
      iconElement = <Campfire color={color} size={size} weight={weight} />;
      break;

    case "baby":
      iconElement = <Baby color={color} size={size} weight={weight} />;
      break;

    case "bathtub":
      iconElement = <Bathtub color={color} size={size} weight={weight} />;
      break;

    case "boat":
      iconElement = <Boat color={color} size={size} weight={weight} />;
      break;

    case "car":
      iconElement = <Car color={color} size={size} weight={weight} />;
      break;

    case "code":
      iconElement = <Code color={color} size={size} weight={weight} />;
      break;

    case "crosshair":
      iconElement = <Crosshair color={color} size={size} weight={weight} />;
      break;

    case "detective":
      iconElement = <Detective color={color} size={size} weight={weight} />;
      break;

    case "envelope":
      iconElement = <Envelope color={color} size={size} weight={weight} />;
      break;

    case "exam":
      iconElement = <Exam color={color} size={size} weight={weight} />;
      break;

    case "file":
      iconElement = <File color={color} size={size} weight={weight} />;
      break;

    case "file-css":
      iconElement = <FileCss color={color} size={size} weight={weight} />;
      break;

    case "file-html":
      iconElement = <FileHtml color={color} size={size} weight={weight} />;
      break;

    case "file-js":
      iconElement = <FileJs color={color} size={size} weight={weight} />;
      break;

    case "file-jsx":
      iconElement = <FileJsx color={color} size={size} weight={weight} />;
      break;

    case "file-ts":
      iconElement = <FileTs color={color} size={size} weight={weight} />;
      break;

    case "file-tsx":
      iconElement = <FileTsx color={color} size={size} weight={weight} />;
      break;

    case "film-script":
      iconElement = <FilmScript color={color} size={size} weight={weight} />;
      break;

    case "film-strip":
      iconElement = <FilmStrip color={color} size={size} weight={weight} />;
      break;

    case "first-aid-kit":
      iconElement = <FirstAidKit color={color} size={size} weight={weight} />;
      break;

    case "game-controller":
      iconElement = (
        <GameController color={color} size={size} weight={weight} />
      );
      break;

    case "gear":
      iconElement = <Gear color={color} size={size} weight={weight} />;
      break;

    case "graduation-cap":
      iconElement = <GraduationCap color={color} size={size} weight={weight} />;
      break;

    case "headphones":
      iconElement = <Headphones color={color} size={size} weight={weight} />;
      break;

    case "house":
      iconElement = <House color={color} size={size} weight={weight} />;
      break;

    case "laptop":
      iconElement = <Laptop color={color} size={size} weight={weight} />;
      break;

    case "lifebuoy":
      iconElement = <Lifebuoy color={color} size={size} weight={weight} />;
      break;

    case "map-pin":
      iconElement = <MapPin color={color} size={size} weight={weight} />;
      break;

    case "megaphone":
      iconElement = <Megaphone color={color} size={size} weight={weight} />;
      break;

    case "microphone":
      iconElement = <Microphone color={color} size={size} weight={weight} />;
      break;

    case "newspaper":
      iconElement = <Newspaper color={color} size={size} weight={weight} />;
      break;

    case "package":
      iconElement = <Package color={color} size={size} weight={weight} />;
      break;

    case "paint-brush-household":
      iconElement = (
        <PaintBrushHousehold color={color} size={size} weight={weight} />
      );
      break;

    case "phone":
      iconElement = <Phone color={color} size={size} weight={weight} />;
      break;

    case "phone-call":
      iconElement = <PhoneCall color={color} size={size} weight={weight} />;
      break;

    case "planet":
      iconElement = <Planet color={color} size={size} weight={weight} />;
      break;

    case "shopping-cart":
      iconElement = <ShoppingCart color={color} size={size} weight={weight} />;
      break;

    case "shower":
      iconElement = <Shower color={color} size={size} weight={weight} />;
      break;

    case "strategy":
      iconElement = <Strategy color={color} size={size} weight={weight} />;
      break;

    case "target":
      iconElement = <Target color={color} size={size} weight={weight} />;
      break;

    case "tree":
      iconElement = <Tree color={color} size={size} weight={weight} />;
      break;

    case "users-three":
      iconElement = <UsersThree color={color} size={size} weight={weight} />;
      break;

    case "video-camera":
      iconElement = <VideoCamera color={color} size={size} weight={weight} />;
      break;

    case "baseball":
      iconElement = <Baseball color={color} size={size} weight={weight} />;
      break;

    case "basketball":
      iconElement = <Basketball color={color} size={size} weight={weight} />;
      break;

    case "bicycle":
      iconElement = <Bicycle color={color} size={size} weight={weight} />;
      break;

    case "football":
      iconElement = <Football color={color} size={size} weight={weight} />;
      break;

    case "fork-knife":
      iconElement = <ForkKnife color={color} size={size} weight={weight} />;
      break;

    case "heart":
      iconElement = <Heart color={color} size={size} weight={weight} />;
      break;

    case "horse":
      iconElement = <Horse color={color} size={size} weight={weight} />;
      break;

    case "medal":
      iconElement = <Medal color={color} size={size} weight={weight} />;
      break;

    case "mountains":
      iconElement = <Mountains color={color} size={size} weight={weight} />;
      break;

    case "soccer-ball":
      iconElement = <SoccerBall color={color} size={size} weight={weight} />;
      break;

    case "tennis-ball":
      iconElement = <TennisBall color={color} size={size} weight={weight} />;
      break;

    case "trophy":
      iconElement = <Trophy color={color} size={size} weight={weight} />;
      break;

    case "volleyball":
      iconElement = <Volleyball color={color} size={size} weight={weight} />;
      break;

    case "yin-yang":
      iconElement = <YinYang color={color} size={size} weight={weight} />;
      break;

    case "apple-logo":
      iconElement = <AppleLogo color={color} size={size} weight={weight} />;
      break;

    case "beer-bottle":
      iconElement = <BeerBottle color={color} size={size} weight={weight} />;
      break;

    case "brandy":
      iconElement = <Brandy color={color} size={size} weight={weight} />;
      break;

    case "coffee":
      iconElement = <Coffee color={color} size={size} weight={weight} />;
      break;

    case "cookie":
      iconElement = <Cookie color={color} size={size} weight={weight} />;
      break;

    case "cooking-pot":
      iconElement = <CookingPot color={color} size={size} weight={weight} />;
      break;

    case "egg":
      iconElement = <Egg color={color} size={size} weight={weight} />;
      break;

    case "fish":
      iconElement = <Fish color={color} size={size} weight={weight} />;
      break;

    case "hamburger":
      iconElement = <Hamburger color={color} size={size} weight={weight} />;
      break;

    case "martini":
      iconElement = <Martini color={color} size={size} weight={weight} />;
      break;

    case "pizza":
      iconElement = <Pizza color={color} size={size} weight={weight} />;
      break;

    case "popcorn":
      iconElement = <Popcorn color={color} size={size} weight={weight} />;
      break;

    case "wine":
      iconElement = <Wine color={color} size={size} weight={weight} />;
      break;

    case "check-square":
      iconElement = <CheckSquare color={color} size={size} weight={weight} />;
      break;

    case "alarm":
      iconElement = <Alarm color={color} size={size} weight={weight} />;
      break;

    case "alien":
      iconElement = <Alien color={color} size={size} weight={weight} />;
      break;

    case "at":
      iconElement = <At color={color} size={size} weight={weight} />;
      break;

    case "binoculars":
      iconElement = <Binoculars color={color} size={size} weight={weight} />;
      break;

    case "database":
      iconElement = <Database color={color} size={size} weight={weight} />;
      break;

    case "ear":
      iconElement = <Ear color={color} size={size} weight={weight} />;
      break;

    case "facebook-logo":
      iconElement = <FacebookLogo color={color} size={size} weight={weight} />;
      break;

    case "face-mask":
      iconElement = <FaceMask color={color} size={size} weight={weight} />;
      break;

    case "file-search":
      iconElement = <FileSearch color={color} size={size} weight={weight} />;
      break;

    case "globe":
      iconElement = <Globe color={color} size={size} weight={weight} />;
      break;

    case "globe-hemisphere-east":
      iconElement = (
        <GlobeHemisphereEast color={color} size={size} weight={weight} />
      );
      break;

    case "globe-hemisphere-west":
      iconElement = (
        <GlobeHemisphereWest color={color} size={size} weight={weight} />
      );
      break;

    case "globe-simple":
      iconElement = <GlobeSimple color={color} size={size} weight={weight} />;
      break;

    case "instagram-logo":
      iconElement = <InstagramLogo color={color} size={size} weight={weight} />;
      break;

    case "math-operations":
      iconElement = (
        <MathOperations color={color} size={size} weight={weight} />
      );
      break;

    case "rainbow":
      iconElement = <Rainbow color={color} size={size} weight={weight} />;
      break;

    case "rocket":
      iconElement = <Rocket color={color} size={size} weight={weight} />;
      break;

    case "rocket-launch":
      iconElement = <RocketLaunch color={color} size={size} weight={weight} />;
      break;

    case "smiley":
      iconElement = <Smiley color={color} size={size} weight={weight} />;
      break;

    case "smiley-nervous":
      iconElement = <SmileyNervous color={color} size={size} weight={weight} />;
      break;

    case "smiley-sad":
      iconElement = <SmileySad color={color} size={size} weight={weight} />;
      break;

    case "smiley-wink":
      iconElement = <SmileyWink color={color} size={size} weight={weight} />;
      break;

    case "tiktok-logo":
      iconElement = <TiktokLogo color={color} size={size} weight={weight} />;
      break;

    case "translate":
      iconElement = <Translate color={color} size={size} weight={weight} />;
      break;

    case "twitter-logo":
      iconElement = <TwitterLogo color={color} size={size} weight={weight} />;
      break;

    case "whatsapp-logo":
      iconElement = <WhatsappLogo color={color} size={size} weight={weight} />;
      break;

    case "youtube-logo":
      iconElement = <YoutubeLogo color={color} size={size} weight={weight} />;
      break;

    case "lightbulb":
      iconElement = <Lightbulb color={color} size={size} weight={weight} />;
      break;

    case "chart-line":
      iconElement = <ChartLine color={color} size={size} weight={weight} />;
      break;

    case "chart-line-up":
      iconElement = <ChartLineUp color={color} size={size} weight={weight} />;
      break;

    case "chart-pie":
      iconElement = <ChartPie color={color} size={size} weight={weight} />;
      break;

    case "coin":
      iconElement = <Coin color={color} size={size} weight={weight} />;
      break;

    case "coins":
      iconElement = <Coins color={color} size={size} weight={weight} />;
      break;

    case "coin-vertical":
      iconElement = <CoinVertical color={color} size={size} weight={weight} />;
      break;

    case "credit-card":
      iconElement = <CreditCard color={color} size={size} weight={weight} />;
      break;

    case "currency-btc":
      iconElement = <CurrencyBtc color={color} size={size} weight={weight} />;
      break;

    case "currency-cny":
      iconElement = <CurrencyCny color={color} size={size} weight={weight} />;
      break;

    case "currency-dollar":
      iconElement = (
        <CurrencyDollar color={color} size={size} weight={weight} />
      );
      break;

    case "currency-eth":
      iconElement = <CurrencyEth color={color} size={size} weight={weight} />;
      break;

    case "currency-gbp":
      iconElement = <CurrencyGbp color={color} size={size} weight={weight} />;
      break;

    case "presentation-chart":
      iconElement = (
        <PresentationChart color={color} size={size} weight={weight} />
      );
      break;

    case "receipt":
      iconElement = <Receipt color={color} size={size} weight={weight} />;
      break;

    case "vault":
      iconElement = <Vault color={color} size={size} weight={weight} />;
      break;

    default:
      iconElement = <CheckSquare color={color} size={size} weight={weight} />;
  }

  return <>{iconElement}</>;
};

type IconParserProps = {
  iconKey: string;
  color?: string;
  size?: number;
  weight?: "fill" | "regular" | "duotone";
};
