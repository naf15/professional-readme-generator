const licenseLinks = {
  'MIT' : '[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)',
  'GNU GPLv3' : '', 
  'Apache License 2.0' : ''  
}

function renderTitle(title) {!title ? '' : title};

function renderDescriptionSection(description) {!description ? '' : description};

function renderInstallatinSection(installation) {!installation ? '' : installation};

function renderUsageSection(usage) {!usage ? '' : usage};

function renderCreditsSection(credits) {!credits ? '' : credits};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {!license ? '' : `[![license](https://img.shields.io/badge/license-${license}-blue)](https://shields.io)`};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {!license ? '' : `https://choosealicense.com/licenses/${license}`};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {!license ? '' : `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`};

function renderContributingSection(contributing) {!contributing ? '' : contributing};

function renderTestsSection(tests) {!tests ? '' : tests};

function renderQuestionsSection(emailAddress, gitHubUsername) {
  cont github = `[GitHub](http://github.com${gitHubUsername})`;
  
  if (!emailAddress && !gitHubUsername) {
    return ''
  } else if (!emailAddress) {
    return `Feel free to email me at ${emailAddress} if you have any further questions.`
  } else if (!gitHubUsername) {
    return  `You can find my github at ${github}.` 
  } else {
    return `You can find my github at ${github}. Feel free to email me at ${emailAddress} if you have any further questions.`
  };
}; 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderTitle(data.title)} ${renderLicenseBadge(licenseBadges[data.license])}

## Description

${renderDescriptionSection(data.description)}

## Installation

${renderInstallatinSection(data.installation)}

## Usage

${renderUsageSection(data.usage)}

## Credits

${renderCreditsSection(data.credits)}

## License

${renderLicenseSection(data.license)}

## Contributing

${renderContributingSection(data.contributing)}

## Tests

${renderTestsSection(data.tests)}

## Questions

${renderQuestionsSection(data.emailAddress, data.gitHubUsername)}

`
};

module.exports = generateMarkdown;
