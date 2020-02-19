import Component from '@glimmer/component'
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking'

interface MyTestButtonArgs {
  onClick: Function
}

export default class MyTestButton extends Component<MyTestButtonArgs> {
  @tracked loading: boolean = false;

  @action
  async btnClicked(event: MouseEvent) {
      event.stopPropagation();
      this.loading = true;
      await this.args.onClick();
      this.loading = false;
  }

}
