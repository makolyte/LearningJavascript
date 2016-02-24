var model = {
    header:{
        name:"Mac Wiltzer",
        role:"Software Developer"
    },
    contacts:{
      email:"mwiltzer@gmail.com",
        github:"https://github.com/makolyte",
        twitter:"https://twitter.com/Makolyte",
        blog:"http://makguidetosoft.blogspot.com"
    }
    ,
    skills:["C#", "SQL", "Javascript", "Python", "HTML", "CSS"],
    work:[
        {employer:"Compass",
        title:"Software Engineer",
        dates:"May '07 to present",
        description: "I am the primary software engineer, working on several different projects"}
    ],
    education:[
        {
            schoolname:"University of Michigan",
            years:"2005-2009",
            degree:"BS in Computer Science"
        },
        {
            schoolname:"Udacity",
            years:"2015-2016",
            degree:"Fullstack Web Dev"
        }
    ]

}


var octopus = {
    DATA:"%data%",
    buildHeader:function(){
        var headerName = view.HTMLheaderName.replace(octopus.DATA, model.header.name)
        var headerRole = view.HTMLheaderRole.replace(octopus.DATA, model.header.role)

        $("#header").append(headerName)
        $("#header").append(headerRole)
    },
    buildContacts:function(){
        var contactsList = $(view.contactsList)
        var email = view.HTMLemail.replace(octopus.DATA, model.contacts.email)
      contactsList.append(email)

        var github = view.HTMLgithub.replace(octopus.DATA, model.contacts.github)
        contactsList.append(github)

        var twitter = view.HTMLtwitter.replace(octopus.DATA, model.contacts.twitter)
        contactsList.append(twitter)

        var blog = view.HTMLblog.replace(octopus.DATA, model.contacts.blog)
        contactsList.append(blog)

      $("#header").append(contactsList)
    },
    buildSkills:function(){
        $("#header").append($(view.HTMLskillsStart))


        var skills = $("#skills")
        for(var i in model.skills)
        {
            skills.append(view.HTMLskills.replace(octopus.DATA, model.skills[i]))
        }
    },
    buildWorkExp:function(){
        for(var i in model.work)
        {
            var work = model.work[i]
            var workHeader = $("#workExperience")
            var workEntry = $(view.HTMLworkStart)
            workEntry.append(view.HTMLworkEmployer.replace(octopus.DATA, work.employer))
            workEntry.append(view.HTMLworkDates.replace(octopus.DATA, work.dates))
            workEntry.append(view.HTMLworkTitle.replace(octopus.DATA, work.title))
            workEntry.append(view.HTMLworkDescription.replace(octopus.DATA, work.description))
            workHeader.append(workEntry)
        }
    },
    buildEducation:function(){
        for(var i in model.education)
        {
            var school = model.education[i]
            var educationHeader = $("#education")
            var educationEntry = $(view.HTMLschoolStart)
            educationEntry.append(view.HTMLschoolName.replace(octopus.DATA, school.schoolname))
            educationEntry.append(view.HTMLschoolDegree.replace(octopus.DATA, school.degree))
            educationEntry.append(view.HTMLschoolDates.replace(octopus.DATA, school.dates))
            educationHeader.append(educationEntry)
        }
    },
    init:function(){
        octopus.buildHeader()
        octopus.buildContacts()
        octopus.buildSkills()
        octopus.buildWorkExp()
        octopus.buildEducation()
    }
}


$(octopus.init)




var view = {
HTMLheaderName:'<h1 id="name">%data%</h1>',
HTMLheaderRole:'<span>%data%</span><hr>',
contactsList:'<ul id="topContacts" class="flex-box">',
HTMLcontactGeneric:'<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
HTMLmobile:'<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
HTMLemail:'<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
HTMLtwitter:'<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
HTMLgithub:'<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
HTMLblog:'<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
HTMLlocation:'<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',

HTMLbioPic:'<img src="%data%" class="biopic">',
HTMLwelcomeMsg:'<span class="welcome-message">%data%</span>',

HTMLskillsStart:'<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
HTMLskills:'<li class="flex-item"><span class="white-text">%data%</span></li>',

HTMLworkStart:'<div class="work-entry">',
HTMLworkEmployer:'<a href="#">%data%',
HTMLworkTitle:' - %data%</a>',
HTMLworkDates:'<div class="date-text">%data%</div>',
HTMLworkLocation:'<div class="location-text">%data%</div>',
HTMLworkDescription:'<p><br>%data%</p>',


HTMLschoolStart:'<div class="education-entry"></div>',
HTMLschoolName:'<a href="#">%data%',
HTMLschoolDegree:' -- %data%</a>',
HTMLschoolDates:'<div class="date-text">%data%</div>',
HTMLschoolLocation:'<div class="location-text">%data%</div>',
HTMLschoolMajor:'<em><br>Major: %data%</em>',


}

