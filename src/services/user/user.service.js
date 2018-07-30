export default class UserService {
	constructor(
		$http
	) {
		'ngInject';

		this.$http = $http;
	}

	
	getUsers = ( param ) => {
		return this.$http.get(`http://localhost:3004/users?role_like=${param}&department_like=${param}&name_like=${param}`).then((response) => {
			let users = response.data;
			let department = [];
      let usersList = [];

			for( let i = 0; i < users.length; i++ ){
				let index = department.hasOwnProperty(users[i].department);
				if ( !index ) {
						let pos = {"name": users[i].department, "workers": [] }
						department[users[i].department.toString()] = pos;
				} 
				department[users[i].department].workers.push(users[i]);
			}

			let keys = Object.keys(department);
			for ( let j = 0; j < keys.length; j++ ) {
				usersList.push(department[keys[j]]);
			}
			return usersList;
		});
	};

	
	getUsersByRole = ( param ) => {
		 return this.$http.get( `http://localhost:3004/users?role_like=${param}` ).then( ( response ) => {
			let users = response.data;
			let department = [];
      let usersList = [];

			for( let i = 0; i < users.length; i++ ){
				let index = department.hasOwnProperty(users[i].department);
				if ( !index ) {
						let pos = {"name": users[i].department, "workers": [] }
						department[users[i].department.toString()] = pos;
				} 
				department[users[i].department].workers.push(users[i]);
			}

			let keys = Object.keys(department);
			for ( let j = 0; j < keys.length; j++ ) {
				usersList.push(department[keys[j]]);
			}
			return usersList;
		 });
	};


	getUsersByDepartment = ( param ) => {
		return this.$http.get( `http://localhost:3004/users?department_like=${param}` ).then( ( response ) => {
		 let users = response.data;
		 let department = [];
		 let usersList = [];

		 for( let i = 0; i < users.length; i++ ){
			 let index = department.hasOwnProperty(users[i].department);
			 if ( !index ) {
					 let pos = {"name": users[i].department, "workers": [] }
					 department[users[i].department.toString()] = pos;
			 } 
			 department[users[i].department].workers.push(users[i]);
		 }

		 let keys = Object.keys(department);
		 for ( let j = 0; j < keys.length; j++ ) {
			 usersList.push(department[keys[j]]);
		 }
		 return usersList;
		});
 };


}
