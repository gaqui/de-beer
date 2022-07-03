# Test Exercise POC

## Installation

**Pre-requisites**

* node v16.15.0
* npm 8.5.5

## Techologies used for writing the framework

* cypress 9.5.4
* cucumber
* multiple-cucumber-html-reporter

# Running the Tests

1. Install dependencies

```
$npm ci
```

2. Run all tests

open mode
```
$npm run test
```

headless mode
```
$npm run test:headless
```

3. Generate and open the tests report
```
$npm run generate-report
```

Take note: The generated report is located on root directory on this path `reports/index.html`

## Author
Gerald Aqui