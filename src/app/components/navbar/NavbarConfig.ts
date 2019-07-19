
export const NAVBAR_CONFIG = {
  ACTIONS: {
    home: { name: 'Home', link: 'home' },
    userList: { name: 'Users', link: 'users' },
    roleList: { name: 'Roles', link: 'roles' },
    addUser: { name: 'Add User', link: 'users/add-user' }
  },

  BUTTONS: {
    navHome:  {class: ['btn', 'text-light', 'font-weight-bold'], type: 'button', label: 'Home', icon: ['fa', 'fa-home'] },
    navUsers: {class: ['btn', 'text-light'], type: 'submit', label: 'Users', icon: ['fa', 'fa-users'] },
      userList: {class: ['btn'], type: 'submit', label: 'List All Users' },
      addUser:  {class: ['btn'], type: 'submit', label: 'Add New Users' },
    navRoles: {class: ['btn', 'text-light'], type: 'submit', label: 'Roles', icon: ['fa', 'fa-users'] },
      roleList: {class: ['btn'], type: 'submit', label: 'List All Roles' },

  }
}
