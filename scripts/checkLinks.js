const _ = require('lodash');
const fs = require('fs');
const markdown = require('markdown').markdown;
const Promise = require('bluebird');
const request = require('request');
const url = require('url');

const text = fs.readFileSync(__dirname + '/../README.md', 'utf8');
const links = getLinks(markdown.parse(text));

// Get linked pages in parallel
const requestLinks = Promise.map(links, link => {
  return new Promise((resolve, reject) => {
    request.head(link, {
      rejectUnauthorized: false,
      timeout: 5000
    }, (error, response, body) => {
      // Always resolve (do not fail fast).
      if (error) {
        resolve({link: link, error: error});
      } else {
        resolve({link: link, status: response.statusCode});
      }
    });
  });
}, {concurrency: 10});

requestLinks.then(results => {
  const errorStatus = [401, 403, 404, 500, 502, 503];
  return _.filter(results, result => {
    return result.error || errorStatus.indexOf(result.status) !== -1;
  });
}).then(results => {
  if (!results.length) {
    console.log('No errors found!');
    return;
  }

  // With bad links, we need to do a little manual confirmation. For example,
  // if we get an error, it's possible the endpoint does not respond to head.
  results.forEach(result => {
    console.error(`[${result.status || result.error.code}] ${result.link}`);
  });
  process.exit(1);
});

/**
 * Grab all links.
 */
function getLinks (tree) {
  let links = [];

  if (!_.isArray(tree)) { return links; }

  if (tree[0] === 'link') {
    // Only absolute links.
    var urlObj = url.parse(tree[1].href);
    if (urlObj.protocol) { links = [tree[1].href]; }
  } else {
    links = _.flatten(_.map(tree.slice(1), getLinks));
  }
  return links;
}
