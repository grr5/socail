package pageObjects;

import helpers.HoverOverHelper;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashBoard extends BasePage {

    public DashBoard(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "/html/body/div/div/div[1]/div/div/h4")
    static WebElement header;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[3]/a")
    static WebElement branchLink;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[3]/ul/li/a")
    static WebElement branchList;

    @FindBy(linkText = "University")
    static WebElement universityLink;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[6]/ul/li/a")
    static WebElement universityLink_2;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[5]/a")
    static WebElement mastersLink;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[5]/ul/li[3]/a")
    static WebElement serviceCategoryLink;

    @FindBy(linkText = "Users")
    static WebElement usersLink;

    @FindBy(linkText = "Users List")
    static WebElement usersList;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[2]/a")
    static WebElement vendorLink;

    @FindBy(xpath = "//*[@id=\"navigation\"]/ul/li[2]/ul/li[2]/a")
    static WebElement serviceVendorListLink;

    public static void clickOnBranchList(){
        HoverOverHelper.hoverOver(branchLink);
        branchList.click();
    }

    public static void clickOnUniversity(){
        HoverOverHelper.hoverOver(universityLink);
        universityLink_2.click();
    }


    public static String verifyDashboardPage(){
        return header.getText().toString();
    }

    public static void clickOnServiceCategory(){
        HoverOverHelper.hoverOver(mastersLink);
        serviceCategoryLink.click();
    }

    public static void clickOnUsersList(){
        HoverOverHelper.hoverOver(usersLink);
        usersList.click();
    }

    public static void clickOnServiceVendorList(){
        HoverOverHelper.hoverOver(vendorLink);
        serviceVendorListLink.click();
    }
}
