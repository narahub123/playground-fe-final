import LightboxWrapper from "./ui/LightboxWrapper/LightboxWrapper";
import LightboxMain from "./ui/LightboxMain/LightboxMain";
import LightboxSide from "./ui/LightboxSide/LightboxSide";
import LightboxImages from "./ui/LightboxImages/LightboxImages";
import LightboxBottom from "./ui/LightboxBottom/LightboxBottom";

const Lightbox = Object.assign(LightboxWrapper, {
  Main: LightboxMain,
  Side: LightboxSide,
  Images: LightboxImages,
  Bottom: LightboxBottom,
});

export default Lightbox;
