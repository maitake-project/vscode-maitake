let vscode = require("vscode");

let configuration = undefined;

function activate(_context) {
  configuration = vscode.languages.setLanguageConfiguration("maitake", {
    onEnterRules: [continueCommentOnNewline()],
  });
}

function deactivate() {
  configuration.dispose();
}

function continueCommentOnNewline() {
  return {
    beforeText: /^\s*#.*$/,
    action: { indentAction: vscode.IndentAction.None, appendText: "# " },
  };
}

module.exports = { activate, deactivate };
