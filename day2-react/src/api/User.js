import axios from "axios";

 const postUserData = async(userObj) => {
	try {
		console.log(userObj, "****POST*****");
		let response =  await axios.post("http://localhost:8080/post-user" ,userObj);
	}
	catch (error) {
		console.log(error);
	}
}

 const getUserData = async() => {
	try {
		console.log("******GET***");
		let response =  await axios.get("http://localhost:8080/get-user" );
		return response;
	}

	catch (error) {
		console.log(error);
	}
}

 const deleteUserData = async(userObj) => {
	try {
		console.log(userObj, "******DELETE***");
		let response = await axios.delete(`http://localhost:8080/delete-user?email=${userObj.email}`);
		console.log(response);
		
	}
	catch (error) {
		console.log(error);
	}
}

 const putUserData = async(userObj) => {
	try {
		console.log("******PUT***");
		let response = await axios.put("http://localhost:8080/put-user" ,userObj);
		console.log(response);
		
	}
	catch (error) {
		console.log(error);
	}
}

export {postUserData, getUserData ,deleteUserData ,putUserData} ;