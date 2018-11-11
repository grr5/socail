package utils;

import cucumber.api.Scenario;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import pageObjects.BasePage;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    public static String getScreenhot() throws Exception {
        String screenshotName = "abc";
        String dateName = new SimpleDateFormat("hhmm").format(new Date());
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        //after execution, you could see a folder "FailedTestsScreenshots" under src folder
        String destination = System.getProperty("user.dir") + "/FailedTestsScreenshots/"+screenshotName+dateName+".png";
        File finalDestination = new File(destination);
        FileUtils.copyFile(source, finalDestination);
        return destination;
    }
}
