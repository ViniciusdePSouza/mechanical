export type SearchPlayerFormData = {
  name?: string;
};

export interface IndicateFriendPostBody {
  Indicacao: IndicateFriendProps;
  Remetente: string;
  Copias: any[];
}

export type IndicateFriendFormData = {
  friendsName: string;
  friendsEmail: string;
  friendsPhoneNumber: string;
  associateName: string;
  associateEmail: string;
  associateCpf: string;
  associatePhoneNumber: string;
  vehiclePlate: string;
};

export interface IndicateFriendProps {
  CodigoAssociacao: string;
  DataCriacao: string;
  CpfAssociado: string;
  EmailAssociado: string;
  NomeAssociado: string;
  TelefoneAssociado: string;
  PlacaVeiculoAssociado: string;
  NomeAmigo: string;
  TelefoneAmigo: string;
  EmailAmigo: string;
}
