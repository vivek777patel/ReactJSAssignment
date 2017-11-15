import Comment from './Comment.jsx';

var createReactClass = require('create-react-class');
var Board = React.createClass({
   getInitialState: function(){
     return {
         comments: [],
         postObject: {
              title: '',
              detailComment: ''
          },
     }
   },
   handleChangeTitle: function(evt) {
    this.state.postObject.title = evt.target.value;
  },
  handleChangeDetailComment: function(evt) {
   this.state.postObject.detailComment=evt.target.value;
 },
     clearInputs: function(){
      document.getElementById("title").value="";
      document.getElementById("detailComment").value="";
     },
    add: function(text){
        var arr = this.state.comments;
        arr.push(this.state.postObject);
        this.setState({comments: arr});
        this.clearInputs();
    },

    updateComment: function(newText,i){
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
    },
    getArray: function(){
        var arr = this.state.comments;
        return arr;
    },
    setArray: function(arr){
        this.setState({comments: arr});
    },
    eachComment: function(text,i){
        return (<Comment key={i} index={i} setArray={this.setArray} getArray={this.getArray} updateCommentText={this.updateComment} deleteCommentText={this.removeComment}>
                <h1>{text.title}</h1>
                <p>{text.detailComment}</p>
              </Comment>);
    },

    render: function(){
      return(
      <div className="three-3">
        <div className="new-post blogContainer">
          <div id="circle" className="circle"></div>
          <div className="text-button-div">
              <div className="text-box-div">
                <input type="text" id="title" name="title" placeholder="Whats Going On...!!!" value={this.state.title} onChange={this.handleChangeTitle} className="text-area-class text-box"></input>
              </div>
              <div className="text-area-div">
                <textarea name="story" id="detailComment" className="text-area-class text-area" value={this.state.detailComment} onChange={this.handleChangeDetailComment} placeholder="Tell your Today's Story...!!!" ></textarea>
              </div>
              <div className="button-div">
                <button onClick={this.add.bind(null,this.state.value)} className="btn btn-info btn-responsive my-button-class">Post</button>
              </div>
            </div>
          </div>
          <div className="postedBlogContainer">
                {this.state.comments.map(this.eachComment)}
          </div>
      </div>
      )
    },
});
export default Board;
