var allUsers = [];

function users() { return allUsers }
askdgjfasdgasd
function createUser(name, pass) { 
	var user = {name: name, pass: pass};
	allUsers.push(user);
	return user;
 }

var noop = function() {}
var deleteUser = noop;
var userGroups = noop;
var addUserToGroup = noop;
var removeUserFromGroup = noop;
var rights = noop;
var createRight = noop;
var deleteRight = noop;
var addRightToGroup = noop;
var removeRightFromGroup = noop;
var groups = noop;
var createGroup = noop;
var deleteGroup = noop;
var groupRights = noop;
