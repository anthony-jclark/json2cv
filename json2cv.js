

var Template = require('template');
var template = new Template();

var Consolidate = require('consolidate');
template.engine('hbs', Consolidate.handlebars);


// Load the CV template
template.page('cv.hbs');


// Open the json file (CL argument)
var fs = require('fs');
var cvdata = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));


// Render the page
var template_data = {
  header: cvdata.header,
  sections: cvdata.sections
};
template.render('cv.hbs', template_data, function(err, html) {
  if (err) throw err;
  console.log(html);
});

