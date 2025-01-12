interface LightboxContextType {
  images: string[];
  curImageIndex: number;
  moveNextImage: () => void;
  movePrevImage: () => void;
  onClose: () => void;
}

export type { LightboxContextType };
