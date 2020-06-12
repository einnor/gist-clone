import Controller from '@ember/controller';

export default class AddGistController extends Controller {
  gists = [
    {
      fileName: 'example.hbs',
      description: 'Just an example',
      body: '<p>An <strong>example</strong> for {{username}}</p>'
    },
    {
      fileName: 'another-example.js',
      description: 'Some JS',
      body: `
        import Component from '@glimmer/component'

        export default class MyComponent extends Component {
          variable = 'value';
        }
      `
    },
  ];
}
