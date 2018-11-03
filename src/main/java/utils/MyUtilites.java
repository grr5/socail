package utils;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pageObjects.BasePage;

import java.io.File;
import java.io.IOException;

public class MyUtilites extends BasePage {
    public static void captureScreenshot(Scenario scenario) {
        if (scenario.isFailed()) {

            try {
                TakesScreenshot ts = (TakesScreenshot) driver;
                File source = ts.getScreenshotAs(OutputType.FILE);
                FileUtils.copyFile(source, new File("./screenShots/" + System.currentTimeMillis() + ".png"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
