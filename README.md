# cypress-test

## How to start a new cypress project from scratch

- create a git repo and clone it (go to [GitHUB.com](https://github.com))
- type `npm init -y`
- type `npm i cypress --save-dev`
- open file _package.json_,  add the following line to "scripts" key: `"e2e": "cypress open"`
- create a file named _cypress.json_ at the root of your project with the configuration
- type `npm run e2e`. The first time it will create a folder named _cypress_
- place your _.spec.js_ files into _./cypress/integration_ folder.
- run again `npm run e2e` and select your test to run it

_package.json_ example:

```json
{
  "name": "cypress-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "e2e": "cypress open"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jlcampana/cypress-test.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jlcampana/cypress-test/issues"
  },
  "homepage": "https://github.com/jlcampana/cypress-test#readme",
  "devDependencies": {
    "cypress": "^7.6.0"
  }
}
```

_cypress.json_ example:

```json
{
  "baseUrl": "https://fistro.com",
  "defaultCommandTimeout": 10000
}
```

