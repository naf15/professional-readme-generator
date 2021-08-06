// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {!license ? "" : license.badge};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {!license ? "" : license.link};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {!license ? "" : `The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Title2

## Title3

## License

${renderLicenseSection(data.license)}




`;
};

module.exports = generateMarkdown;
