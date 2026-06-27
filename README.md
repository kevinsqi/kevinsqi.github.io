# kevinqi.com

## Developing

Prerequisites:

```
nvm use
```

Install dependencies and run the Next dev server:

```
yarn install
yarn dev
```

The server will be running on `localhost:3000`.

## Building

```
yarn build
```

Next writes the static export to `out/`.

## Deploying

Push to `main`. GitHub Actions builds the static export and deploys `out/` to GitHub Pages.

In the repository's GitHub Pages settings, set the publishing source to GitHub Actions.
