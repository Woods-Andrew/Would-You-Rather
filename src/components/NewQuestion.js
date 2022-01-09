// Packages
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// Action Creators
import { handleSaveQuestion } from '../actions/shared';
// Components
import Nav from './Nav';
import LoginRedirect from './LoginRedirect';
// Material UI
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
// Utils
import { theme } from '../utils/theme';

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    this.props.dispatch(handleSaveQuestion(optionOneText, optionTwoText));
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }));
  }

  render() {

    // Redirect to login page if app is in logged out state
    if (this.props.loggedOut) {
      return <LoginRedirect afterLogin='/add'/>
    }

    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome) {
      return <Redirect to={{ pathname: '/home' }} />
    }

    return (
      <div className='new-question'>
        <Nav />
        <h3>Add Your Question</h3>
        <h2>Would You Rather ...</h2>
        <textarea
          className='textarea'
          placeholder='Enter Option One Here'
          value={optionOneText}
          onChange={this.handleChange('optionOneText')}
        />
        <textarea
          className='textarea'
          placeholder='Enter Option Two Here'
          value={optionTwoText}
          onChange={this.handleChange('optionTwoText')}
        />
        <MuiThemeProvider theme={theme}>
          <Button
            variant='outlined'
            size='small'
            color='primary'
            onClick={this.handleSubmit}
            disabled={optionOneText === '' || optionTwoText === ''}
          >
            Submit
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loggedOut: authedUser === null
});

export default connect(mapStateToProps)(NewQuestion);
