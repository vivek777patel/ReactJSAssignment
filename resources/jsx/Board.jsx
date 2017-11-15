import Comment from './Comment.jsx';

var createReactClass = require('create-react-class');

var Board = React.createClass({
    getInitialState: function(){
      return {
        comments: [],
        newTitle:'',
        newComment:''
      }
    },
    handleChangeTitle: function(evt) {
      this.setState({newTitle: evt.target.value});
    },
    handleChangeDetailComment: function(evt) {
      this.setState({newComment: evt.target.value});
    },
    clearInputs: function(){
      document.getElementById("title").value="";
      document.getElementById("detailComment").value="";
    },
    getArray: function(){
      var arr = this.state.comments;
      return arr;
    },
    setArray: function(arr){
        this.setState({comments: arr});
    },
    add: function(text){
      var arr = this.state.comments.reverse();
      var tmpObj = {detailComment: this.state.newComment, title: this.state.newTitle,postTime: new Date().toLocaleString()};
      arr.push(tmpObj);
      arr.reverse();
      this.setState({comments: arr});
      this.clearInputs();
    },
    eachComment: function(text,i){
      return (<Comment key={i} index={i} setArray={this.setArray} postTime={text.postTime} getArray={this.getArray} deleteCommentText={this.removeComment}>
                <h1>{text.title}</h1>
                <p>{text.detailComment}</p>
                </Comment>);
    },
    render: function(){
      return(
      <div className="three-3">
        <div className="new-post blogContainer">
          {/*<div id="circle" className="circle">
            <img src="resources/images/jamesBond.jpg" className="circle"></img>
          </div>*/}
          <img src="resources/images/jamesBond.jpg" className="circle"></img>
          <div className="text-button-div">
              <div className="text-box-div">
                <input type="text" id="title" name="title" placeholder="Whats Going On...!!!" value={this.state.title}
                onChange={this.handleChangeTitle} className="text-area-class text-box"></input>
              </div>
              <div className="text-area-div">
                <textarea name="story" id="detailComment" className="text-area-class text-area" value={this.state.detailComment}
                onChange={this.handleChangeDetailComment} placeholder="Tell your Today's Story...!!!" ></textarea>
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
