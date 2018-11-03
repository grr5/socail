package stepDefinitions;

import browserFactory.BrowserFactory;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.lang3.RandomStringUtils;
import org.testng.Assert;
import pageObjects.*;
import utils.TestDataRandom;

public class MyStepDefs {
    LoginPage loginPage;
    DashBoard dashBoard;
    UsersListPage usersListPage;
    UniversityPage universityPage;
    RegisterUniversityPage registerUniversityPage;
    BranchListPage branchListPage;
    AddVendorBranch addVendorBranch;
    ServiceCategoryListPage serviceCategoryListPage;
    AddServiceCategory addServiceCategory;
    EditServiceCategory editServiceCategory;
    ServiceVendorList serviceVendorList;
    public static String randomData = RandomStringUtils.randomAlphabetic(4);


    // *** positive and negative-login scenario ***//

    @Given("^admin is on login page$")
    public void admin_is_on_login_page() throws Throwable {
        Assert.assertEquals(LoginPage.verifyHomepage(), "http://mca.bananaappscenter.com/");
        String s = "abcnjkjhuhuhuuuhuhu";
        System.out.println(RandomStringUtils.random(3, s));
        System.out.println(RandomStringUtils.randomAlphabetic(4));
        System.out.println(System.currentTimeMillis());
        System.out.println(Math.max(2, 1));
    }

    @When("^admin enters email as \"([^\"]*)\", password as \"([^\"]*)\"$")
    public void admin_enters_email_as_password_as(String arg1, String arg2) throws Throwable {
        loginPage = new LoginPage();
//        LoginPage.login(arg1, arg2); //test
        LoginPage.login(BrowserFactory.properties.getProperty("adminEmail"), BrowserFactory.properties.getProperty("adminPassword"));
    }

    @When("^admin enters email \"([^\"]*)\", password \"([^\"]*)\"$")
    public void admin_enters_email_password(String email, String pwd) throws Throwable {
        LoginPage.login(email, pwd);
    }

    @When("^admin clicks on log in button$")
    public void admin_clicks_on_log_in_button() throws Throwable {
        LoginPage.clickOnLogin();
    }

    @Then("^admin should login and see dashboard page$")
    public void admin_should_login_and_see_dashboard_page() throws Throwable {
        dashBoard = new DashBoard();
        Assert.assertEquals(DashBoard.verifyDashboardPage(), "Social Fresher Dashboard");
    }


    // *** user step definitions *** //

    @Given("^admin is on dashboard page$")
    public void admin_is_on_dashboard_page() throws Throwable {

    }

    @When("^admin clicks on user link$")
    public void admin_clicks_on_user_link() throws Throwable {
        dashBoard = new DashBoard();
        DashBoard.clickOnUsersList();
    }

    @Then("^admin should see the available user list successfully$")
    public void admin_should_see_the_available_user_list_successfully() throws Throwable {
        usersListPage = new UsersListPage();
        Assert.assertEquals(UsersListPage.verifyUsersPage(), "Users List");
    }

    // * user activate or de-activate steps * //

    @Then("^admin should see usersListPage$")
    public void admin_should_see_usersListPage() throws Throwable {
        usersListPage = new UsersListPage();
        Assert.assertEquals(UsersListPage.verifyUsersPage(), "Users List");
    }

    @When("^admin search for a user with \"([^\"]*)\"in search field$")
    public void admin_search_for_a_user_with_in_search_field(String arg1) throws Throwable {
//        arg1= RandomStringUtils.randomAlphabetic(4);
        UsersListPage.searchField(TestDataRandom.inputRandomData());
    }

    @When("^admin selects activate type \"([^\"]*)\"$")
    public void admin_selects_activate_type(String arg1) throws Throwable {
        UsersListPage.choseActiveType();
    }

