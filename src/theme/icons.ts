import ArrowDownComponent from "@/assets/icons/arrowDown";
import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import ArrowRightComponent from "@/assets/icons/arrowRight";
import BellComponent from "@/assets/icons/bell";
import ExploreComponent from "@/assets/icons/explore";
import FavoriteComponent from "@/assets/icons/favorite";
import FavoriteFillComponent from "@/assets/icons/favorite-fill";
import FilterSearchComponent from "@/assets/icons/filterSearch";
import HomeComponent from "@/assets/icons/home";
import LineComponent from "@/assets/icons/line";
import LocationPinComponent from "@/assets/icons/locationPin";
import PlusComponent from "@/assets/icons/plus";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import StarComponent from "@/assets/icons/star";
import TargetComponent from "@/assets/icons/target";

export const iconRegistry = {
  arrowLeft: ArrowLeftComponent,
  arrowRight: ArrowRightComponent,
  arrowDown: ArrowDownComponent,
  explore: ExploreComponent,
  home: HomeComponent,
  locationPin: LocationPinComponent,
  profile: ProfileComponent,
  schedule: ScheduleComponent,
  bell: BellComponent,
  filterSearch: FilterSearchComponent,
  favorite: FavoriteComponent,
  favoriteFill: FavoriteFillComponent,
  target: TargetComponent,
  plus: PlusComponent,
  start: StarComponent,
  line: LineComponent,
};

export type IconName = keyof typeof iconRegistry;
