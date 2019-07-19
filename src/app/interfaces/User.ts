import {Role} from './Role';
import {MaritalStatus} from './MaritalStatus';
import {Skill} from './Skill';

export interface User {

  id: number;
  firstName: string;
  lastName: string;
  birthdate?: Date;
  country?: string;
  fileName: string;
  role: Role;
  maritalStatus: MaritalStatus;
  skillList: Skill[];
}