    @Then("^the user \"([^\"]*)\" status \"([^\"]*)\" should be updated successfully$")
    public void the_user_status_should_be_updated_successfully(String arg1, String arg2) throws Throwable {
        Assert.assertEquals(UsersListPage.verifyStatusChanged(arg1), arg2);
    }

    // *** University steps *** //

    @When("^admin clicks on university link$")
    public void admin_clicks_on_university_link() throws Throwable {
        DashBoard.clickOnUniversity();
    }

    @Given("^admin is on universityList page$")
    public void admin_is_on_universityList_page() throws Throwable {
        universityPage = new UniversityPage();
        Assert.assertEquals(UniversityPage.verifyUniversityListPage(), "List of University");
    }

    @When("^admin clicks on register university link$")
    public void admin_clicks_on_register_university_link() throws Throwable {
        UniversityPage.clickOnRegisterUniversity();
    }

    @Then("^admin should see register university page$")
    public void admin_should_see_register_university_page() throws Throwable {
        registerUniversityPage = new RegisterUniversityPage();
        Assert.assertEquals(RegisterUniversityPage.verifyRegisterPage(), "Register University");
    }

    @Then("^the added university \"([^\"]*)\" should be shown in the university list page$")
    public void the_added_university_should_be_shown_in_the_university_list_page(String arg1) throws Throwable {
        UniversityPage.search(arg1);
        Assert.assertEquals(UniversityPage.verifyNewUni(), arg1);
    }

    @When("^admin enters university name \"([^\"]*)\", domain \"([^\"]*)\" and add image as \"([^\"]*)\"$")
    public void admin_enters_university_name_domain_and_add_image_as(String arg1, String arg2, String arg3) throws Throwable {
        RegisterUniversityPage.enterUniDetailsRequired(randomData, randomData);
        RegisterUniversityPage.uploadLogo(arg3);
    }

    @Then("^admin clicks on add_button$")
    public void admin_clicks_on_add_button_uni() throws Throwable {
        RegisterUniversityPage.clickOnAdd();
    }


    @Then("^admin should see error message as \"([^\"]*)\"$")
    public void admin_should_see_error_message_as(String arg1) throws Throwable {
        RegisterUniversityPage.printErrorMessage();
    }

    // * Uni active-deactive steps * //

    @When("^admin search university \"([^\"]*)\" in search field$")
    public void admin_search_university_in_search_field(String arg1) throws Throwable {
        UniversityPage.search(arg1);
    }

    @When("^admin selects university active-type \"([^\"]*)\"$")
    public void admin_selects_university_active_type(String activeType) throws Throwable {
        UniversityPage.choseActiveType(activeType);
    }

    @Then("^the university \"([^\"]*)\" should be changed$")
    public void the_university_should_be_changed(String arg1) throws Throwable {

    }

    // * Uni edit steps * //

    @Then("^admin selects edit option$")
    public void admin_selects_edit_option() throws Throwable {
        UniversityPage.selectEdit();
    }
    // * mandatory field validation * //

    @Then("^admin should see a validation message as \"([^\"]*)\"$")
    public void admin_should_see_a_validation_message_as(String arg1) throws Throwable {

    }

    // *** Branch step definitions *** //

    @Then("^admin clicks on branch list$")
    public void admin_clicks_on_branch_list() throws Throwable {
        DashBoard.clickOnBranchList();
    }

    @Given("^admin is on branch list page$")
    public void admin_is_on_branch_list_page() throws Throwable {
        branchListPage = new BranchListPage();
        Assert.assertEquals(BranchListPage.verifyBranchListPage(), "List of Branch");
    }

    @When("^admin clicks on register branch link$")
    public void admin_clicks_on_register_branch_link() throws Throwable {
        BranchListPage.clickOnregisterBranch();
    }

    @Then("^admin should see add vendor branch page$")
    public void admin_should_see_add_vendor_branch_page() throws Throwable {
        addVendorBranch = new AddVendorBranch();
        Assert.assertEquals(AddVendorBranch.verifyAddVendorBranchPage(), "Register VendorBranch");
    }

