const { getParser } = require('codemod-cli').jscodeshift;
const insertImportDeclaration = require('../../helpers/import');

module.exports = function transformer(file, api) {
  const j = getParser(api);

  let needsjQueryImport = false;

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

  if (needsjQueryImport) {
    code = insertImportDeclaration(j, code, '$', 'jquery');
  }

  return code;
};
