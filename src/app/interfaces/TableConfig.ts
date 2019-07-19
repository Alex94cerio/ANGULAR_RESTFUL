import {Action} from './Action';
import {Column} from './Column';

export interface TableConfig {

  id: string;
  header: Column[];
  actions?: Action[];
  BUTTONS?;
}

