// Create the object 'bio'
var bio = {
    'name': 'Leonardo di ser Piero da Vinci',
    'role': 'Italian Renaissence polymath',
    'welcomeMessage': '❝ In the normal course of events many men and women are born with remarkable talents; but occasionally, in a way that transcends nature, a single person is marvellously endowed by Heaven with beauty, grace and talent in such abundance that he leaves other men far behind, all his actions seem inspired and indeed everything he does clearly comes from God rather than from human skill. Everyone acknowledged that this was true of Leonardo da Vinci, an artist of outstanding physical beauty, who displayed infinite grace in everything that he did and who cultivated his genius so brilliantly that all problems he studied he solved with ease.❞ — Giorgio Vasari',

    // I changed the variables of the 'contacts' part (mobile, twitter, etc) to make it more viable for a Renaissance biography
    'birth': {
        'date': '15 April 1452',
        'location': 'Vinci, Florence, Italy'
    },
    'death': {
        'date': '2 May 1519',
        'location': 'Amboise, France'
    },

    'skills': ['painter', 'sculptor', 'architect', 'musician', 'mathematician', 'engineer', 'inventor', 'anatomist', 'geologist', 'astronomer', 'cartographer', 'botanist', 'historian', 'writer'],
    'bioPic': 'images/leonardo.jpg'
};

// Display the function with the bio info
bio.display = function () {

    // Prepend the name in the website
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
    $('#lets-connect').prepend(HTMLfooterName.replace('%data%', bio.name));

    // We create all the variables that we append together
    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');
    var formattedHTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedHTMLbirthdate = HTMLbirthdate.replace('%data%', bio.birth.date);
    var formattedHTMLbirthplace = HTMLbirthplace.replace('%data%', bio.birth.location);
    var formattedHTMLdeaddate = HTMLdeaddate.replace('%data%', bio.death.date);
    var formattedHTMLdeadplace = HTMLdeadplace.replace('%data%', bio.death.location);

    // Append the role, birth and death information at the header of the website
    $topContacts.append(formattedHTMLheaderRole, formattedHTMLbirthdate, formattedHTMLbirthplace, formattedHTMLdeaddate, formattedHTMLdeadplace);
    $footerContacts.append(formattedHTMLheaderRole, formattedHTMLbirthdate, formattedHTMLbirthplace, formattedHTMLdeaddate, formattedHTMLdeadplace);

    // Append the image and the welcome message
    $('#header').append(HTMLbioPic.replace('%data%', bio.bioPic).replace('%alt%', bio.name));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills.length) {
        var len = bio.skills.length;
        // Append all the skills, and the skills title
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < len; skill++) {
            $('#skills').append(HTMLskills.replace('%data%', ' ' + bio.skills[skill]));
        }
    }
};
bio.display();

// Create the object 'education'
var education = {
    'schools': [
        {
            'name': 'Andrea del Verrocchio workshop',
            'location': 'Florence, Italy',
            'degree': 'Apprentice',
            'majors': ['Master in the Guild of Saint Luke'],
            'dates': '1466 - 1476',
            'url': 'https://en.wikipedia.org/wiki/Guild_of_Saint_Luke'
        }
    ]
};

// Display the function with the education info
education.display = function () {
    var lengthEducation = education.schools.length;
    for (var school = 0; school < lengthEducation; school++) {

        // We loop throught all the schools and create a new div for each school
        $('#education').append(HTMLschoolStart);

        // We create all the variables that we append together
        var $lastEducationEntry = $('.education-entry:last');
        var formattedHTMLschoolName = HTMLschoolName.replace('%data%', education.schools[school].name) + HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedHTMLschoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        
        // Append the info that is not an array
        $lastEducationEntry.append(formattedHTMLschoolName, formattedHTMLschoolDates, formattedHTMLschoolLocation);
        
        // Append the info from the 'majors' array, throught a loop
        if (education.schools[school].majors.length > 0) {
            var len = education.schools[school].majors.length;
            for (var major = 0; major < len; major++) {
                $lastEducationEntry.append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
            }
        }

        // Append the URL in the <a href> from the school name. Also add the target=_blank property to the link.
        $('.education-entry:last a').attr('href', education.schools[school].url).attr('target', '_blank');
    }
};
education.display();

