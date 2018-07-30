import template from './user-item.component.html';
import controller from './user-item.controller';

let userItemComponent = {
  restrict: 'E',
  bindings: {
    users: '='
  },
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true  
};

export default userItemComponent;