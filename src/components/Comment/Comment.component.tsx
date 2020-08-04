import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchComments, addComment } from '../../actions/singleVideoActions';
import { StoreState } from '../../reducers';
import useInputField from '../../utils/hooks/useInputField';

const Wrapper = styled.div`
  margin: 1rem 0;

  h3 {
    margin-bottom: 0.8rem;
  }

  .add-comment {
    display: flex;
    align-items: center;
    margin-bottom: 2.3rem;
  }

  .add-comment textarea {
    background: inherit;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.darkGrey};
    color: ${(props) => props.theme.primaryColor};
    width: 100%;
    height: 100%;
  }

  .add-comment img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    object-fit: cover;
    margin-right: 1rem;
  }

  .comment {
    display: flex;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .comment img {
    width: 40px;
    object-fit: cover;
    height: 40px;
    border-radius: 20px;
    position: relative;
    top: 2px;
    margin-right: 1rem;
  }
`;

interface UserDetails {
  avatar: string;
  id: string;
}

interface CommentsProps {
  comments?: string[];
  fetchComments: (id: string) => void;
  addComment: (videoId: string, commentValue: any) => void;
  user?: any;
}

const Comment: React.FC<CommentsProps> = ({
  comments,
  user,
  fetchComments,
  addComment,
}) => {
  console.log({ comments, user });
  const comment = useInputField('');

  const { id } = useParams();

  const handleAddComment = (e) => {
    if (e.keyCode === 13) {
      if (!comment.value.trim()) {
        console.log('fil cimment');
      }

      addComment(id, comment.value);
      comment.setValue('');
    }
  };

  console.log(user.avatar);

  useEffect(() => {
    console.log('hit');
    fetchComments(id);
  }, []);

  return (
    <Wrapper>
      <h3>{comments?.length} comments</h3>
      {/* <h3>Comment Length comments</h3> */}

      <div className="add-comment">
        <img src={user.avatar} alt="avatar" />
        <textarea
          placeholder="Add a public comment"
          value={comment.value}
          onKeyDown={handleAddComment}
          onChange={comment.onChange}
        />
      </div>

      {comments &&
        comments.map((comment: any) => (
          <div key={comment.id} className="comment">
            <Link to={`/channel/${comment.User?.id}`}>
              <img src={comment.User?.avatar} alt="avatar" />
            </Link>
            <div className="comment-info">
              <p className="secondary">
                <span>
                  <Link to={`/channel/${comment.User?.id}`}>
                    {comment.User?.username}
                  </Link>
                </span>
                <span style={{ marginLeft: '0.6rem' }}>
                  {/* {timeSince(comment.createdAt)} ago */}
                </span>
              </p>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}
      <div key={1} className="comment">
        <Link to={`/channel/${user?.id}`}>
          <img src={user?.avatar} alt="avatar" />
        </Link>
        <div className="comment-info">
          <p className="secondary">
            <span>
              {/* <Link to={`/channel/${comment.User?.id}`}>
                {comment.User?.username}
              </Link> */}
              <Link to={`/channel/1`}>Username Profile Link</Link>
            </span>
            {/* <span style={{ marginLeft: "0.6rem" }}>
              {timeSince(comment.createdAt)} ago
            </span> */}
          </p>
          {/* <p>{comment.text}</p> */}
          <p>comment.text</p>
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    comments: state.video.comments,
    user: state.profile.user,
  };
};

export default connect(mapStateToProps, { fetchComments, addComment })(Comment);
