export type SearchPlayerFormData = {
  name?: string;
};

export interface IndicateFriendPostBody {
  Indication: IndicationFormData
  sender: string
  copies: any[]
}