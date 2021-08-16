$(window).on('load', function () {
    $('.level-bar-inner').each(function () {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
        }, 800);

    });

    $.getJSON("projects.json", data => {
        let projectsContainer = $('#projects-container');
        $.each(data.entries, function (index, val) {
            if (index === 0) {
                projectsContainer.append($(`<div class="item featured text-center">
                <div class="featured-image has-ribbon">
                    <img class="img-fluid project-image rounded shadow-sm" src="${val.image}" alt="infovis.png" />
                    </a>
                    <div class="ribbon">
                        <div class="text">New</div>
                    </div>
                </div>                
                <h3 class="title mb-3">${val.title}</a></h3>                    
                <div class="desc text-left">                                    
                    <p>${val.description}</p>
                </div>        
                <a class="more-link" href="${val.github}" target="_blank"><i class="fas fa-external-link-alt"></i>Github Repo&nbsp;&nbsp;&nbsp;</a>
                <a class="more-link" href="${val.report}" target="_blank"><i class="fas fa-external-link-alt"></i>Report</a>                 
                </div>
                <hr class="divider" />`))
            } else {
            console.log(val.github)

                projectsContainer.append($(`<div class="item featured text-center">
                <div class="item row">
                    <a class="col-md-4 col-12">
                    <img class="img-fluid project-image rounded shadow-sm" src="${val.image}" alt="domedagen.png" />
                    </a>
                    <div class="desc col-md-8 col-12 text-left">
                        <h3 class="title">${val.title}</h3>
                        <p class="mb-2">${val.description}</p>
                        <p>
                        <a class="more-link" href="${val.github}" target="_blank"><i class="fas fa-external-link-alt"></i>Github Repo&nbsp;&nbsp;&nbsp;</a>
                        <a class="more-link" href="${val.report}" target="_blank"><i class="fas fa-external-link-alt"></i>Report</a>                 
                    </div>
                </div>
                <hr class="divider" />`))
            }
        });
    });

    $.getJSON("jobs.json", data => {
        let workContainer = $('#work-container');
        $.each(data.entries, function (index, val) {
            workContainer.append($(
                `<div class="item">
                <h3 class="title">${val.jobTitle} - 
                <span class="place"><a href="#">${val.jobPlace}</a></span>
                <span class="year">(${val.timespan})</span></h3>
                <p>${val.jobDescription}</p>
            </div>`))
        })
    })
});

jQuery(document).ready(function ($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');



    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",

        {
            // how many entries do you want?
            // default: 4
            // valid values: any integer
            limit: 3,

            // the effect, which is used to let the entries appear
            // default: 'show'
            // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
            effect: 'slideFastSynced',

            // will request the API via https
            // default: false
            // valid values: false, true
            ssl: true,

            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string
            layoutTemplate: "<div class='items'>{entries}</div>",

            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>'

        }
    );

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "veiyas", { responsive: true });


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "veiyas", selector: "#ghfeed" });


});