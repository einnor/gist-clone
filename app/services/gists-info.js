import Service from '@ember/service';

export default class GistsInfoService extends Service {
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
