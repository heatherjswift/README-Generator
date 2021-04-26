const generateCredits = creditsText => {
    if (!creditsText) {
        return '';
    }

    return `

## Credits
${creditsText}
`;
};

const generateLicense = licenseChoice => {
    if (!licenseChoice) {
        return '';
    }

    return `
## License
![License: ${licenseChoice}](https://img.shields.io/badge/License-${licenseChoice}-blue.svg)
Follow the link for more information on this license. https://choosealicense.com/licenses/${licenseChoice}
`;
};

const generateFeatures = featuresText => {
    if (!featuresText) {
        return '';
    }

    return `
## Features
${featuresText}
`;
};

module.exports = templateData => {
    const {credits, features, license} = templateData;
    console.log(templateData, "templateData")
    return `
# ${templateData.projectTitle}

## Description
${templateData.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${templateData.installation}

## Usage
${templateData.usage} ${generateCredits(credits)}

${generateLicense(license)}  ${generateFeatures(features)}

## Contributing
${templateData.contributing}

## Tests
${templateData.tests}

## Questions
If you have any questions please contact me through gitHub [${templateData.github}](https://github.com/${templateData.github}) or through my E-mail [${templateData.email}](mailto:${templateData.email})
`

};



// ${generateCredits(creditsLink)}
// ${generateLicense(licenseLink)}   
// ${generateFeatures(featuresLink)}
