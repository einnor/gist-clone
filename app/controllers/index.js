import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @service gistsInfo;

  @tracked snapped = false;

  get shownGists () {
    if (this.snapped) {
      return this.gistsInfo.gists.filter((item, index) => index % 2 === 0);
    } else {
      return this.gistsInfo.gists;
    }
  }

  @action snap () {
    this.snapped = !this.snapped;
  }
}
