export const config = {
	project: {
		name: "WarmyHomes",
		slogan: "Easy Way to Find a Perfect Property",
		description:
			"Discover your perfect sanctuary with Warmy Homes. From cozy cottages to modern lofts, we offer a diverse portfolio to suit every lifestyle. Let our experienced team guide you seamlessly through the process. Find warmth, comfort, and serenity with Warmy Homes today.",
		version: "1.0.0",
	},
	contact: {
		phone1: "+1 (212) 489-1895",
		phone2: "+1 (212) 489-1899",
		email: "info@warmyhomes.com",
		address: "329 Queensberry Street, North Melbourne VIC 3051, Australia",
		website: "https://warmyhomes.com",
		mapURL: "https://maps.app.goo.gl/SWfh5b85fSuqJVfW8",
		mapEmbedURL:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.0878677318015!2d144.95510498571824!3d-37.803951318012395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d33b7f9a9d1%3A0x615ec2ddd8da29d5!2s329%20Queensberry%20St%2C%20North%20Melbourne%20VIC%203051%2C%20Avustralya!5e0!3m2!1str!2str!4v1708510329849!5m2!1str!2str",
		socialMedia: {
			twitter: "https://twitter.com",
			facebook: "https://facebook.com",
			instagram: "https://instagram.com",
			linkedin: "https://linkedin.com",
			youtube: "https://youtube.com",
		},
	},
	api: {
		baseUrl: "http://localhost:8000",
		LLMbaseUrl: "http://localhost:5000",

	},
	userRightsOnRoutes: [
		{urlRegex: /\/chat$/, rights:["student"]},
	]
};
