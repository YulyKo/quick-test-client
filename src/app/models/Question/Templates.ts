export const TEMPLATES: ITemplate[] = [
  {
    name: 'true/false',
    value1: 'true',
    value2: 'false',
  },
  {
    name: 'yes/no',
    value1: 'yes',
    value2: 'no',
  },
  {
    name: 'так/ні',
    value1: 'так',
    value2: 'ні',
  },
  {
    name: 'за/проти',
    value1: 'за',
    value2: 'проти',
  },
  {
    name: 'Власне',
  },
];

export interface ITemplate {
  name: string;
  value1?: string;
  value2?: string;
}
