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
  const div = document.getElementById("items-container");
  const github = await getGithubRepo();

  if (!github) {
    div.innerHTML = "Loading...";
    return;
  } else {
    div.innerHTML = "";
    github.data.forEach((el) => {
      div.innerHTML += `<a class="github-item" href="${el.html_url}">
        <div>
            <h2>${el.name}</h2>
        </div>
        <div>
            <p>Language: ${el.language}</p>
            <p>Visibility: ${el.visibility}</p>
            <p>${
              el.description !== null ? "Description: " + el.description : ""
            }</p>
        </div>
    </a>`;
    });
    return;
  }
};

fillContainer();
