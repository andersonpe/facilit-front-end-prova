export default class HomeController {
  
  
  constructor($log, userService) {
		'ngInject';

    this.$log = $log;
    this.userService = userService;
	}


	$onInit = () => {
    
  };
  

  filter( v ) {
    this.option = v;
  };


  search (  ) {
    let value = (this.searchValue != undefined && this.searchValue != null) ? this.searchValue : "";

    switch( this.option ) {
      case 1:
        this.userService.getUsersByDepartment( value ).then( ( users ) => {
          this.users = users;
          this.searchValue = null;
        });
        break;
      case 2:
        this.userService.getUsersByRole( value ).then( ( users ) => {
          this.users = users;
          this.searchValue = null;
        });
        break;
      default:
        this.userService.getUsers( value ).then( ( users ) => {
          this.users = users;
          this.searchValue = null;
        });
    }
    
  }


}
