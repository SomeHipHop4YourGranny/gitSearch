import React, { Component } from "react";
import { connect } from "react-redux";
import { GitData } from "components/index";
import { getData, setLogin } from "store/actions";
import { bindActionCreators } from "redux";

class GitDataCon extends Component {
  render() {
    const {
      userData,
      login,
      getData,
      setLogin,
      reposData,
      isLoading,
    } = this.props;
    return (
      <div>
        {isLoading ? (
          <h2>Loading</h2>
        ) : (
          <GitData
            login={login}
            userData={userData}
            reposData={reposData}
            setLogin={setLogin}
            getData={getData}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.git.login,
    userData: state.git.userData,
    reposData: state.git.reposData,
    isLoading: state.git.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getData, setLogin }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitDataCon);
