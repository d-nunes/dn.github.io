//if the browser back button was used, reload the page
(function()
{
    window.onpageshow = function(event)
    {
        if (event.persisted)
        {
            window.location.reload();
        }
    }
})();

function HomepageLinks(url)
{
    //find the element with the class "headerBar" and manipulate its width
    document.querySelector(".headerBar").setAttribute("style", "width:100vw");

    setTimeout
    (
        function() 
        {
            document.querySelector(".screen").setAttribute("style", "height: 100vh");
            document.querySelector(".homeButton").setAttribute("style", "opacity: 1");
        }, 500
    );

    setTimeout
    (
        function()
        {
            window.open(url, "_self");
        }, 1250
    );
}

function NonHomepageLinks(url)
{
    document.querySelector(".screen").setAttribute("style", "height: 100vh");
    
    setTimeout
    (
        function()
        {
            window.open(url, "_self");
        }, 750
    );
}

function OnHomeButtonClick()
{
    document.querySelector(".homeButton").setAttribute("style", "opacity: 0");
    
    document.querySelector(".screen").setAttribute("style", "height: 100vh");
    
    setTimeout
    (
        function() 
        {
            document.querySelector(".headerBar").setAttribute("style", "width: 0vw");
        }, 500
    );

    setTimeout
    (
        function()
        {
            window.open("../index.html", "_self");
        }, 750
    );
}

function PullUpScreen()
{
    document.querySelector(".screen").setAttribute("style", "height: 0vh");
}


function OpenNewWindow(url)
{
    document.querySelector(".screen").setAttribute("style", "height: 100vh");
    
    setTimeout
    (
        function()
        {
            window.open(url, "_self");
        }, 500
    );
}

function OpenNewTab(url)
{
    window.open(url);
}

function Grow(id)
{
    document.querySelector("#" + id).setAttribute("style", "height: 100vh");
}