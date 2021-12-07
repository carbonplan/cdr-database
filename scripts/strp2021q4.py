import json

from utils import get_sheet, make_metric, make_project, maybe_float


def make_projects():
    data = get_sheet("Sheet1", "Stripe reports fall 2021 [internal]").loc[:189]

    metrics = [
        "mechanism",
        "volume",
        "negativity",
        "permanence",
        "additionality",
        "price",
        "specificity",
    ]

    metric_keys = [
        "name",
        "value",
        "units",
        "notes",
        "comment",
        "rating",
    ]

    tag_keys = data.columns.levels[0][data.columns.levels[0].str.startswith("tag")]
    tag_keys = [(t, "") for t in tag_keys]

    projects = []
    for i, row in data.iterrows():
        project = make_project(row[("id", "")])
        tags = row[tag_keys].to_list()
        if "" in tags:
            tags.remove("")
        tags = [t.lower().strip() for t in tags]
        project["tags"].extend(tags)
        project["id"] = row[("id", "")]
        project["applicant"] = row[("applicant", "")]
        project["description"] = row[("description", "")]
        project["rating"] = row[("rating", "")]
        project["keywords"] = row[("keywords", "")]
        project["methods"] = row[("methods", "")]
        project["location"] = {
            "name": row[("location", "name")],
        }
        project["source"] = {
            "name": row[("source", "name")],
            "id": row[("source", "id")],
            "date": row[("source", "date")],
            "license": row[("source", "license")],
            "url": row[("source", "url")],
        }
        project["revisions"] = json.loads(row[("revisions", "")])
        project["documentation"] = {
            "name": row[("documentation", "name")],
            "url": row[("documentation", "url")],
        }
        project["notes"] = row[("notes", "")]
        for name in metrics:
            m = make_metric(name)
            for key in metric_keys:
                try:
                    val = row[(name, key)]
                except KeyError:
                    continue
                else:
                    if val:
                        m[key] = maybe_float(val)
                    elif key in ['value', 'rating']:
                        m[key] = -9999

            project["metrics"].append(m)
        if row[('flag', '')] != 'x':
            projects.append(project)

    return projects
