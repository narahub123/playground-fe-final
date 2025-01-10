import LightboxWrapper from "./ui/LightboxWrapper/LightboxWrapper";
import LightboxMain from "./ui/LightboxMain/LightboxMain";
import LightboxSide from "./ui/LightboxSide/LightboxSide";

const Lightbox = Object.assign(LightboxWrapper, {
  Main: LightboxMain,
  Side: LightboxSide,
});

export default Lightbox;
