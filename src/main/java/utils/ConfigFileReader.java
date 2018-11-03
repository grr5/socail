package utils;

import pageObjects.BasePage;

import java.io.File;
import java.io.IOException;

public class ConfigFileReader extends BasePage {
    String reportConfigPath = "C:\\Users\\Ravi\\Downloads\\socialFresher\\src\\main\\resources\\extent-config.xml";
    public String getReportConfigPath(){
        if (reportConfigPath != null) return reportConfigPath;
        else  throw new RuntimeException("Report Config Path not specified in the configuration file");
    }
}