    @When("^admin select vendor \"([^\"]*)\", branch_name \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void admin_select_vendor_branch_name(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9) throws Throwable {
        AddVendorBranch.enterVendorBranchMandatoryDetails(arg1, randomData, randomData, randomData, randomData, arg6, arg7, arg8, arg9);
    }

    @When("^admin clicks on add button$")
    public void admin_clicks_on_add_button() throws Throwable {
        AddVendorBranch.clickOnAddButton();
    }

    @Then("^the branch should be added successfully and the added branch \"([^\"]*)\" should show in branch list$")
    public void the_branch_should_be_added_successfully_and_the_added_branch_should_show_in_branch_list(String arg1) throws Throwable {
        BranchListPage.search(arg1);
    }

    // * negative scenario * //

    @Then("^admin should see a validation message \"([^\"]*)\"$")
    public void admin_should_see_a_validation_message(String arg1) throws Throwable {

    }

    // ** branch edit ** //

    @When("^admin enters vendor-branch name \"([^\"]*)\" in search field$")
    public void admin_enters_vendor_branch_name_in_search_field(String arg1) throws Throwable {
        BranchListPage.search(arg1);
    }

    @When("^selects edit button$")
    public void selects_edit_button() throws Throwable {
        BranchListPage.clickOnEdit();
    }

    @Then("^the branch should be updated successfully and the updated branch \"([^\"]*)\" should show in branch list$")
    public void the_branch_should_be_updated_successfully_and_the_updated_branch_should_show_in_branch_list(String arg1) throws Throwable {

    }

    // ** branch with all fields ** //

    @When("^admin select vendor \"([^\"]*)\", branch_name \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" \"([^\"]*)\", \"([^\"]*)\"$")
    public void admin_select_vendor_branch_name(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8, String arg9, String arg10, String arg11) throws Throwable {
        AddVendorBranch.enterVendorBranchAllDetails(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11);
    }

    // *** service category step definitions *** //

    @Then("^admin clicks on service category page$")
    public void admin_clicks_on_service_category_page() throws Throwable {
        DashBoard.clickOnServiceCategory();
    }

    @Given("^admin is on service_category_list page$")
    public void admin_is_on_service_category_list_page() throws Throwable {
        serviceCategoryListPage = new ServiceCategoryListPage();
        Assert.assertEquals(ServiceCategoryListPage.verifyServiceCategoryListPage(), "List of Categories");
    }

    @When("^admin selects add service category$")
    public void admin_selects_add_service_category() throws Throwable {
        ServiceCategoryListPage.clickOnAddServiceCategory();
    }

    @Then("^admin should see \"([^\"]*)\" page$")
    public void admin_should_see_page(String arg1) throws Throwable {
        addServiceCategory = new AddServiceCategory();
        AddServiceCategory.verifyAddServiceCategoryPage();
    }

    @When("^admin enters category name \"([^\"]*)\", category description \"([^\"]*)\", category image \"([^\"]*)\", category cover image \"([^\"]*)\", category video link \"([^\"]*)\"$")
    public void admin_enters_category_name_category_description_category_image_category_cover_image_category_video_link(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        AddServiceCategory.enterServiceCategoryDetails(arg1, arg2, arg3, arg4, arg5);
    }

    @When("^admin clicks on submit button$")
    public void admin_clicks_on_submit_button() throws Throwable {
        AddServiceCategory.clickOnSubmit();
    }


    @Then("^the service category \"([^\"]*)\" should be added successfully shown in category list$")
    public void the_service_category_should_be_added_successfully_shown_in_category_list(String arg1) throws Throwable {
        ServiceCategoryListPage.search(arg1);
        Assert.assertEquals(ServiceCategoryListPage.verifyAddedCategory(), arg1);
    }

    // * service category edit step definitions * //

    @When("^admin enters category name \"([^\"]*)\" in search field$")
    public void admin_enters_category_name_in_search_field(String arg1) throws Throwable {
        ServiceCategoryListPage.search(arg1);
    }

