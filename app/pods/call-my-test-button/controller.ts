import Controller from '@ember/controller';
import {action} from "@ember/object"

export default class CallMyTestButton extends Controller{
  @action
	  async longAction() {
		await fetch('https://espn.com')
	  }

}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'call-my-test-button': CallMyTestButton;
  }

}
