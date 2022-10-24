<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / cdr-database

**reports on carbon removal projects and technologies**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
[![DOI](https://zenodo.org/badge/252217021.svg)](https://zenodo.org/badge/latestdoi/252217021)

[github]: https://github.com/carbonplan/cdr-database
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/carbonplan/cdr-database/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/carbonplan/cdr-database/actions/workflows/main.yaml
[mit license]: https://badgen.net/badge/license/MIT/blue

## resources

- Main website: https://carbonplan.org/
- This site: https://carbonplan.org/research/cdr-database

## to build the projects data

To run the script that generates the project data, first install the requirements:

```shell
pip install -r requirements.txt
```

You will also need to unlock the Google Sheets key using [`git-crypt`](https://github.com/AGWA/git-crypt). Unlocking is simplest using a symmetric secret key securely shared by a team member.

Finally, you may run the command to generate the projects list for all review cycles:

```shell
python scripts/build_projects.py strp2020 strp2021q1 strp2021q4 msft2021
```

## to build the site locally

Assuming you already have `Node.js` installed, you can install the build dependencies with:

```shell
npm install .
```

To start a development version of the site, simply run:

```shell
npm run dev
```

and then visit `http://localhost:5000/research/cdr-database` in your browser.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, reports, etc.). Some of the data featured here is sourced from content made available under a [CC-BY-4.0](https://choosealicense.com/licenses/cc-by-4.0/) license. We include attribution for this content, and we please request that you also maintain that attribution if using this data.

## about us

CarbonPlan is a non-profit organization that uses data and science for climate action. We aim to improve the transparency and scientific integrity of climate solutions with open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/cdr-database/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
