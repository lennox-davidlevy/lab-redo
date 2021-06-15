# Redoing the Lab

clone the repo locally, and make sure it works

```
$ git clone
$ cd lab-redo
$ npm i
$ npm start
$ npm test
```

delete .git folder, and reinitialize git

```
$ rm -rf .git
$ git init
```

add files back in to git and commit

```
$ git add .
$ git commit -m "first commit"
```

Create new repo in squad
Then push to this repo to your gogs squad repository

sign in to Openshift

```
$ icc cohort9-bc-east
$ oc console
```

get argoCD login using igc

```
$ igc credentials
```
