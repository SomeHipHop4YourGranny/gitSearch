import React, { Component } from "react";

import "./gitData.scss";

class GitData extends Component {
  render() {
    const { userData, login, getData, setLogin, reposData } = this.props;
    return (
      <div className="GitData" style={{ margin: "20px" }}>
        <h1>Type UserName here</h1>
        <form
          action="get"
          onSubmit={e => {
            e.preventDefault();
            getData(login);
          }}
        >
          <input
            type="text"
            onChange={e => {
              setLogin(e.target.value);
            }}
          />
          <button>ok</button>
        </form>
        {userData && Object.keys(userData).length !== 0 ? (
          <div>
            <div className="userData">
              <a href={`https://github.com/${login}`}>{login}</a>
              <img
                style={{ width: "150px", height: "150px", display: "block" }}
                src={userData.avatar_url}
                alt="suka"
              />
            </div>
            <div className="reposData">
              <h2>Repositories</h2>
              {reposData && reposData.length > 0 ? (
                <ul>
                  {reposData.map(repo => (
                    <li key={repo.id}>
                      <h3>
                        <a href={repo.url}>{repo.name}</a>
                      </h3>
                      <p>{repo.description}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No repo</p>
              )}
            </div>
          </div>
        ) : (
          <h1>Not found</h1>
        )}
      </div>
    );
  }
}

export default GitData;
