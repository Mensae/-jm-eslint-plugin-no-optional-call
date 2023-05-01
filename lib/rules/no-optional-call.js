/**
 * @file Disable the use of the optional-call operator.
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
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Disallow the use of the optional-call operator',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      AvoidOptionalCallOperator: 'Avoid the use of the optional-call operator.',
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      CallExpression(node) {
        if (node.optional) {
          context.report({
            node,
            messageId: 'AvoidOptionalCallOperator',
          });
        }
      },
    };
  },
};
