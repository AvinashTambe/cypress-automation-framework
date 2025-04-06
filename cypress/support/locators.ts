export enum HomePageLocators {
    Logo = "//img[@title='Flipkart']",  // XPath for Flipkart logo
    SearchBox = "input[placeholder='Search for Products, Brands and More']",  // Search box
    SearchButton = "button[title='Search for Products, Brands and More']",  // Search button
    LoginLink = "a[title='Login'] span",  // Login link
    CartLink = "img[alt='Cart']",  // Cart icon
    ResellerLink = "(//img[@alt='Become a Seller'])[1]",  // Become a Seller link (XPath)
    MoreLink = "img[alt='Dropdown with more help links']",  // More dropdown
    CategoriesLink = "._1ch8e_",  // Categories section
    Banner = "._8S67Ib"  // Banner element
  }
  
  export enum LoginPageLocators { 
    //EmailId = "input[class='r4vIwl BV+Dqf']", // Email ID input field
    EmailId = ".r4vIwl", // Email ID input field
    OTPbutton = ".QqFHMw.twnTnD._7Pd1Fp", // OTP button
    ChangeEmailbutton = ".azBkHf", // Change Email button
    ResendOTPbutton = ".rMF9Z9", // Resend OTP button
    Verifybutton = "button[class='QqFHMw llMuju M5XAsp']", // Verify button
    Emailmessages = ".eIDgeN", // Email related notification
    InvalidEmailmessage = "span[class='llBOFA'] span", // InValid Email notification
    OTPnotReceived = ".kZYA3m", // OTP not received notification
    OTPfield = ".XDRRi5 input" // OTP field
    }

    export enum SearchProductPageLocators {
      Searchbar = "input.Pke_EE", // Search bar
      SearchButton = "button._2iLD__", // Search button
      SearchResults = "//span[@class='BUOuZu']", // Search results 
      Minpricebutton = "//div[@class='suthUA']//select[@class='Gn+jFg']", // Min price button 
      Maxpricebutton = "//div[@class='tKgS7w']//select[@class='Gn+jFg']", // Max price button
      Filterapplied = "//div[@class='_6tw8ju']", // Filter applied
      Invalidsearch = ".BHPsUQ" // Invalid search notification
    }