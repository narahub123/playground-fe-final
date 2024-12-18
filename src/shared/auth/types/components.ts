import { AppDispatch } from "@app/store";

export interface AuthButtonItemType {
  text: string;
  path?: string;
  img?: string;
  reducer?: Parameters<AppDispatch>[0];
  colorTheme?: boolean;
}
