const getGitRepos = async () => {
    const repoData = await fetch('https://api.github.com/users/empoole/repos')
    const repoJson = await repoData.json()
    addReposToDOM(repoJson)
}

const addReposToDOM = (repos) => {
  const reposList = document.querySelector('#git-repos ul')
  for(let repo of repos) {
    const listItem = document.createElement('li')
    const anchor = document.createElement('a')
    const desc = document.createElement('p')
    anchor.href = repo.html_url
    anchor.innerHTML = repo.name
    anchor.target = '_blank'
    desc.innerHTML = repo.description
    listItem.appendChild(anchor)
    listItem.appendChild(desc)
    reposList.appendChild(listItem)
  }
}

export default getGitRepos