function insertImportDeclaration(j, code, specifier, source) {
  let hasjQueryImport = Boolean(
    j(code).find(j.ImportDeclaration, {
      source: {
        value: 'jquery',
      },
    }).length
  );

  if (hasjQueryImport) {
    return code;
  }

  return j(code)
    .find(j.Program)
    .forEach(path => {
      let jqueryImport = j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier(specifier))],
        j.literal(source)
      );
      path.value.body.unshift(jqueryImport);
    })
    .toSource({ quote: 'single' });
}

module.exports = insertImportDeclaration;
