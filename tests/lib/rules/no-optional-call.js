/**
 * @file Tests for the `no-optional-call` rule.
 * @author Johan Meester
 * @copyright 2023 Johan Meester <johan.meester71@gmail.com>
 * @license MIT
 *
 * Technically the same as `eslint-plugin-no-optional-call` by Kyle Simpson
 * published under MIT license.
 * Copyright (c) 2022 Kyle Simpson <getify@gmail.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-optional-call');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
  },
});

ruleTester.run('no-optional-call', rule, {
  valid: ['console?.log(42)'],

  invalid: [
    {
      code: 'console?.log?.(42)',
      errors: [
        {
          message: 'Avoid the use of the optional-call operator.',
          type: 'CallExpression',
        },
      ],
    },
  ],
});
