import { DeviceInfoType, LocationType } from "@shared/@common/types";

interface LoginInputValueType {
  email?: string;
  phone?: string;
  userId?: string;
  password?: string;
  device?: DeviceInfoType;
  ip?: string;
  location?: LocationType;
}

export type { LoginInputValueType };
