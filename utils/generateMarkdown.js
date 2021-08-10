function renderTitle(title) {!title ? '' : title};

function renderDescriptionSection(description) {!description ? '' : description};

function renderInstallatinSection(installation) {!installation ? '' : installation};

function renderUsageSection(usage) {!usage ? '' : usage};

function renderCreditsSection(credits) {!credits ? '' : credits};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {!license ? '' : license.badge};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {!license ? '' : license.link};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {!license ? '' : `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`};

function renderContributingSection(contributing) {!contributing ? '' : contributing};

function renderTestsSection(tests) {!tests ? '' : tests};

function renderQuestionsSection(questions) {!questions ? '' : questions}; 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderTitle(data.title)} ${renderLicenseBadge(data.license)}

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
