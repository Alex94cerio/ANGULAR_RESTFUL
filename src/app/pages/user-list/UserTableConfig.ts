import {TableConfig} from '../../interfaces/TableConfig';

export const USER_TABLE_CONFIGURATION: TableConfig = {
  id: 'User-Table',
  header: [
    { columnName: 'id', columnLabel: 'ID', sortable: true },
    { columnName: 'firstName', columnLabel: 'First Name', sortable: true},
    { columnName: 'lastName', columnLabel: 'Last Name', sortable: true },
    { columnName: 'country', columnLabel: 'Country', sortable: true },
    { columnName: 'birthdate', columnLabel: 'Birth Date', sortable: true },
    { columnName: 'fileName', columnLabel: 'File Path' },
    { columnName: 'maritalStatus.name', columnLabel: 'Marital Status' },
    { columnName: 'role.name', columnLabel: 'Role' },
    { columnName: 'skillList.name', columnLabel: 'Skills' }
  ],
  actions: [
    { name: 'Update', link: 'edit' , buttonPath: 'edit'},
    { name: 'Delete', link: 'delete' , buttonPath: 'delete'}
  ],
  BUTTONS: {
    edit: { class: ['btn'], type: 'submit', label: 'Edit', icon: ['fa', 'fa-edit'] },
    delete: { class: ['btn'], type: 'submit', label: 'Delete', icon: ['fa', 'fa-trash'] },
    dropdown: { class: ['btn', 'dropdown-toggle'], type: 'button', icon: ['fa', 'fa-bars'] }
  }
}
