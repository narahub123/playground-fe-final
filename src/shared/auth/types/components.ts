import { AppDispatch } from "@app/store";
import { OauthType } from "./pages";

export interface AuthButtonItemType {
  text: string;
  type?: OauthType;
  path?: string;
  img?: string;
  reducer?: Parameters<AppDispatch>[0];
  colorTheme?: boolean;
}
