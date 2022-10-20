'use babel';

import Atom555566sView from './atom555566s-view';
import { CompositeDisposable } from 'atom';

export default {

  atom555566sView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atom555566sView = new Atom555566sView(state.atom555566sViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atom555566sView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom555566s:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atom555566sView.destroy();
  },

  serialize() {
    return {
      atom555566sViewState: this.atom555566sView.serialize()
    };
  },

  toggle() {
    console.log('Atom555566s was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
