var dribbbleUsername = 'juanlove';
 
// Variable to hold the HTML we'll generate
var html = 'https://dribbble.com/juanlove';

$.getJSON("http://api.dribbble.com/players/"+ dribbbleUsername +"/shots?callback=?", function(data) {
    // Do something with the result here
});

// how many shots we're displaying on the page
var numberOfShots = 10;
 
// Loop over the results, generating the HTML for each <li> item
for (i=0; i<numberOfShots; i++) {
    html += '<li>';
    html += '<a href="'+ data.shots[i].url +'">';
    html += '<img src="' + data.shots[i].image_url + '" alt="'+ data.shots[i].title +'" />';
    html += '</a>';
    html += '</li>';
}
 
// Insert the generated HTML to the DOM
$('.shots').html(html);