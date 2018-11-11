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

        if (scenario.getName().equals("admin should be able to add university with mandatory fields successfully")){
            Reporter.assignAuthor("Ravi");
        } else {
            Reporter.assignAuthor("Ravi");
        }
    }

    @After
    public void afterScenario(Scenario scenario) throws Exception{
//        MyUtilites.captureScreenshot(scenario);
        MyUtilites.getScreenhot();
//        BrowserFactory.closeBrowser();
    }
}
