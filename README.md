# Unit Converter Pipeline
![status badge](https://github.com/PreciousDipe/Unit_Converter/tree/main/.github/workflows/ci-pipeline.yaml/badge.svg)

This repository contains a Node.js application automated using **GitHub Actions** to create a ci/cd pipeline. The pipeline automates the process of build, test, and deploy processes of the application to a staging environment on Netlify .

## CI/CD Pipeline Overview

### Workflow File

The pipeline is defined in the `.github/workflows/ci-pipeline.yaml`, which triggers the workflow on push to the `main` branch.

### Pipeline Jobs

1. **build_and_test Process**:
   - I used a GitHub-hosted Ubuntu runner for the build_and_test job because I'm familiar with working on Ubuntu.
   - I created several steps that ran on the runner
   - The first step was using the actions/checkout@v4 action to fetch the latest version of the code from the repository.
   - Then, I used the setup-node@v4 action to set up Node.js on the runner. I used version 4 because it's compatible with Node.js version 18, which was used to create the application and its a stable version.
   - The next step installs the dependencies from the package.json file, which are needed to run the application.
   - After that, I set steps to build the application and run unit tests using npm to make sure everything works correctly.
   - 
2. **Deploy**:
   - I created another GitHub-hosted Ubuntu runner for the deploy job because, when using GitHub-hosted runners, jobs run on different machines.
   - I used the needs keyword to ensure the deploy job only runs if the build_and_test job is successful. This way, the deployment only happens if everything passes in the previous steps.
   - For deployment, I used Netlify. I set up the Netlify action from the GitHub Marketplace, which requires my Netlify personal access token and site ID to authenticate and deploy the application.
