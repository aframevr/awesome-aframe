const path = require('path');
const fs = require('fs');
const url = require('url');

const _ = require('lodash');
const markdown = require('markdown').markdown;
const PromiseMap = require('bluebird').map;
const request = require('request');

const text = fs.readFileSync(__dirname + '/../README.md', 'utf8');
const links = getLinks(markdown.parse(text));

const RESPONSE_ERROR_CODES = [401, 403, 404, 500, 502, 503];  // HTTP response codes.
const RESPONSE_TIMEOUT = 5000;  // In milliseconds.
const RESPONSE_REJECT_UNAUTHORIZED = false;  // Whether to reject "403 Unauthorized" responses.

const requestLink = (link, options) => {
  return new Promise((resolve, reject) => {
    options = Object.assign({
      method: 'HEAD',
      uri: link,
      rejectUnauthorized: RESPONSE_REJECT_UNAUTHORIZED,
      timeout: RESPONSE_TIMEOUT
    }, options);
    request(options, (error, response, body) => {
      // Always resolve (do not fail fast).
      if (error) {
        resolve({link: link, error: error});
      } else {
        resolve({link: link, status: response.statusCode});
      }
    });
  })
};

// Get linked pages in parallel.
const requestLinks = PromiseMap(links, link => {
  return requestLink(link, {method: 'HEAD'}).then(result => {
    if (result.error) {
      // If a `HEAD` request fails, try one more time but with a `GET`.
      return requestLink(link, {method: 'GET'});
    } else {
      return link;
    }
  });
}, {concurrency: 10});

requestLinks.then(results => {
  return results.filter(result => {
    return result.error || RESPONSE_ERROR_CODES.indexOf(result.status) !== -1;
  });
}).then(results => {
  if (!results.length) {
    console.log('No errors found!');
    return;
  }

  // With bad links, we need to do a little manual confirmation. For example,
  // if we get an error, it's possible the endpoint does not respond to head.
  results.forEach(result => {
    console.error(`[%s] ${result.link}`,
      result.status || (result.error ? result.error.code : 'unknown'));
  });
  process.exit(1);
});

/**
 * Grab all URLs from a tree of a parsed Markdown document.
 */
function getLinks (tree) {
  let links = [];

  if (!Array.isArray(tree)) { return links; }

  if (tree[0] === 'link') {
    // Only parse absolute links.
    var urlObj = url.parse(tree[1].href);
    if (urlObj.protocol) { links = [tree[1].href]; }
  } else {
    links = _.flatten(_.map(tree.slice(1), getLinks));
  }

  return links;
}
