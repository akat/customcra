import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginActionAsync } from "../../../store/actions/loginActions";
import { Link } from "react-router-dom";
import withLoader from "../../../HOComponents/withLoader"

import "../css/module.css";
import {
  Button,
  Avatar,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper
} from "@material-ui/core/";

import LockIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  state = {
    module: "Login",
    email: null,
    pass: null
  };

  componentDidUpdate(prevProps, prevState) {
    const { history, loginStatus } = this.props;
    if(loginStatus){
      history.push('/')
    }
  }

  loginHandler = event => {
    event.preventDefault()
    const { email, pass } = this.state;
    const { LoginAction } = this.props;
    LoginAction({username: email, pass: pass, loginStatus: true})
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { classes , isLoading } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="pass"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.loginHandler}
              >Login</Button>
              <Link to="/login/resetpass">reset pass</Link>
              <div>
              {
                isLoading && ("Loading...")
              }
              </div>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state.app,
  ...state.app.user
});

const mapDispatchToProps = dispatch => ({
  LoginAction: data => dispatch(LoginActionAsync(data))
});

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoader(Login)));