    @Then("^admin selects edit button$")
    public void admin_selects_edit_button() throws Throwable {
        ServiceCategoryListPage.selectEdit();
    }

    @When("^admin enters new category name \"([^\"]*)\", new category description \"([^\"]*)\", new category image \"([^\"]*)\", new category cover image \"([^\"]*)\", new category video link \"([^\"]*)\"$")
    public void admin_enters_new_category_name_new_category_description_new_category_image_new_category_cover_image_new_category_video_link(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
        editServiceCategory = new EditServiceCategory();
        EditServiceCategory.enterEditedCategoryyDetails(arg1, arg2, arg3, arg4, arg5);
    }

    @When("^admin clicks on submit$")
    public void admin_clicks_on_submit() throws Throwable {
        EditServiceCategory.clickOnSubmit();
    }

    @Then("^the service category \"([^\"]*)\" should be updated successfully$")
    public void the_service_category_should_be_updated_successfully(String arg1) throws Throwable {
        ServiceCategoryListPage.search(arg1);
        Assert.assertEquals(ServiceCategoryListPage.verifyAddedCategory(), arg1);
    }

    // *** service vendor list step definitions *** //

    @Then("^admin clicks on service vendor list link$")
    public void admin_clicks_on_service_vendor_list_link() throws Throwable {
        DashBoard.clickOnServiceVendorList();
    }

    @Given("^admin is on service vendor list page$")
    public void admin_is_on_service_vendor_list_page() throws Throwable {
        serviceVendorList = new ServiceVendorList();
        Assert.assertEquals(ServiceVendorList.verifyServiceVendorListPage(), "List of Service Vendors");
    }

    @When("^admin search service vendor name \"([^\"]*)\" in search field$")
    public void admin_search_service_vendor_name_in_search_field(String arg1) throws Throwable {
        ServiceVendorList.search(arg1);
    }

    @When("^admin selects wished service vendor name \"([^\"]*)\"$")
    public void admin_selects_wished_service_vendor_name(String arg1) throws Throwable {
        ServiceVendorList.selectVendor();
        Assert.assertEquals(ServiceVendorList.verifySelectedVendor(), arg1);
    }

    @Then("^admin should see all available service vendor details$")
    public void admin_should_see_all_available_service_vendor_details() throws Throwable {
        Assert.assertEquals(ServiceVendorList.verifyVendorDetails(), "Email");
    }

    @When("^admin search for not existed service vendor name \"([^\"]*)\" in search field$")
    public void admin_search_for_not_existed_service_vendor_name_in_search_field(String arg1) throws Throwable {
        ServiceVendorList.search(arg1);
    }

    @When("^admin should see an error message as  \"([^\"]*)\"$")
    public void admin_should_see_an_error_message_as(String arg1) throws Throwable {
       Assert.assertEquals(ServiceVendorList.errorMessage(), arg1);
    }

    @Then("^admin should  not see all available service vendor details$")
    public void admin_should_not_see_all_available_service_vendor_details() throws Throwable {

    }

    @When("^admin selects active-type \"([^\"]*)\"$")
    public void admin_selects_active_type(String arg1) throws Throwable {
        ServiceVendorList.choseActiveType();
    }

    @Then("^the service vendor \"([^\"]*)\" active type \"([^\"]*)\" should be updated successfully$")
    public void the_service_vendor_active_type_should_be_updated_successfully(String arg1, String active_type) throws Throwable {
        ServiceVendorList.search(arg1); // need to check
        Assert.assertEquals(ServiceVendorList.verifyActiveType(), active_type);
    }

    @When("^admin selects vendor services$")
    public void admin_selects_vendor_services() throws Throwable {
        ServiceVendorList.selectVendorServices();
    }

    @Then("^the available services should display$")
    public void the_available_services_should_display() throws Throwable {

    }

}
