var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
metalsmith(__dirname)
  .metadata({
    site: {
      name: 'Hanekawa',
      description: "hanakawa is bae"
    }
  })
  .source('./src')
  .destination('./public')
  .use(markdown())
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Hanekawa built!');
    }
  });