import '../styles/exercise1.scss';
import compiledTemplate from "./exercise1.hbs";
const Handlebars = require("handlebars");

async function getUsers() {
	const response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');
	const data = {'data' : await response.json()};
	let peopleContainer = await document.getElementById("people-container");
	peopleContainer.innerHTML = await compiledTemplate(data);
	return data;
}

getUsers();

Handlebars.registerHelper('id', 'createdAt', function() {
    return JSON.stringify(this);
});
