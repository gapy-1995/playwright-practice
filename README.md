# Playwright-RnD

## Todo List

- [x] Create test framework follow BDD
  - [x] Implement Log handler
- [x] Implement BDD 
- [x] Implement Several test case (2 cases API + 2 case UI)
  - tag mechanism
- [ ] Setup CI/CD pipeline for that suites

---
## How to

### Install 

Clone repo and install package json with 
`npm install`

> In case playwright not been installed, run command `npm init playwright@latest -y`

### Run test

Run test by test suite
`npm run test:smokeSuite` 
or
`npm run test:apiSuite`

You can find more test suite config in `package.json` file.

#### Debug

To debug run `npx playwright test spec-file.spec.ts --debug`


To run test in UI, use this `npx playwright test --ui`

To get trace, run `npx playwright test your-spec-file.spec.ts --trace on`

##### Run specific tests
To run a single test file, pass in the name of the test file that you want to run.

`npx playwright test landing-page.spec.ts`

To run a set of test files from different directories, pass in the names of the directories that you want to run the tests in.

`npx playwright test tests/todo-page/ tests/landing-page/`

To run files that have landing or login in the file name, simply pass in these keywords to the CLI.

`npx playwright test landing login`

To run a test with a specific title, use the -g flag followed by the title of the test.

`npx playwright test -g "add a todo item"`