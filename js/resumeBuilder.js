var bio = {
	"name": "Jeremy Shanks",
	"role": "Front-end Web Developer",
	"contact": {
		"mobile": "555-555-5555",
		"email": "jshanks24@gmail.com",
		"github": "jshanks24",
		"twitter": "jeremy_shanks",
		"location": "East TN"
	},
	"biopic": "images/Portfolio_Image_BW.jpg",
	"welcomeMessage": "Welcome to my site",
	"skills": ["HTML", "CSS", "Javascript", "AngularJS", "KnockoutJS", "jQuery", "PHP", "Wordpress", "Bootstrap", "Sublime Text", "Mac OS X", "Linux"]
};

var work = {
	"jobs": [
	{
		"employer": "Havco",
		"title": "Dry Kiln Operator",
		"location": "East TN",
		"dates": "2015-present",
		"description": "Control dry kilns to ensure lumber dries properly."
	},
	{
		"employer": "Shanks Web Services",
		"title": "Freelance Web Developer",
		"location": "East TN",
		"dates": "2014-2014",
		"description": "Develop sites for local businesses."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "The Linux Startup",
		"dates": "2012-2014",
		"description": "Created a website to help newcomers to linux. The Site was built using Wordpress.",
		"images": ['images/thelinuxstartupsmall.jpg']
	},
	{
		"title": "Genesis Kickstart",
		"dates": "2015",
		"description": "Web application used to build Wordpress themes for the Genesis Framework.",
		"images": ['images/genesiskickstart_tksmall.jpg']
	},
	{
		"title": "Udacity Portfolio",
		"dates": "2015",
		"description": "Portfolio to show off my amazing work while working on the Udacity Front-end Nanodegree.",
		"images": ['images/udacity-portfolio-site_small.jpg']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "American InterContinental University",
		"location": "Schaumburg, IL",
		"degree": "Associates of Business Management",
		"majors": ["Information Systems"],
		"years": "2012",
		"url": "www.example.com"
	}],
	"onlineCourses": [
	{
		"title": "Front-end Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2015",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}
	
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
}

work.display = function() {
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
};

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

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (school in education.schools){
		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (onlineClass in education.onlineCourses){
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);