module.exports = templateData => {
    const {} = templateData;

    return `
    #${projectTitle}

    ## Description
    ${description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    ${generateCredits(credits)}
    * [License](#license)
    ${generateFeatures(features)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    
    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ${generateCredits(credits)}

    ## License
    ${license}

    ${generateFeatures(features)}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
    `

}