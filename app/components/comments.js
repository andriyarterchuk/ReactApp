import React from 'react';

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newComment: ''
    };
  };

  renderComments(activeItem) {
    if(!activeItem.comments) {
      return null;
    };
    return activeItem.comments.map( (comment, index) => {
      let classList = index % 2 === 0 ? 'comment-author-logo even-comment' : 'comment-author-logo odd-comment';
  
      return (
        <div key={index} className='comment'>
          <div className={classList}></div>
          <h4 className='comment-text'>{comment}</h4>
        </div>
      );
    });
  }

  addComment(e) {
    if(e.key === 'Enter') { 
      this.props.addComment(this.props.activeItemIndex, this.state.newComment);
      this.setState({newComment: ''});
   };
  }
  renderCommentsBlock() {
    if (!this.props.activeItem) {
      return null;
    };

    return [
      <div key={0} className="comments-wrapper">
        <h1 className='comments-title'>Comments  #{this.props.activeItemIndex}</h1>
        {this.renderComments(this.props.activeItem)}
      </div>,
      <div key={1} className='comments-new-comment'>
        <div className='new-comment-author-logo'></div>
        <textarea className="new-comment-text"
          value={this.state.newComment}
          onChange={e => this.setState({newComment: e.target.value})}
          onKeyPress={e => this.addComment(e)} />
      </div>
    ];
  }

  render() {
    return (
      <div className='comments'>
        {this.renderCommentsBlock()}
      </div>
    );
  }
}

export default Comments;