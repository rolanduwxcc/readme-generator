// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `
    #License Badger!
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    return `
      #License Link!
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
    #License Section
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    * ${data.description}
    * ${data.installation}
    * ${data.languages}
    * ${data.license}
    * ${data.contributions}
    * ${data.tests}
    * ${data.github}
    * ${data.email}
  `;
}

module.exports = generateMarkdown;
