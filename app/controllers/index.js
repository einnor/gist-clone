import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { fadeOut, fadeIn } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';

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

  transition = function * ({ insertedSprites, keptSprites, removedSprites }) {
    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      fadeIn(sprite);
      move(sprite);
    }

    for (let sprite of keptSprites) {
      move(sprite);
    }

    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: window.innerWidth });
      fadeOut(sprite);
      move(sprite);
    }
  }
}
