[![Netlify Status](https://api.netlify.com/api/v1/badges/960d31ad-ad4d-46be-b91b-db2196d77411/deploy-status)](https://app.netlify.com/sites/notesbjtnoguera/deploys)

# Motivation
As my graduation date approaches, I've looked back at the courses and topics I've learned over the years, only to realize that I have a lot of gaps in my knowledge; this website exists as a way for me to fill in those gaps.

## Workflow

### If you want to use LaTeX and PDFs...
1. Create a folder for the topic you want to create a `.tex` and `.pdf` file for inside `static`

### If you want to use KaTeX and coding blocks...
1. Create a folder for it inside `docs`


## Website setup

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```console
$ yarn
```

### Local Development

```console
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```console
$ USE_SSH=true yarn deploy
```

Not using SSH:

```console
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
