import LightboxWrapper from "./ui/LightboxWrapper/LightboxWrapper";
import LightboxMain from "./ui/LightboxMain/LightboxMain";
import LightboxSide from "./ui/LightboxSide/LightboxSide";
import LightboxImages from "./ui/LightboxImages/LightboxImages";

const Lightbox = Object.assign(LightboxWrapper, {
  Main: LightboxMain,
  Side: LightboxSide,
  Images: LightboxImages,
});

export default Lightbox;
