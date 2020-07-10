import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CardTemplate from './CardTemplate';

const QuestionListItem = props => {
    const { name, avatar } = props.authedUser
    const { optionOne, id } = props.question

    return (
        <li>
            <CardTemplate
                title={`${name} asks:`}
                avatar={avatar}
            >
                <h4>Would you rather...</h4>
                <p>...{optionOne.text}...</p>
                <Link to={`/questions/${id}`}>View Full</Link>
            </CardTemplate>
        </li>
    );
};

function mapStateToProps ({ authedUser, questions }, { id }) {
    return {
      authedUser,
      question: questions[id]
    }
  };
  
  export default connect(mapStateToProps)(QuestionListItem);