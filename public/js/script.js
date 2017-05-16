function obtusum() {
	this.emailBox = getElementById('signUpEmail');
	this.userNameBox = getElementById('userName');
	this.passwordBox = getElementById('signUpPass');
	this.passwordConfBox = getElementById('signUpPassConf')
	this.signUpButton = getElementById('SignUpButt');
	this.signInEmailBox = getElementById('signIpEmail');
	this.signInPasswordBox = getElementById('signIpPass');
	this.signInButton = getElementById('signInButt');
	this.signOutButton = getElementById('signOutButt')

	this.signUpButton.addEventListener('click',this.signUp.bind(this))
	this.signInButton.addEventListener('click',this.signIn.bind(this))
	this.signOutButton.addEventListener('click',this.signOut.bind(this))
	this.passwordConfBox.addEventListener('deselect'this.PassConf.bind(this))
	this.userNameBox.addEventListener('deselect'this.userNameConf.bind(this))
	






}



// Sets up shortcuts to Firebase features and initiate firebase auth.
obtusum.prototype.initFirebase = function() {
	// Sets up shortcuts to Firebase features and initiate firebase auth.
	this.auth = firebase.auth();
	this.database = firebase.database();
	this.storage =firebase.strage();
	// Initiates Firebase auth and listen to auth state changes.
	this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

obtusum.prototype.signIn = function() {

	var = provider = firebase.auth.createUserWithEmailAndPassword
}
