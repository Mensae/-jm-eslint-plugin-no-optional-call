/**
 * @file Disable the use of the optional-call operator.
 * @author Johan Meester
 * @copyright 2023 Johan Meester <johan.meester71@gmail.com>
 * @license MIT
 *
 * Modified version from `eslint-plugin-no-optional-call` by Kyle Simpson
 * published under MIT license.
 * Copyright (c) 2022 Kyle Simpson <getify@gmail.com>
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const noOptionalCallRule = require('./rules/no-optional-call');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: {
    'no-optional-call': noOptionalCallRule,
  },
};
