import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

interface MyTestButtonArgs {
  onClick: Function;
  stopPropagation: boolean;
  label: string;
}

export default class MyTestButton extends Component<MyTestButtonArgs> {
  @tracked loading: boolean = false;
  @tracked buttonText: string = this.args.label;

  // the Component should stop its own propatation, so events do not bubble up
  @action
  async btnClicked(event: MouseEvent) {
    if (this.args.stopPropagation) {
      this.buttonText = "stopped propagating events";
      event.stopPropagation();
    }
    else {
      this.buttonText = "propagating events";
    }

    // Original Code: Not Used
    try{
      this.loading = true;
    await this.args.onClick();
    this.loading = false;
    }
    catch(e){
      console.log(`error: ${e}`)
    }

  }

}
