const addLinkToBusiness = () => {
    const businessLink = document.createElement("a");
    businessLink.href = "https://www.csulb.edu/college-of-business";
    businessLink.textContent = "College of Business";
    const isLink = document.getElementById("is");
    isLink.parentNode.insertBefore(businessLink, isLink);
  }
  
  addLinkToBusiness();