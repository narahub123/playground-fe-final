interface LightboxContextType {
  images: string[];
  curImageIndex: number;
  moveNextImage: () => void;
  movePrevImage: () => void;
  onClose: () => void;
  isLightboxPostOpen?: boolean;
  onOpenLightboxPost?: () => void;
  onCloseLightboxPost?: () => void;
}

export type { LightboxContextType };
