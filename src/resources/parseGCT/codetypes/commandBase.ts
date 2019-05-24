
export interface parameter {
  name: string;
  description: string;
  isValid(value: any): boolean;
  toHex(value: any): number;
  toCode(values: any): string;
}

export interface commandBase {
  name: string;
  description: string;
  params: Array<parameter>;
  typeValue: number;
  subtypeValue?: number;
  isValid(values: any): boolean;
  toHex(values: any): number;
  toCode(values: any): string;
}