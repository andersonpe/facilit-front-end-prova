import routerHelperService from './router-helper/router-helper.service';
import userService from './user/user.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

coreModule.config(routerHelperService);

coreModule.service('userService', userService);

export default coreModule;
