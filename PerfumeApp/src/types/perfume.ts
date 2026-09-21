export interface Perfume {
  id: string;
  perfumeName: string;
  price: number;
  perfumeDescription: string;
  gender: boolean;
  image: string;
  company: string;
}
export interface CategoryItemProps {
  name: string;
  count: number;
  isSelected?: boolean;
  onPress?: () => void;
}
