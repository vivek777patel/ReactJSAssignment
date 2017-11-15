var createReactClass = require('create-react-class');

var Comment = React.createClass({
      deleteItem: function(){
          var arr = this.props.getArray();
          var i = this.props.index;
          arr.splice(i,1);
          this.props.setArray(arr);
      },
      getInitialState: function(){
        return {
          curTime: '',
        }
      },
      componentDidMount: function() {
        setInterval( () => {
            this.setState({
            curTime : Math.round((new Date().getTime()-new Date(this.props.postTime))/1000)+'s'
          })
        },10000)
      },
      render: function(){
          return (
              <div className="commentContainer">
              {/*<div id="circle" className="circle">
                <img src="resources/images/jamesBond.jpg" className="circle"></img>
              </div>*/}
              <img src="resources/images/jamesBond.jpg" className="circle"></img>
                <div className="allComments">
                  <div className="firstLine">
                    <strong>Vivek Patel</strong>
                    <span className="username">&nbsp;<small><b>@vivek777patel</b></small></span>
                    <span className="username">&nbsp;<small><b>{this.props.postTime}</b></small></span>
                    {/*}<span className="username">&nbsp;<small><b>{this.state.curTime}</b></small></span>*/}
                    <button onClick={this.deleteItem} className="btn close btn-responsive" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="comment-text-box">{this.props.children}</div>
                </div>
              </div>
          );
      }
    });
export default Comment;
