const generateCredits = creditsText => {
    if (!creditsText) {
        return '';
    }

    return `

## Credits
${creditsText}
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
    const {credits, features} = templateData;
    console.log(templateData, "templateData")
    return `
# ${templateData.projectTitle}

## Description
${templateData.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license) 
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions and more](#questions)

## Installation
${templateData.installation}

## Usage
${templateData.usage} 

## License
![License: ${templateData.license}](https://img.shields.io/badge/License-${templateData.license}-blue.svg)
Follow the link for more information on this license. https://choosealicense.com/licenses/${templateData.license}

## Contributing
${templateData.contributing}

## Tests
${templateData.tests}

## Questions
If you have any questions please contact me through gitHub [${templateData.github}](https://github.com/${templateData.github}) or through my E-mail [${templateData.email}](mailto:${templateData.email})
${generateCredits(credits)} 
${generateFeatures(features)}
`;
};
