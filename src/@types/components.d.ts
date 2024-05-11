import { TextInputProps } from "react-native";
import { TextInputMaskOptionProp, TextInputMaskTypeProp  } from "react-native-masked-text";

export type ButtonType = "PRIMARY" | "SECONDARY";

export interface CustomButtonProps {
  title: string;
  onPressFunction: (language: string) => void;
  language?: string;
  variant: ButtonType;
}

export interface FormCustomInputProps extends TextInputProps {
  label: string;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp 
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

export interface HeaderProps {
  title: 'details' | 'add'
}
