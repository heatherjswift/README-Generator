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
    * [Questions](#questions)
    
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

    ## Questions
    If you have any questions please contact me through gitHub ${gitHubUsername} or through my E-mail ${email}
    `

}