import { memberHeadshots } from "./member-headshots.js";

$(document).ready(function()
{
    const path = '../img/about';
    const subteams = ['co-captains', 'software', 'deep-learning', 'signal-processing', 'electrical', 'mechanical', 'mentees'];

    subteams.forEach(subteam => {
        for (let i = 0; i < memberHeadshots[subteam].length; i++) {
            if ((i+4) % 4 === 0) {
                $(`.${subteam}`).append( `<div class='row row-${Math.floor(i/4)}'></div>` );
            }
            if (`${subteam}` === 'mentees') {
                $(`.${subteam} .row-${Math.floor(i/4)}`).append( 
                    "<div class='col-md-3 col-md-4'>" +
                        `<div class='mx-auto mb-3 headshot' style="background-image: url('${path}/${subteam}/${memberHeadshots[subteam][i]}')"></div>` +
                        `<h4><strong>${getName(memberHeadshots[subteam][i])}</strong></h4>` +
                    "</div>"
                );
            } else {
                $(`.${subteam} .row-${Math.floor(i/4)}`).append( 
                    "<div class='col-lg-3 col-md-6 mb-5 mb-lg-5'>" +
                        `<div class='mx-auto mb-3 headshot' style="background-image: url('${path}/${subteam}/${memberHeadshots[subteam][i]}')"></div>` +
                        `<h5>${getName(memberHeadshots[subteam][i])}</h5>` + 
                    "</div>"
                );
            }
        }
    });
});

const getName = (fileName) => {
    const index = fileName.lastIndexOf('.');
    return fileName.slice(0, index);
}
