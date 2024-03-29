//
// npm run new:sfc -- --tag=p
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Component category?',
        choices: ['ui', 'common', 'model'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have styled-components?',
      },
      // {
      //   type: 'confirm',
      //   name: 'have_props',
      //   message: 'Is it have props?',
      // },
      {
        type: 'confirm',
        name: 'is_memo',
        message: 'Is it using memo?',
      },
      {
        type: 'confirm',
        name: 'have_hooks',
        message: 'Is it have hooks?',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir /*, have_props*/ } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const abs_path = `src/components/${path}`;
      const type_annotate =
        /*have_props ? */ 'React.FC<Props>'; /*: 'React.FC'*/
      const props = /*have_props ?*/ '(props)'; /*: '()'*/
      const tag = args.tag ? args.tag : 'div';

      const snake_name = snakeCase(component_name);

      return {
        ...answers,
        path,
        abs_path,
        type_annotate,
        props,
        tag,
        snake_name,
      };
    });
  },
};

/**
 * キャメルケースへ変換 sampleString
 * @param string
 * @return string
 */
function camelCase(str) {
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str.replace(/[-_](.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

/**
 * スネークケースへ変換 sample_string
 * @param string
 * @return string
 */
function snakeCase(str) {
  var camel = camelCase(str);
  return camel.replace(/[A-Z]/g, function (s) {
    return '_' + s.charAt(0).toLowerCase();
  });
}
