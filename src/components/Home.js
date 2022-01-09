// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Utils
import { sortByTime, getUnanswered } from '../utils/helpers';
// Components
import Nav from './Nav';
import LoginRedirect from './LoginRedirect';
import Question from './Question';
// Material UI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/theme';

class Home extends Component {

  // This is to toggle the state fot he questiones from answered to unanswered.
  // Default value will always be unanswered.
  state = {
    value: 0,
  };

  // This will handle the toggle or change between the answered and he unanswered.
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    // Redirect to login page if the app's state is logout
    if (this.props.loggedOut) {
      return <LoginRedirect afterLogin='/home'/>
    }

    const questionIds = this.state.value === 0
      ? this.props.unansweredIds
      : this.props.answeredIds;

    return (
      <div className='home'>
        <Nav />
        <MuiThemeProvider theme={theme}>
          <div className='tabs-container'>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Unanswered" />
              <Tab label="Answered" />
            </Tabs>
          </div>
        </MuiThemeProvider>
        <div className='questions-container'>
          {questionIds.length === 0 && <p>No questions here!</p>}
          <ul>
            {questionIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authedUser }) => {
  const user = users[authedUser];
  const answeredIds = user ? Object.keys(user['answers']) : [];
  const unansweredIds = user ? getUnanswered(Object.keys(questions), answeredIds) : [];
  return {
    loggedOut: authedUser === null ,
    answeredIds: sortByTime(questions, answeredIds),
    unansweredIds: sortByTime(questions, unansweredIds)
  }
};

export default connect(mapStateToProps)(Home);
