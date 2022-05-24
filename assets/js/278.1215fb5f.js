(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{713:function(t,e,i){"use strict";i.r(e);var o=i(69),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("🔥 Checkout the Azure Developer page at "),i("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("azure.com/developer"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("💡 Learn more : "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Application Insights overview"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("📺 Watch the video : "),i("a",{attrs:{href:"https://youtu.be/yhGu3aIiMdo?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to configure Azure Application Insights for a Web App in Visual Studio"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("h3",{attrs:{id:"how-to-configure-azure-application-insights-for-a-web-app-in-visual-studio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-azure-application-insights-for-a-web-app-in-visual-studio"}},[t._v("#")]),t._v(" How to configure Azure Application Insights for a Web App in Visual Studio")]),t._v(" "),i("h4",{attrs:{id:"monitor-your-application-with-application-insights"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitor-your-application-with-application-insights"}},[t._v("#")]),t._v(" Monitor your application with Application Insights")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Application insights"),i("OutboundLink")],1),t._v(" is part of "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Monitor"),i("OutboundLink")],1),t._v(". You can use it to monitor individual applications, e.g., web applications, and track data including users, page events, errors and calls to dependencies, e.g., databases and APIs.")]),t._v(" "),i("p",[t._v("In this post, we'll use "),i("a",{attrs:{href:"https://visualstudio.microsoft.com/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio"),i("OutboundLink")],1),t._v(" to enable "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Application Insights"),i("OutboundLink")],1),t._v(" for an application.")]),t._v(" "),i("h4",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),i("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),i("ul",[i("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),i("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),i("OutboundLink")],1),t._v(" before you begin)")]),t._v(" "),i("li",[t._v("The latest version of "),i("a",{attrs:{href:"https://visualstudio.microsoft.com/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio"),i("OutboundLink")],1),t._v(" with the "),i("strong",[t._v('"ASP NET and web development"')]),t._v(" and "),i("strong",[t._v('"Azure Development"')]),t._v(" workloads enabled")])]),t._v(" "),i("h4",{attrs:{id:"use-visual-studio-for-application-insights"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-visual-studio-for-application-insights"}},[t._v("#")]),t._v(" Use Visual Studio for Application Insights")]),t._v(" "),i("p",[t._v("We can use Visual Studio to configure Application Insights to work with a web application. Let's try it out.")]),t._v(" "),i("ol",[i("li",[t._v("Open Visual Studio")]),t._v(" "),i("li",[t._v("Choose "),i("strong",[t._v("Create a new project")]),t._v(" on the splash screen, or through the menu (File > New > Project)")]),t._v(" "),i("li",[t._v("Select "),i("strong",[t._v("ASP NET Core Web App")]),t._v(" and click "),i("strong",[t._v("Next")])]),t._v(" "),i("li",[t._v("Enter a "),i("strong",[t._v("Name")]),t._v(" for the project")]),t._v(" "),i("li",[t._v("Pick a "),i("strong",[t._v("Location")])]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Next")])]),t._v(" "),i("li",[t._v("Leave the rest of the settings as they are and click "),i("strong",[t._v("Create")])]),t._v(" "),i("li",[t._v("In the Solution Explorer, "),i("strong",[t._v("right-click")]),t._v(" the project and select "),i("strong",[t._v('"Configure Application Insights..."')])])]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/142rightclick.png")}}),t._v(" "),i("p",[t._v("(Configure Application Insights in Visual Studio)")]),t._v(" "),i("ol",{attrs:{start:"9"}},[i("li",[t._v("You can use the Application Insights SDK without connecting to an Azure instance of Application Insights. We are not going to do that, so select "),i("strong",[t._v("Azure Application Insights")]),t._v(" and click "),i("strong",[t._v("Next")])]),t._v(" "),i("li",[t._v("In the next screen, click the "),i("strong",[t._v("+ button")]),t._v(" to create a new Application Insights resource in Azure\n"),i("ol",[i("li",[t._v("Enter a "),i("strong",[t._v("Name")])]),t._v(" "),i("li",[t._v("Select a "),i("strong",[t._v("Resource Group")])]),t._v(" "),i("li",[t._v("Pick a "),i("strong",[t._v("Location")])]),t._v(" "),i("li",[t._v("Click "),i("strong",[t._v("Create")]),t._v(" to create the Application Insights resource")])])])]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/142createnewinsights.png")}}),t._v(" "),i("p",[t._v("(Create Azure Application Insights from Visual Studio)")]),t._v(" "),i("ol",{attrs:{start:"11"}},[i("li",[t._v("Click "),i("strong",[t._v("Next")]),t._v(" to use the Application Insights resource that we've just created")]),t._v(" "),i("li",[t._v("Leave the connection string settings as they are and click "),i("strong",[t._v("Next")])]),t._v(" "),i("li",[t._v("In the "),i("strong",[t._v("Summary")]),t._v(" screen, you can see what Visual Studio will do to configure Application Insights. Click "),i("strong",[t._v("Finish")]),t._v(" to let Visual Studio configure it")])]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/142configure.png")}}),t._v(" "),i("p",[t._v("(Application Insights configuration summary)")]),t._v(" "),i("p",[t._v("When the configuration is complete, we can test it. Press "),i("strong",[t._v("F5")]),t._v(" to start debugging the application and click on the links in the web app. In the "),i("strong",[t._v("Projects")]),t._v(" menu of Visual Studio, you can now select Application Insights, which will show all the data that it collected.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/142debug.png")}}),t._v(" "),i("p",[t._v("(Application Insights telemetry in Visual Studio)")]),t._v(" "),i("p",[t._v("And when you navigate to the Application Insights instance in the Azure portal, you can drill down into all the data, e.g. the page events.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/142results.png")}}),t._v(" "),i("p",[t._v("(Application Insights data in the Azure portal)")]),t._v(" "),i("h4",{attrs:{id:"conclusion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Application Insights"),i("OutboundLink")],1),t._v(" is a powerful monitoring service for applications. "),i("a",{attrs:{href:"https://visualstudio.microsoft.com/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio"),i("OutboundLink")],1),t._v(" makes it very easy to enable and configure, so that you can start using it instantly. Go and check it out!")])])}),[],!1,null,null,null);e.default=r.exports}}]);