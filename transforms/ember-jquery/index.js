const { getParser } = require('codemod-cli').jscodeshift;
const insertImportDeclaration = require('../../helpers/import');

module.exports = function transformer(file, api) {
  const j = getParser(api);

  let needsjQueryImport = false;

  let code = j(file.source)
    .find(j.CallExpression, node => {
      let id = node.callee.object && node.callee.object.name;
      let prop = node.callee.property && node.callee.property.name;

      return ['Ember', 'Em'].includes(id) && prop == '$';
    })
    .forEach(path => {
      j(path).replaceWith(j.callExpression(j.identifier('$'), path.value.arguments));
      needsjQueryImport = true;
    })
    .toSource();

  if (needsjQueryImport) {
    code = insertImportDeclaration(j, code, '$', 'jquery');
  }

  return code;
};
