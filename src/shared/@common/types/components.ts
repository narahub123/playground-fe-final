interface DropdownItemType {
  text: string;
  value: string | number;
}

type SizeBasic = "xs" | "sm" | "md" | "lg" | "xl";

type SizeBasicWithFull = SizeBasic | "full";

type SizeExtended = SizeBasic | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

type ColorBasic =
  | "red"
  | "cornflowerblue"
  | "green"
  | "purple"
  | "yellow"
  | "orange"
  | "gray"
  | "black"
  | "white"
  | "colorTheme";

type ColorBasicWithInherit = ColorBasic | "inherit";

type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export type {
  DropdownItemType,
  ColorBasic,
  ColorBasicWithInherit,
  SizeBasic,
  SizeBasicWithFull,
  SizeExtended,
  BorderStyle,
};