// Create the object 'work'
var work = {
    'jobs': [
        {
            'employer': 'Palazzo Vecchio',
            'title': 'Painter',
            'location': 'Florence, Italy',
            'dates': ['January 1478'],
            'description': 'Leonardo was commissioned to paint an altarpiece for the Chapel of St. Bernard in the Palazzo Vecchio, which he never completed.',
            'url': 'https://en.wikipedia.org/wiki/Palazzo_Vecchio'
        },
        {
            'employer': 'Monks of San Donato',
            'title': 'Painter',
            'location': 'San Donato, Italy',
            'dates': ['March 1481'],
            'description': 'Leonardo was commissioned to paint <em>The Adoration of the Magi</em> for the monks of San Donato. It was never completed, but we have the uncompleted painting.',
            'url': 'https://en.wikipedia.org/wiki/Adoration_of_the_Magi_(Leonardo)'
        },
        {
            'employer': 'Ludovico Sforza, Duke of Milan',
            'title': 'Painter, inventor and engineer',
            'location': 'Milan, Italy',
            'dates': ['1482 - 1499'],
            'description': 'Under the patronage of Ludovico Sforza, he painted the <em>Virgin of the Rocks</em>, <em>The Last Supper</em> and travelled to Hungary to paint another work. He also did engineering projects, like the preparation of floats and pageants for special occasions, and the model for a huge horse bronze monument.',
            'url': 'https://en.wikipedia.org/wiki/Ludovico_Sforza'
        },
        {
            'employer': 'Matthias Corvinus',
            'title': 'Painter',
            'location': 'Buda, Hungary',
            'dates': ['1485'],
            'description': 'Painted the <em>Holy Family</em>.',
            'url': 'https://en.wikipedia.org/wiki/Holy_Family'
        },
        {
            'employer': 'Republic of Venice',
            'title': 'Military architect and engineer',
            'location': 'Venice, Italy',
            'dates': ['1499'],
            'description': 'He was employed as a military architect and engineer, devising methods to defend the city from naval attacks during the Second Italian War.',
            'url': 'https://en.wikipedia.org/wiki/Italian_War_of_1499%E2%80%931504'
        },
        {
            'employer': 'Servite monks',
            'title': 'Painter',
            'location': 'Florence, Italy',
            'dates': ['1500'],
            'description': 'He and his household (his assistant Salai and his mathematician friend Luca Pacioli) were guests at the monastery of Santissima Annuziata. The Servite monks provided Leonardo with a workshop, where he created the drawing <em>The Virgin and Child with St Anne and St John the Baptist</em>.',
            'url': 'https://en.wikipedia.org/wiki/The_Virgin_and_Child_with_St_Anne_and_St_John_the_Baptist'
        },
        {
            'employer': 'Cesare Borgia',
            'title': 'Military architect and engineeer',
            'location': 'Cesena, Italy',
            'dates': ['1502'],
            'description': 'Entered the service of Cesare Borgia as a military architect and engineer. Leonardo created a map of Imola and another of Chiana Valley. He also projected the construction of a dam from the sea to Florence, to provide water supply during all the year.',
            'url': 'https://en.wikipedia.org/wiki/Cesare_Borgia'
        },
        {
            'employer': 'Guild of Saint Luke',
            'title': 'Painter',
            'location': 'Florence, Italy',
            'dates': ['October 1503 - 1504'],
            'description': 'Rejoined the Guild of Saint Luke and spent two years painting a mural of <em>The Battle of Anghiari</em>, with Michelangelo designing its companion piece, <em>The Battle of Cascina</em>.',
            'url': 'https://en.wikipedia.org/wiki/The_Battle_of_Anghiari_(painting)'
        },
        {
            'employer': 'Pope Leo X',
            'title': 'Painter',
            'location': 'Rome, Italy',
            'dates': ['September 1513 - 1516'],
            'description': 'Leonardo spent much of his time living in the Belvedere, in the Vatican, half retired already. After the recapturing of Milan by King Francis I of France, Leonardo was commissioned to make a mechanical lion which could walk forward, open its chest and reveal a cluster of lilies for the king.',
            'url': 'https://en.wikipedia.org/wiki/Cortile_del_Belvedere'
        },
        {
            'employer': 'King François I of France',
            'title': 'Inventor',
            'location': 'Amboise, France',
            'dates': ['1516 - May 1519'],
            'description': 'Leonardo went to France to live, where he spend the last years of his life and became a close friend of the king of France, Francis I.',
            'url': 'https://en.wikipedia.org/wiki/Francis_I_of_France'
        }
    ]
};

