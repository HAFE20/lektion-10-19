
export interface Person {
	email: string;
	login: Login;
	name: Name;
	picture: Picture;
}

interface Login {
	username: string;
}

interface Name {
	first: string;
	last: string;
	title: string;
}

interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}
