const { getParser } = require('codemod-cli').jscodeshift;

module.exports = function transformer(file, api) {
  const j = getParser(api);

  let hasjQueryImport = false;
  let needsjQueryImport = false;

  j(file.source)
    .find(j.ImportDeclaration, {
      source: {
        value: 'jquery',
      },
    })
    .forEach(() => {
      hasjQueryImport = true;
    });

  let code = j(file.source)
    .find(j.CallExpression, {
      callee: {
        object: {
          type: 'ThisExpression',
        },
        property: {
          name: '$',
        },
      },
    })
    .forEach(path => {
      const args = path.node.arguments;
      args.push(j.memberExpression(j.thisExpression(), j.identifier('element')));
      j(path).replaceWith(j.callExpression(j.identifier('$'), args));
      needsjQueryImport = true;
    })
    .toSource();

  return j(code)
    .find(j.Program)
    .forEach(path => {
      if (needsjQueryImport && !hasjQueryImport) {
        let jqueryImport = j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier('$'))],
          j.literal('jquery')
        );
        path.value.body.unshift(jqueryImport);
      }
    })
    .toSource({ quote: 'single' });
};
