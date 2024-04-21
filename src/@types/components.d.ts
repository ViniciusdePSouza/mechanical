import { TextInputProps } from "react-native";

export type ButtonType = "PRIMARY" | "SECONDARY";

export interface CustomButtonProps {
  title: string;
  onPressFunction: (language: string) => void;
  language?: string;
  variant: ButtonType;
}

export interface FormCustomInputProps extends TextInputProps {
  label: string;
}

export interface DetailsProps {
  workshop: WorkshopProps;
}

export interface ProfileDetailsViewProps {
  label: string;
  content: string;
}

export interface RatingProps {
  rating: number;
}
