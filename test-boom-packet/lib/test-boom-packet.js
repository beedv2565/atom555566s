'use babel';

import TestBoomPacketView from './test-boom-packet-view';
import { CompositeDisposable } from 'atom';

export default {

  testBoomPacketView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.testBoomPacketView = new TestBoomPacketView(state.testBoomPacketViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.testBoomPacketView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-boom-packet:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.testBoomPacketView.destroy();
  },

  serialize() {
    return {
      testBoomPacketViewState: this.testBoomPacketView.serialize()
    };
  },

  toggle() {
    console.log('TestBoomPacket was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
