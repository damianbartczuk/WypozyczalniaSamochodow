export interface SamochodDto {
  id?: number;
  marka: string;
  model: string;
  logo: string;
  opis: string;
  cenaZaDobe: number;
  czyWypozyczony: boolean;
  dataOd: Date;
  dataDo: Date;
}
