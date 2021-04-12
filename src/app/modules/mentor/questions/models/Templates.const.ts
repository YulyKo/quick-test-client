import { ITemplate } from './Template.interface';
import { Templates } from './Templates.enum';

export const TEMPLATES: ITemplate[] = [
  {
    name: 'true/false',
    value1: 'true',
    value2: 'false',
    type: Templates.BOOLEAN,
  },
  {
    name: 'yes/no',
    value1: 'yes',
    value2: 'no',
    type: Templates.BOOLEAN,
  },
  {
    name: 'так/ні',
    value1: 'так',
    value2: 'ні',
    type: Templates.BOOLEAN,
  },
  {
    name: 'за/проти',
    value1: 'за',
    value2: 'проти',
    type: Templates.BOOLEAN,
  },
  {
    name: 'Власне',
    type: Templates.BOOLEAN,
  },
];
