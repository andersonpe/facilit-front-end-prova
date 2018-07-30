import userItemComponent from './user-item.component';

const userItemModule = angular.module('app.user-item', []);

userItemModule.component('user', userItemComponent);

export default userItemModule;