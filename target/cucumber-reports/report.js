$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("event.feature");
formatter.feature({
  "line": 1,
  "name": "verify admin can add a event and edit event",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "admin  should be able to add  an event with mantatory field",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add--an-event-with-mantatory-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@janci"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "admin is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters email as \"email\", password as \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin should login and see dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin is on vendorlist page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "admin  add the event for vendor with name \"\u003cvendor name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "admin can see the list of events page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin can click on add event",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "admin can see the creat event page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "admin enters the event details as \"\u003cevent name\u003e\",\"\u003cevent description\u003e\",\"\u003cevent start time\u003e\",\"\u003cevent end time\u003e\",\"\u003clognitude\u003e\",\"\u003cevent start date\u003e\",\"\u003cevent end date\u003e\",\"\u003cevent category\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003clatitude\u003e\",\"\u003cterms and conditions\u003e\",\"\u003cimage\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "admin should able to see the added event \"\u003cevent name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add--an-event-with-mantatory-field;",
  "rows": [
    {
      "cells": [
        "vendor name",
        "event name",
        "event description",
        "event start time",
        "event end time",
        "lognitude",
        "event start date",
        "event end date",
        "event category",
        "address",
        "city",
        "latitude",
        "terms and conditions",
        "image"
      ],
      "line": 16,
      "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add--an-event-with-mantatory-field;;1"
    },
    {
      "comments": [
        {
          "line": 17,
          "value": "#    |a_gosia2   |chrismas party|fun          |09:00           |06:57         |51.5653832|11/11/2018     |12/11/2018    |Celebration   |east   |london|-0.0000000|18+             |C:\\Users\\Ravi\\Desktop\\Project\\image.jpg|"
        }
      ],
      "cells": [
        "a_gosia2",
        "chrismas party2",
        "fun",
        "09:00",
        "06:57",
        "51.5653832",
        "11/11/2018",
        "12/11/2018",
        "Celebration",
        "east",
        "london",
        "-0.0000000",
        "18+",
        "C:\\Users\\Ravi\\Desktop\\Project\\image.jpg"
      ],
      "line": 18,
      "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add--an-event-with-mantatory-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10147934394,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#    |a_gosia2   |chrismas party|fun          |09:00           |06:57         |51.5653832|11/11/2018     |12/11/2018    |Celebration   |east   |london|-0.0000000|18+             |C:\\Users\\Ravi\\Desktop\\Project\\image.jpg|"
    }
  ],
  "line": 18,
  "name": "admin  should be able to add  an event with mantatory field",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add--an-event-with-mantatory-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@janci"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "admin is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "admin enters email as \"email\", password as \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "admin clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "admin should login and see dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "admin is on vendorlist page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "admin  add the event for vendor with name \"a_gosia2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "admin can see the list of events page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "admin can click on add event",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "admin can see the creat event page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "admin enters the event details as \"chrismas party2\",\"fun\",\"09:00\",\"06:57\",\"51.5653832\",\"11/11/2018\",\"12/11/2018\",\"Celebration\",\"east\",\"london\",\"-0.0000000\",\"18+\",\"C:\\Users\\Ravi\\Desktop\\Project\\image.jpg\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "admin should able to see the added event \"chrismas party2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_login_page()"
});
formatter.result({
  "duration": 131782505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 23
    },
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "MyStepDefs.admin_enters_email_as_password_as(String,String)"
});
formatter.result({
  "duration": 399148260,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 4804256198,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_should_login_and_see_dashboard_page()"
});
formatter.result({
  "duration": 53806064,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_vendorlist_page()"
});
formatter.result({
  "duration": 2054349354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a_gosia2",
      "offset": 43
    }
  ],
  "location": "MyStepDefs.admin_add_the_event_for_vendor_with_name(String)"
});
formatter.result({
  "duration": 1228636379,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_can_see_the_list_of_events_page()"
});
formatter.result({
  "duration": 41250690,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_can_click_on_add_event()"
});
formatter.result({
  "duration": 703215303,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_can_see_the_creat_event_page()"
});
formatter.result({
  "duration": 2210133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chrismas party2",
      "offset": 35
    },
    {
      "val": "fun",
      "offset": 53
    },
    {
      "val": "09:00",
      "offset": 59
    },
    {
      "val": "06:57",
      "offset": 67
    },
    {
      "val": "51.5653832",
      "offset": 75
    },
    {
      "val": "11/11/2018",
      "offset": 88
    },
    {
      "val": "12/11/2018",
      "offset": 101
    },
    {
      "val": "Celebration",
      "offset": 114
    },
    {
      "val": "east",
      "offset": 128
    },
    {
      "val": "london",
      "offset": 135
    },
    {
      "val": "-0.0000000",
      "offset": 144
    },
    {
      "val": "18+",
      "offset": 157
    },
    {
      "val": "C:\\Users\\Ravi\\Desktop\\Project\\image.jpg",
      "offset": 163
    }
  ],
  "location": "MyStepDefs.admin_enters_the_event_details_as(String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10247664569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chrismas party2",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.admin_should_able_to_see_the_added_event(String)"
});
formatter.result({
  "duration": 340752400,
  "status": "passed"
});
formatter.after({
  "duration": 335448651,
  "status": "passed"
});
});