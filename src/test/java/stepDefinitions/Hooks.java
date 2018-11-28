package stepDefinitions;

import browserFactory.BrowserFactory;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.MyUtilites;

public class Hooks {
    BrowserFactory browserFactory;

    @Before
    public void beforeScenario(Scenario scenario){
        browserFactory = new BrowserFactory();
        BrowserFactory.openBrowser();

        if (scenario.getName().equals("admin  should be able to add  an event with mantatory field")){
            Reporter.assignAuthor("Ravinder");
        } else if (scenario.getName().equals("admin should be able to activate or de-activate a user")){
            Reporter.assignAuthor("Ravi Reddy");
        } else {
            Reporter.assignAuthor("Ravi");
        }
    }

    @After
    public void afterScenario(Scenario scenario) throws Exception{
//        MyUtilites.captureScreenshot(scenario);
//        MyUtilites.getScreenshot();
//        BrowserFactory.closeBrowser();
        MyUtilites.captureScreenshot(scenario);
        Reporter.addScreenCaptureFromPath(MyUtilites.destination.toString());
    }

}
