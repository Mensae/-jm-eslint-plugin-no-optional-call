# @jm/eslint-plugin-no-optional-call

An ESLint plugin to disable the use of the optional-call operator.

Original version: [`eslint-plugin-no-optional-call`](https://github.com/getify/eslint-plugin-no-optional-call) by Kyle Simpson and released under the MIT License.
This fixes a TypeError with the latest version of ESLint and is formatted
according the latest ESLint specs.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm install eslint --save-dev
```

Next, install `eslint-plugin-no-optional-call`:

```sh
npm install eslint-plugin-no-optional-call --save-dev
```

## Usage

Add `no-optional-call` to the plugins section of your `.eslintrc` configuration
file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@jm/no-optional-call"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@jm/no-optional-call/no-optional-call": "error"
  }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                               | Description                                    |
| :------------------------------------------------- | :--------------------------------------------- |
| [no-optional-call](docs/rules/no-optional-call.md) | Disallow the use of the optional-call operator |

<!-- end auto-generated rules list -->
