import pathlib

import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pandas import DataFrame, MultiIndex

SECRET_FILE = pathlib.Path(__file__).parents[1] / 'secrets/google-sheets-key.json'


def ffill(data):
    """
    helper function to forward fill column labels
    """
    last = data[0]
    new = []
    for line in data:
        if line:
            new.append(line)
            last = line
        else:
            new.append(last)
    return new


def get_sheet(sheet, doc):
    """
    helper function to open a specific google sheet
    """
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

    credentials = ServiceAccountCredentials.from_json_keyfile_name(SECRET_FILE, scope)

    gc = gspread.authorize(credentials)
    wks = gc.open(doc)
    sheet = wks.worksheet(sheet)
    data = sheet.get_all_values()
    h1 = ffill(data[0])

    # remove extra whitespace
    h1 = [k.strip() for k in h1]
    h2 = [k.strip() for k in data[1]]

    # create a multiindex
    columns = MultiIndex.from_tuples(zip(h1, h2))

    # populate the dataframe
    df = DataFrame(data[2:], columns=columns)
    return df


def make_project(id):
    """
    return a template project
    """
    return {
        "type": "Project",
        "metrics": [],
        "tags": [],
        "id": id,
        "description": "",
        "applicant": "",
    }


def make_metric(name):
    """
    return a template metric
    """
    return {
        "type": "Metric",
        "name": name,
        "value": "",
        "units": "",
        "rating": "",
        "notes": "",
        "comment": "",
    }


def maybe_float(value):
    new = value.replace("$", "").replace(",", "")
    try:
        return float(new)
    except Exception:
        return value.strip()
