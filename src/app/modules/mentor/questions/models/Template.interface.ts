import { Templates } from './Templates.enum';

export interface ITemplate {
  name: string;
  value1?: string;
  value2?: string;
  type: Templates;
}
