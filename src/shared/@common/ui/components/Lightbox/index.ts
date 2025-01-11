import LightboxBottom from "./ui/Lightbox/LightboxBottom/LightboxBottom";
import LightboxCloseButton from "./ui/Lightbox/LightboxCloseButton/LightboxCloseButton";
import LightboxDisplayButton from "./ui/Lightbox/LightboxDisplayButton/LightboxDisplayButton";
import LightboxImages from "./ui/Lightbox/LightboxImages/LightboxImages";
import LightboxMain from "./ui/Lightbox/LightboxMain/LightboxMain";
import LightboxNextButton from "./ui/Lightbox/LightboxNextButton/LightboxNextButton";
import LIghtboxPrevButton from "./ui/Lightbox/LIghtboxPrevButton/LIghtboxPrevButton";
import LightboxSide from "./ui/Lightbox/LightboxSide/LightboxSide";
import LightboxTop from "./ui/Lightbox/LightboxTop/LightboxTop";
import LightboxWrapper from "./ui/Lightbox/LightboxWrapper/LightboxWrapper";

const Lightbox = Object.assign(LightboxWrapper, {
  Main: LightboxMain,
  Side: LightboxSide,
  Images: LightboxImages,
  Top: LightboxTop,
  Bottom: LightboxBottom,
  CloseButton: LightboxCloseButton,
  DisplayButton: LightboxDisplayButton,
  NextButton: LightboxNextButton,
  PrevButton: LIghtboxPrevButton,
});

export default Lightbox;