// Display the function with the work info
work.display = function () {
    var lengthWork = work.jobs.length;
    for (var job = 0; job < lengthWork; job++) {

        // We create a new div for each work job
        $('#workExperience').append(HTMLworkStart);

        // We create all the variables that we append together
        var $lastWorkEntry = $('.work-entry:last');
        var formattedHTMLworkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer) + HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedHTMLworkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedHTMLworkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

        // We concat employer and title
        $lastWorkEntry.append(formattedHTMLworkEmployer);

        // We append the dates information throught a loop, since it is an array. We have the 'if' to put it online only if there is something in it.
        if (work.jobs[job].dates.length > 0) {
            var len = work.jobs[job].dates.length;
            for (var date = 0; date < len; date++) {
                $lastWorkEntry.append(HTMLworkDates.replace('%data%', work.jobs[job].dates[date]));
            }
        }

        // We append the location and description
        $lastWorkEntry.append(formattedHTMLworkLocation, formattedHTMLworkDescription);
        
        // Append the URL in the <a href> from the work name. Also add the target=_blank property to the link.
        $('.work-entry:last a').attr('href', work.jobs[job].url).attr('target', '_blank');
    }
};
work.display();

// Create the object 'projects'
var projects = {
    'project': [
        {
            'title': 'Paintings of the 1480s',
            'dates': '1480 - 1489',
            'description': 'In the 1480s Leonardo recieved three important commissions. <em>St. Jerome in the Wilderness</em>, with a very unusual composition, and the <em>Adoration of the Magi</em>, a commission from the Monks of San Donato a Scopeto, were never finished. Leonardo did numerous drawings and preparatory studies for the second one, but in 1482 he went to Milan and abandoned the painting. The third important work is the <em>Virgin of the Rocks</em>, commissioned for the Confraternity of the Immaculate Conception. This one was done with the assistance of the de Predis brothers, who never got paid for their work...',
            'images': ['./images/1480-st-jerome.jpg', './images/1481-adoration-magi.jpg', './images/1483-virgin-rocks.jpg'],
            'url': 'https://en.wikipedia.org/wiki/List_of_works_by_Leonardo_da_Vinci'
        },
        {
            'title': 'Paintings of the 1490s',
            'dates': '1490 - 1499',
            'description': '<em>The Last Supper</em> is the most famous painting of this period. It was painted for the refectory of the Convent of Santa Maria della Grazie in Milan, and represents the last meal shared by Jesus with his disciples before his capture and death. The painting was acclaimed as a masterpiece of design and characterisation, but instead of using the technique of fresco, Leonardo used tempera, resulting in a surface subject to mold and flaking and it deteriorated rapidly.',
            'images': ['./images/1495-virgin-rocks.jpg', './images/1498-last-supper.jpg', './images/1496-belle-ferroniere.jpg'],
            'url': 'https://en.wikipedia.org/wiki/List_of_works_by_Leonardo_da_Vinci'
        },
        {
            'title': 'Paintings of the 1500s',
            'dates': '1500 - 1519',
            'description': 'Among the works created by Leonardo in the 16th century is the small portrait known as the Mona Lisa or <em>la Gioconda</em>, the laughing one. In the present era it is arguably the most famous painting in the world. Its fame rests, in particular, on the elusive smile of the woman.',
            'images': ['./images/1503-mona-lisa.jpg', './images/1508-john-baptist.jpg', './images/1503-virgin-child.jpg'],
            'url': 'https://en.wikipedia.org/wiki/List_of_works_by_Leonardo_da_Vinci'
        },
        {
            'title': 'Drawings',
            'dates': '1470 - 1519',
            'description': 'Leonardo was not a prolific painter, but he was a most prolific draftsman, keeping journals full of small sketches and detailed drawings recording all manner of things that took his attention. As well as the journals there exist many studies for paintings, some of which can be identified as preparatory to particular works.',
            'images': ['./images/1490-vitruvian-man.jpg', './images/1500-virgin-child.jpg', './images/1508-head-woman.jpg', './images/old-man.jpg', './images/sedge.jpg'],
            'url': 'https://en.wikipedia.org/wiki/List_of_works_by_Leonardo_da_Vinci'
        },
        {
            'title': 'Anatomy',
            'dates': '1470 - 1519',
            'description': 'His formal training in the anatomy of the human body began with his apprenticeship to Andrea del Verrocchio, who insisted that all his pupils learn anatomy. His anatomical drawings include many studies of the human skeleton and its parts, and studies muscles and sinews. The drawings and notation are far ahead of their time, and if published, would undoubtedly have made a major contribution to medical science. As an artist, Leonardo also closely observed and recorded the effects of age and of human emotion on the physiology, studying in particular the effects of rage. ',
            'images': ['./images/anatomy1.jpg', './images/anatomy2.jpg', './images/anatomy3.jpg', './images/anatomy4.jpg', './images/anatomy5.jpg', './images/anatomy6.jpg'],
            'url': 'https://en.wikipedia.org/wiki/Science_and_inventions_of_Leonardo_da_Vinci'
        },
        {
            'title': 'Engineering and inventions',
            'dates': '1470 - 1519',
            'description': 'Leonardo was also valued as an engineer. He devised a system of moveable barricades to protect Venice from an attack, he also had a scheme for diverting the flow of the Arno river. He had a vast number of inventions, practical and impractical, in his journals. They include musical instruments, a mechanical knight, hydraulic pumps, reversible crank mechanisms, finned mortar shells, and a steam cannon. For much of his life, he was fascinated by the phenomenon of flight, producing many studies of the flight of birds, as well as plans for several flying machines.',
            'images': ['./images/flying-machine.jpg', './images/flying-machine2.jpg', './images/cannons.jpg', './images/artillery.jpg'],
            'url': 'https://en.wikipedia.org/wiki/Science_and_inventions_of_Leonardo_da_Vinci'
        }
    ]
};

