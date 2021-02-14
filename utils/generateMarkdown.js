// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![GitHub](https://img.shields.io/badge/License-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `* Licensed under the [${license} License]('LICENSE')`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
## License & copyright
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let date = new Date();
  console.log(date);

return `
# ${data.title}

## Description
* ${data.description}

## Install with
* ${data.installation}

## Built with
* ${data.languages}

## Contributions & Contact Info
${data.name}
* Find me on [GitHub](https://github.com/${data.github})
* Email me at ${data.email}
  
## Screenshots/Tests
* ${data.tests}

${renderLicenseSection(data.license)}

### ©️${date.getFullYear()} ${data.github}, Inc
  `;
}

module.exports = generateMarkdown;
