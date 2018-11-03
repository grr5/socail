$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sanity.feature");
formatter.feature({
  "line": 1,
  "name": "Verify admin can see the list of available users and can activate or de-activate",
  "description": "",
  "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 34,
  "name": ": admin should be able to activate or de-activate a user",
  "description": "",
  "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@user_active"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "admin is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "admin clicks on user link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "admin should see usersListPage",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "admin search for a user with \"\u003cuser_email\u003e\"in search field",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "admin selects activate type \"\u003cactive_type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user \"\u003cuser_email\u003e\" status \"\u003cactive_type\u003e\" should be updated successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;",
  "rows": [
    {
      "cells": [
        "user_email",
        "active_type"
      ],
      "line": 44,
      "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;;1"
    },
    {
      "cells": [
        "email",
        "InActive"
      ],
      "line": 45,
      "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;;2"
    },
    {
      "cells": [
        "jhkghjg",
        "hjhjvhj"
      ],
      "line": 46,
      "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9607103258,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "comments": [
    {
      "line": 6,
      "value": "#    When admin enters email as \"email_test\", password as \"password_test\""
    }
  ],
  "line": 7,
  "name": "admin clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "admin should login and see dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_login_page()"
});
formatter.result({
  "duration": 267070501,
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
  "duration": 507129598,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 5897543709,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_should_login_and_see_dashboard_page()"
});
formatter.result({
  "duration": 75482432,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": ": admin should be able to activate or de-activate a user",
  "description": "",
  "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@user_active"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "admin is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "admin clicks on user link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "admin should see usersListPage",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "admin search for a user with \"email\"in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "admin selects activate type \"InActive\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user \"email\" status \"InActive\" should be updated successfully",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_dashboard_page()"
});
formatter.result({
  "duration": 14791,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_clicks_on_user_link()"
});
formatter.result({
  "duration": 1812019254,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_should_see_usersListPage()"
});
formatter.result({
  "duration": 69992655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.admin_search_for_a_user_with_in_search_field(String)"
});
formatter.result({
  "duration": 394224527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InActive",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.admin_selects_activate_type(String)"
});
formatter.result({
  "duration": 20064010791,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"datatable-buttons\"]/tbody/tr/td[7]/div/button\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60405}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 9a42fce14235b073efe2ea9cebbaf5f2\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"datatable-buttons\"]/tbody/tr/td[7]/div/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pageObjects.UsersListPage.choseActiveType(UsersListPage.java:39)\r\n\tat stepDefinitions.MyStepDefs.admin_selects_activate_type(MyStepDefs.java:98)\r\n\tat ✽.And admin selects activate type \"InActive\"(sanity.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 10
    },
    {
      "val": "InActive",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.the_user_status_should_be_updated_successfully(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1056608411,
  "status": "passed"
});
formatter.before({
  "duration": 6484024751,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
  "comments": [
    {
      "line": 6,
      "value": "#    When admin enters email as \"email_test\", password as \"password_test\""
    }
  ],
  "line": 7,
  "name": "admin clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "admin should login and see dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_login_page()"
});
formatter.result({
  "duration": 15612582,
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
  "duration": 350802389,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_clicks_on_log_in_button()"
});
formatter.result({
  "duration": 4176532429,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_should_login_and_see_dashboard_page()"
});
formatter.result({
  "duration": 57833228,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": ": admin should be able to activate or de-activate a user",
  "description": "",
  "id": "verify-admin-can-see-the-list-of-available-users-and-can-activate-or-de-activate;:-admin-should-be-able-to-activate-or-de-activate-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@user_active"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "admin is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "admin clicks on user link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "admin should see usersListPage",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "admin search for a user with \"jhkghjg\"in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "admin selects activate type \"hjhjvhj\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user \"jhkghjg\" status \"hjhjvhj\" should be updated successfully",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.admin_is_on_dashboard_page()"
});
formatter.result({
  "duration": 34702,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_clicks_on_user_link()"
});
formatter.result({
  "duration": 1412363545,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.admin_should_see_usersListPage()"
});
formatter.result({
  "duration": 41759277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhkghjg",
      "offset": 30
    }
  ],
  "location": "MyStepDefs.admin_search_for_a_user_with_in_search_field(String)"
});
formatter.result({
  "duration": 253738595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hjhjvhj",
      "offset": 29
    }
  ],
  "location": "MyStepDefs.admin_selects_activate_type(String)"
});
formatter.result({
  "duration": 20082545186,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"datatable-buttons\"]/tbody/tr/td[7]/div/button\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-NBRT2PUV\u0027, ip: \u0027192.168.0.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Ravi\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60449}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 537ce1a54b49ef0bc91926d43d4a1831\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"datatable-buttons\"]/tbody/tr/td[7]/div/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pageObjects.UsersListPage.choseActiveType(UsersListPage.java:39)\r\n\tat stepDefinitions.MyStepDefs.admin_selects_activate_type(MyStepDefs.java:98)\r\n\tat ✽.And admin selects activate type \"hjhjvhj\"(sanity.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhkghjg",
      "offset": 10
    },
    {
      "val": "hjhjvhj",
      "offset": 27
    }
  ],
  "location": "MyStepDefs.the_user_status_should_be_updated_successfully(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1042434548,
  "status": "passed"
});
});