// Display the function with the projects
projects.display = function () {
    var lengthProjects = projects.project.length;
    for (var project = 0; project < lengthProjects; project++) {

        // We create a new div for each project (painting or invention)
        $('#projects').append(HTMLprojectStart);

        // We create all the variables that we append together
        var $lastProjectEntry = $('.project-entry:last');
        var formattedHTMLprojectTitle = HTMLprojectTitle.replace('%data%', projects.project[project].title);
        var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%', projects.project[project].dates);
        var formattedHTMLprojectDescription = HTMLprojectDescription.replace('%data%', projects.project[project].description);

        // We append the title, dates and description
        $lastProjectEntry.append(formattedHTMLprojectTitle, formattedHTMLprojectDates, formattedHTMLprojectDescription);

        // We append the project imatges throught a loop, since it is an array. We have the 'if' to put it online only if there is something in it.
        if (projects.project[project].images.length > 0) {
            var len = projects.project[project].images.length;
            for (var image = 0; image < len; image++) {
                $lastProjectEntry.append(HTMLprojectImage.replace('%data%', projects.project[project].images[image]).replace('%alt%', projects.project[project].title));
            }
        }

        // Append the URL in the <a href> from the project name. Also add the target=_blank property to the link.
        $('.project-entry:last a').attr('href', projects.project[project].url).attr('target', '_blank');
    }
};
projects.display();

// Maps!
$('#map-div').append(googleMap);

// jQuery to create the sticky navigation menu
$(document).ready(function () {
    // grab the initial top offset of the navigation
    var stickyNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have 'fixed' css position or not.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
});

// jQuery to create a smooth effect when we scrooldown using the menu (the anchor links)
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});