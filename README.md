# Playwright-RnD

## Todo List

- [ ] Create test framework follow TDD
  - [ ] Implement Log handler
- [ ] Implement TDD 
- [ ] Implement Several test case (10 cases API + 10 case UI)
  - Smoke test cases have prefix SM_, API is API_, Regression is RG_
- [ ] Setup API test, Smoke test suites, Regression test
- [ ] Setup CI/CD pipeline for that suites
- [ ] Setup Environment testing.
- [ ] POC test with message queue (cover all test scenario). test dir: tests/messageQueue
- [ ] Setup test report.
  - [ ] Create Fault tolerance repo 
    - Priority test failed and diagnosis test failure 
    - Counting the number test failed with same rootcause

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