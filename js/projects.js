import { Octokit } from "https://esm.sh/@octokit/core";

const getGithubRepo = async () => {
  try {
    const octokit = new Octokit();

    const data = await octokit.request("GET /users/{username}/repos", {
      username: "victor-web-dev",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};

const fillContainer = async () => {
  const div = document.getElementById("project-items-container");
  const github = await getGithubRepo();

  if (!github) {
    div.innerHTML = "Loading...";
    return;
  } else {
    div.innerHTML = "";
    github.data.forEach((el) => {
      div.innerHTML += `<div class="github-card">
        <div>
            <a href="${el.html_url}" target="_blank" rel="noopener noreferrer">${el.name}</a>
        </div>
    </div>`;
    });
    return;
  }
};

fillContainer();
