#!/usr/bin/env python3

import json

import click
import msft2021
import stripe2020


@click.command()
@click.argument('rfps', nargs=-1)
@click.option('--output', default='data.js', show_default=True)
def main(rfps, output):

    projects = []

    if 'stripe2020' in rfps:
        projects.extend(stripe2020.make_projects())
    if 'msft2021' in rfps:
        projects.extend(msft2021.make_projects())

    project_collection = {"type": "ProjectCollection", "projects": projects}

    write_projects(project_collection, output)


def write_projects(project_collection, output):
    with open(output, "w") as f:
        f.write('module.exports=' + json.dumps(project_collection))


if __name__ == "__main__":
    main()
