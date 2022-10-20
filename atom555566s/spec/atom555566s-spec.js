'use babel';

import Atom555566s from '../lib/atom555566s';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Atom555566s', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('atom555566s');
  });

  describe('when the atom555566s:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.atom555566s')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'atom555566s:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.atom555566s')).toExist();

        let atom555566sElement = workspaceElement.querySelector('.atom555566s');
        expect(atom555566sElement).toExist();

        let atom555566sPanel = atom.workspace.panelForItem(atom555566sElement);
        expect(atom555566sPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'atom555566s:toggle');
        expect(atom555566sPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.atom555566s')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'atom555566s:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let atom555566sElement = workspaceElement.querySelector('.atom555566s');
        expect(atom555566sElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'atom555566s:toggle');
        expect(atom555566sElement).not.toBeVisible();
      });
    });
  });
});
