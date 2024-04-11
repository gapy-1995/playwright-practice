url?: string|RegExp|((url: URL) => boolean);
In here key url, received 3 types string, regexp, function
#### Usage example
// Assigning a string value to the 'url' property
const page: Page = {
  url: 'https://example.com'
};

// Assigning a regular expression to the 'url' property
const page: Page = {
  url: /example/
};

// Assigning a function to the 'url' property
const page: Page = {
  url: (url) => url.includes('example')
};