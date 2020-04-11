
const clickSignals = [
  {
    "name": "clickOn",
    "on": [
      {
        "events": "symbol:click",
        "update": "item()"
      }
    ]
  },
  {
    "name": "clickOff",
    "on": [
      {
        "events": "*:click[event.shiftKey]",
        "update": "{}"
      }
    ]
  }
]

export default clickSignals