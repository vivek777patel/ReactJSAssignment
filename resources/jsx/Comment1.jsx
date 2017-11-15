var createReactClass = require('create-react-class');

var Comment = React.createClass({
      getInitialState: function(){
          return {editing: false}
      },
      save: function(){
          this.updateComment();
          this.setState({editing:false});
      },
      edit: function(){
          this.setState({editing: true});
      },
      remove: function(){
          this.props.deleteCommentText(this.props.index);
      },
      deleteItem: function(){
          var arr = this.props.getArray();
          var i = this.props.index;
          arr.splice(i,1);
          this.props.setArray(arr);
      },
      updateComment: function(){
          var arr = this.props.getArray();
          var i = this.props.index;
          arr[i] = this.refs.newText.value;
          this.props.setArray(arr);
      },
      renderNormal: function(){
          return (
              <div className="commentContainer">
                <div id="circle" className="circle"></div>
                <div className="allComments">
                  <div className="firstLine">
                    <small><strong>Vivek Patel</strong></small>
                    <span>&nbsp;@vivek777patel</span>
                    <button onClick={this.deleteItem} className="btn close btn-responsive" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="comment-text-box">{this.props.children}</div>
                </div>
              </div>
          );
      },
      renderForm: function(){
          return (
              <div className="commentContainer">
                  <div className="commentText">{this.props.children}</div>
                  <button onClick={this.edit} className="button-primary">Edit</button>
                  <button onClick={this.deleteItem} className="button-danger">Remove</button>
              </div>
          );
      },
      render: function(){
        if(this.state.editing){
            return this.renderForm();
        }
          else{
              return this.renderNormal();
          }
      }
    });
export default Comment;
