#!/usr/bin/env python3
import copy
import json

import click
import msft2021
import strp2020


@click.command()
@click.argument('rfps', nargs=-1)
@click.option('--output-projects', default='projects.js', show_default=True)
@click.option('--output-methods', default='methods.js', show_default=True)
def main(rfps, output_projects, output_methods):

    projects = []

    if 'strp2020' in rfps:
        projects.extend(strp2020.make_projects())
    if 'msft2021' in rfps:
        projects.extend(msft2021.make_projects())

    project_collection = {"type": "ProjectCollection", "projects": projects}

    write_projects(project_collection, output_projects)
    write_methods(project_collection, output_methods)

def write_projects(project_collection, output):
    collection = copy.deepcopy(project_collection)
    for project in collection['projects']:
        del project['methods']

    with open('data/' + output, "w") as f:
        f.write('module.exports=' + json.dumps(collection))

def write_methods(project_collection, output):
    methods = {}
    for project in project_collection['projects']:
        methods[project['id']] = project['methods']

    with open('data/' + output, "w") as f:
        f.write('module.exports=' + json.dumps(methods))

if __name__ == "__main__":
    main()
