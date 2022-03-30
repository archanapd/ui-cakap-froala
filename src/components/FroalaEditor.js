import React from "react";
// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import FroalaEditor from "react-froala-wysiwyg";
import "../App.css";

class EditorComponent extends React.Component {
  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: "Example text",
    };

    this.config = {
      placeholder: "Edit Me",
      events: {
        focus: function (e, editor) {
          console.log(editor.selection.get());
        },
      },
      src: "https://media.istockphoto.com/photos/abstract-futuristic-with-connection-lines-on-blue-background-plexus-picture-id1285395672?s=612x612",
    };
  }

  handleModelChange(model) {
    this.setState({
      model: model,
    });
  }

  render() {
    return (
      <>
        <FroalaEditor
          config={{
            charCounterCount: true,
          }}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
        <FroalaEditorView model={this.state.model} />
      </>
    );
  }
}

export default EditorComponent;
