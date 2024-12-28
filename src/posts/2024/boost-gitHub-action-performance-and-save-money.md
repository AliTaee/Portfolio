---
title: 'Boost GitHub Action Performance and Save Money'
description: 'By adding just simple lines of code improve performance and save money.'
date: '2024-11-23'
image: /blog/todd-diemer-R-CYJA4s4sk-unsplash.jpg
imageAppreciation: Photo by <a class="link" href="https://unsplash.com/@todd_diemer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Todd Diemer</a> on <a class="link" href="https://unsplash.com/photos/black-jet-planes-R-CYJA4s4sk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
imageAlt: black jet planes
published: true
---

## Contents

## Intro

While working on component library which I made few weeks ago, I noticed that the GitHub workflow actions I set up were taking nearly 6 minutes to complete.

### Here's a list of my GitHub actions:

- Unit test: (install dependencies, run unit tests)
- Size limit: (install dependencies, build the project, and check the size of build)
- Release: (install dependencies, build the project, create tags, and publish the package)

As you can see, <span class="gradient-heading">"install dependencies"</span> is common across all these actions and consumes significant time. I researched how to cache these dependencies and found a solution.

## Solution

In your GitHub workflow action, before installing dependencies, you can add this step to cache them:

yarn:

```yaml
- name: Cache Node Modules
        uses: actions/cache@v4
        with:
          path: |
            ~/.yarn/cache
            node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
```

npm:

```yaml
- name: Cache Node Modules
  uses: actions/cache@v4
  with:
    path: |
      ~/.npm
      node_modules
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-
```

## Result

By implementing this cache system in our GitHub workflow action, I reduced the runtime of our GitHub Actions in this project from <span class="text-red-500">6</span> minutes to just <span class="text-lime-500">2.30</span> seconds. Not only did this improve speed, but it also reduced our GitHub costs. We're saving money by enhancing performance!
