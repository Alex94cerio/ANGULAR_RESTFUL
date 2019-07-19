import {TableConfig} from '../../interfaces/TableConfig';

export const ROLE_TABLE_CONFIGURATION: TableConfig = {
  id: 'Role-Table',
  header: [
    {columnName: 'id', columnLabel: 'ID', sortable: true},
    {columnName: 'name', columnLabel: 'Name', sortable: true},
  ],
}
