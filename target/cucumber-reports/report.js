$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("event.feature");
formatter.feature({
  "line": 1,
  "name": "verify admin can add a event and edit event",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10767056697,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "admin  should be able to add",
  "description": "",
  "id": "verify-admin-can-add-a-event-and-edit-event;admin--should-be-able-to-add",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@dataBase"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "admin is on vendorlist page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "admin add the event for vendor",
  "rows": [
    {
      "cells": [
        "vendor"
      ],
      "line": 32
    },
    {
      "cells": [
        "a_gosia2"
      ],
      "line": 33
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "admin can see the list of events page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "admin can click on add event",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "admin can see the creat event page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "admin enters the event details",
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
      "line": 38
    },
    {
      "cells": [
        "a_gosia2",
        "chrismas part",
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
      "line": 39
    },
    {
      "cells": [
        "a_gosia2",
        "chrismas part1",
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
      "line": 40
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "admin should able to see the added event \"\u003cevent name\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_vendorlist_page()"
});
formatter.result({
  "duration": 268389602,
  "error_message": "java.lang.NullPointerException\r\n\tat pageObjects.DashBoard.selectVendorList(DashBoard.java:57)\r\n\tat stepDefinitions.MyStepDefs.admin_is_on_vendorlist_page(MyStepDefs.java:453)\r\n\tat ✽.Given admin is on vendorlist page(event.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.admin_add_the_event_for_vendor_with_name(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.admin_can_see_the_list_of_events_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.admin_can_click_on_add_event()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.admin_can_see_the_creat_event_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.admin_enters_the_event_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cevent name\u003e",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.admin_should_able_to_see_the_added_event(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 507856917,
  "status": "passed"
});
});