function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/License-${license}-e6e7bb.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  } else if (license == "MIT") {
    return 'https://opensource.org/license/mit/';
  } else if (license == "APACHE2.0") {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license == "GPL3.0") {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else if (license == "BSD3") {
    return 'https://opensource.org/license/bsd-3-clause/';
  }
}

function renderLicenseSection(license) {
  if (license !== 'none') {
    return `Licensed under the ${license} license.`;
  }
  return "There is no license for this project.";
}

function generateMarkdown(data) {
  return `# ${data.title}

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  The code may be accessed by visiting the site URL (${data.link}).
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
