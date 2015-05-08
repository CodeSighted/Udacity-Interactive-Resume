var bio = {
	"name": "Jeremy Shanks",
	"role": "Web Developer",
	"contact": {
		"mobile": "423-519-4379",
		"email": "jshanks24@gmail.com",
		"github": "jshanks24",
		"twitter": "jshanks24",
		"location": "Sweetwater, TN",
		"blog": "http://www.jeremyshanks.com"
	},
	"picture": "images/fry.jpg",
	"welcomeMessage": "Welcome to my site",
	"skills": ["HTML", "CSS", "Javascript"]
};

var work = {
	"jobs": [
	{
		"employer": "Shanks Web Services",
		"title": "Freelance Web Developer",
		"location": "Sweetwater, TN",
		"dates": "2013-present",
		"description": "Develop sites for local businesses."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Resume",
		"dates": "2015",
		"description": "Working on a resume",
		"images": []
	}
	]
}

var education = {
	"schools": [
	{
		"name": "American InterContinental University",
		"years": "2010-2012",
		"city": "Schaumburg, IL"
	},
	{
		"name": "Udacity",
		"years": "2015",
		"city": "Online"
	}

	]
};

$("#topContacts").append(HTMLheaderName.replace("%data%", bio.name));

$("#topContacts").append(HTMLheaderRole.replace("%data%", bio.role));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

$("#topContacts").append(HTMLblog.replace("%data%", bio.contact.blog));

$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.picture));


if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);
	formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);
}

function displayWork () {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


$(document).click(function(loc) {
	console.log(loc.pageX + " " + loc.pageY);
})