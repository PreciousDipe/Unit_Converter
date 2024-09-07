# Unit Converter Pipeline

This repository contains a Node.js application automated using **GitHub Actions** to create a ci/cd pipeline. The pipeline automates the process of build, test, and deploy processes of the application to a staging environment on .

## CI/CD Pipeline Overview

### Workflow File

The pipeline is defined in the `.github/workflows/ci-pipeline.yaml`, which triggers the workflow on push to the `main` branch.

### Pipeline Jobs

1. **build_and_test Process**:
   - I used Github-hosted ubuntu runner for the build_and_test job because i am familar with working with ubuntu
   - I created steps some steps to run on the runner
   - My first step was using the checkout action to fetch the latest version of the code from the repository
   - Then I used the setup-node@v4 action to setup Nodejs on my runner, i used version 4 because it is compartible with node version 18 which is the version to was used for creating the application
   - The next step i created was used to install the dependencies from my package.json file which will be used to download resources needed for running the application
   - The next steps uses npm to install the dependencies, builds the application and runs unit tests for functions in the applications

3. **Deploy**:
   - I created another Github-hosted ubuntu runner for the deploy job, because in github actions when using github hosted runners, jobs runs on different runners.
   - I used the needs keyword and the condition that only when the build_and_test job is successful the deploy job should run, this ensures that all jobs must pass for the workflow to be sucessful