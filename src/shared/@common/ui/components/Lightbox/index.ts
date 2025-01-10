import LightboxWrapper from "./ui/LightboxWrapper/LightboxWrapper";
import LightboxMain from "./ui/LightboxMain/LightboxMain";
import LightboxSide from "./ui/LightboxSide/LightboxSide";
import LightboxImages from "./ui/LightboxImages/LightboxImages";
import LightboxBottom from "./ui/LightboxBottom/LightboxBottom";
import LightboxCloseButton from "./ui/LightboxCloseButton/LightboxCloseButton";
import LightboxDisplayButton from "./ui/LightboxDisplayButton/LightboxDisplayButton";
import LightboxNextButton from "./ui/LightboxNextButton/LightboxNextButton";
import LIghtboxPrevButton from "./ui/LIghtboxPrevButton/LIghtboxPrevButton";

const Lightbox = Object.assign(LightboxWrapper, {
  Main: LightboxMain,
  Side: LightboxSide,
  Images: LightboxImages,
  Bottom: LightboxBottom,
  CloseButton: LightboxCloseButton,
  DisplayButton: LightboxDisplayButton,
  NextButton: LightboxNextButton,
  PrevButton: LIghtboxPrevButton,
});

export default Lightbox;
