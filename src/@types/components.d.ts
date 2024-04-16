export type ButtonType = "PRIMARY" | "SECONDARY";

export interface CustomButtonProps {
  title: string;
  onPressFunction: (language: string) => void;
  language?: string;
  variant: ButtonType;
}