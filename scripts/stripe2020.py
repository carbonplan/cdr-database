import json

from utils import get_sheet, make_metric, make_project, maybe_float


def make_projects():
    data = get_sheet("Sheet1", "Stripe reports 0.1 [internal]").loc[:23]

    metrics = [
        "mechanism",
        "volume",
        "negativity",
        "permanence",
        "additionality",
        "cost",
        "specificity",
    ]

    metric_keys = [
        "name",
        "geometry",
        "value",
        "units",
        "notes",
        "comment",
        "rating",
        "removal",
        "emissions",
        "kind",
        "counterfactual",
        "removal",
        "avoided",
    ]

    tag_keys = data.columns.levels[0][data.columns.levels[0].str.startswith("tag")]
    tag_keys = [(t, "") for t in tag_keys]

    projects = []
    for i, row in data.iterrows():
        project = make_project(row[("name", "")])
        tags = row[tag_keys].to_list()
        if "" in tags:
            tags.remove("")
        tags = [t.lower().strip() for t in tags]
        project["tags"].extend(tags)
        project["id"] = row[("id", "")]
        project["description"] = row[("description", "")]
        project["location"] = {
            "name": row[("location", "name")],
            "geometry": json.loads(row[("location", "geometry")]),
        }
        project["source"] = {
            "name": row[("source", "name")],
            "license": row[("source", "license")],
            "url": row[("source", "url")],
        }
        project["revisions"] = json.loads(row[("revisions", "")])
        for name in metrics:
            m = make_metric(name)
            for key in metric_keys:
                try:
                    val = row[(name, key)]
                except KeyError:
                    continue
                else:
                    m[key] = maybe_float(val)

            project["metrics"].append(m)
        projects.append(project)

    return projects
