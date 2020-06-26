module.exports = {
  // '*.md,!test/snapshots/**/*.md,!test/**/snapshots/**/*.md,!locales/README.md': [
  //   (filenames) => filenames.map((filename) => `remark ${filename} -qfo`),
  //   'git add',
  // ],
  'package.json': ['fixpack', 'git add'],
  '*.js': ['eslint --fix', 'git add ']
};
