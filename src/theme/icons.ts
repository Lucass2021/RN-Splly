import ArrowDownComponent from "@/assets/icons/arrowDown";
import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import ArrowRightComponent from "@/assets/icons/arrowRight";
import BellComponent from "@/assets/icons/bell";
import EditPencilComponent from "@/assets/icons/edit-pencil";
import ExploreComponent from "@/assets/icons/explore";
import FavoriteComponent from "@/assets/icons/favorite";
import FavoriteFillComponent from "@/assets/icons/favorite-fill";
import FilterSearchComponent from "@/assets/icons/filterSearch";
import HelpComponent from "@/assets/icons/help";
import HistoryComponent from "@/assets/icons/history";
import HomeComponent from "@/assets/icons/home";
import LineComponent from "@/assets/icons/line";
import LocationPinComponent from "@/assets/icons/locationPin";
import LogoutComponent from "@/assets/icons/logout";
import PaymentComponent from "@/assets/icons/payment";
import PlusComponent from "@/assets/icons/plus";
import PrivacyComponent from "@/assets/icons/privacy";
import ProfileComponent from "@/assets/icons/profile";
import ScheduleComponent from "@/assets/icons/schedule";
import SettingsComponent from "@/assets/icons/settings";
import StarComponent from "@/assets/icons/star";
import TargetComponent from "@/assets/icons/target";
import TransactionsComponent from "@/assets/icons/transactions";

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
  editPencil: EditPencilComponent,
  history: HistoryComponent,
  payment: PaymentComponent,
  transactions: TransactionsComponent,
  settings: SettingsComponent,
  help: HelpComponent,
  privacy: PrivacyComponent,
  logout: LogoutComponent,
};

export type IconName = keyof typeof iconRegistry;
