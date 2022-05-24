(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{647:function(e,t,s){"use strict";s.r(t);var n=s(69),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("🔥  The FREE Azure Developer Guide eBook is available "),s("a",{attrs:{href:"http://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/use-csharp-notebook-features-and-commands?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use built-in notebook commands and features in Azure Cosmos DB C# notebooks"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://youtu.be/pJVYnMAKxXI?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to run C# notebooks with Azure Cosmos DB"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"how-to-run-c-notebooks-with-azure-cosmos-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-run-c-notebooks-with-azure-cosmos-db"}},[e._v("#")]),e._v(" How to run C# notebooks with Azure Cosmos DB")]),e._v(" "),s("h4",{attrs:{id:"run-code-in-notebooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-code-in-notebooks"}},[e._v("#")]),e._v(" Run code in notebooks")]),e._v(" "),s("p",[e._v("In Azure, you can use "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/notebooks/tutorial-create-run-jupyter-notebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Juniper notebooks"),s("OutboundLink")],1),e._v(" in lots of services to run code and experiments in Python. This is very useful to query and manipulate data, especially because notebooks enable you to combine code with text and interactive results, like charts and graphs.")]),e._v(" "),s("p",[e._v("And now, you can use C# notebooks with "),s("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),s("OutboundLink")],1),e._v(". In this post, we'll explore how these work.")]),e._v(" "),s("h4",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),s("ul",[s("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),s("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),s("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),s("li",[e._v("An existing Azure Cosmos DB account with the Sample Dataset enabled in it")])]),e._v(" "),s("h4",{attrs:{id:"c-notebooks-in-azure-cosmos-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c-notebooks-in-azure-cosmos-db"}},[e._v("#")]),e._v(" C# notebooks in Azure Cosmos DB")]),e._v(" "),s("p",[e._v("When you are creating an application that uses Azure Cosmos DB, it is useful to experiment with code that uses that Cosmos DB. Especially when you want to try code for data querying and manipulation. In Azure Cosmos DB, you can use C# notebooks that enable you to write C# code that interacts with Cosmos DB. Let's try it out.")]),e._v(" "),s("p",[e._v("In order to work with notebooks in Cosmos DB, you need to enable them:")]),e._v(" "),s("ol",[s("li",[e._v("Go to the "),s("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),s("OutboundLink")],1),e._v(" and navigate to the Azure Cosmos DB")]),e._v(" "),s("li",[e._v("Select the "),s("strong",[e._v("Data Explorer")]),e._v(" menu")]),e._v(" "),s("li",[e._v("From here, you can enable notebooks by selecting the "),s("strong",[e._v("Enable Notebooks button")]),e._v(". You can also "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/enable-notebooks?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("enable notebooks when you create a new Azure Cosmos DB"),s("OutboundLink")],1)])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/84enablenotebooks.png")}}),e._v(" "),s("p",[e._v("(Enable notebooks in Azure Cosmos DB)")]),e._v(" "),s("p",[e._v("Once the notebooks feature is enabled, you'll see a notebooks workspace in the data explorer. In there, you can find the "),s("a",{attrs:{href:"https://github.com/Azure-Samples/cosmos-notebooks?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("notebook gallery"),s("OutboundLink")],1),e._v(". This contains sample notebooks to show you how they work.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/84gallery.png")}}),e._v(" "),s("p",[e._v("(Azure Cosmos DB notebook gallery)")]),e._v(" "),s("p",[e._v("Let's create a new notebook and query some data.")]),e._v(" "),s("ol",[s("li",[e._v("In the Data Explorer, in the menu on the top, select "),s("strong",[e._v("New Notebook")]),e._v(". Alternatively, you can also upload an existing notebook")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/84newnotebook.png")}}),e._v(" "),s("p",[e._v("(New notebooks in Azure Cosmos DB in the Azure portal)")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("The new notebook contains one new cell, in which you can type code. You can add more cells that contain code or text. In the first cell, we'll insert the following code:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("using System;\n\nclass Person\n{\n    public string firstname { get; set; }\n    \n    public int age { get; set; }\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("This is C# code that can run in the notebook. This code represents a person object that we'll query out of the database. Try it out by selecting the "),s("strong",[e._v("Run button")]),e._v(" on the left to the cell. Make sure that the language setting (in the top menu) is set to "),s("strong",[e._v("CSharp")]),e._v(". You should see no errors.")]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Create a new code cell and insert the code below. This code connects to the Cosmos DB and executes a query against it using the "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/sql-api-sdk-dotnet-standard?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos DB .NET SDK"),s("OutboundLink")],1),e._v(". It than puts the query results in a List of Person objects and outputs that by simply adding it to the last line of code. This triggers the notebook to start the data visualization feature. Note that I don’t have to insert the actual endpoint and key here. These are already known by the system.")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// Include usings\nusing System;\nusing System.Linq;\nusing System.Collections.Generic;\nusing System.Linq.Expressions;\nusing Microsoft.Azure.Cosmos; //namespace for Azure Cosmos DB .NET V3 SDK\nusing System.Collections;\n\n// Initialize a new instance of CosmosClient using the built-in account endpoint and key parameters\nCosmosClient cosmosClient = new CosmosClient(Cosmos.Endpoint, Cosmos.Key);\nMicrosoft.Azure.Cosmos.Database database = await cosmosClient.CreateDatabaseIfNotExistsAsync("SampleDB");\nContainer container = await database.CreateContainerIfNotExistsAsync("Persons", "/firstname", 400);\n\nQueryDefinition queryDefinition = new QueryDefinition("SELECT * FROM c");\n\nFeedIterator<Person> queryResultSetIterator = container.GetItemQueryIterator<Person>(queryDefinition);\n\nList<Person> personObjects = new List<Person>();\n\nwhile (queryResultSetIterator.HasMoreResults)\n{\n    FeedResponse<Person> currentResultSet = await queryResultSetIterator.ReadNextAsync();\n    foreach (Person person in currentResultSet)\n    {\n        personObjects.Add(person);\n    }\n}\n\npersonObjects\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Execute the code by selecting the run button to the left of the code. This should result in the data being visible in a table. From there, you can select various chart- and table formats to display the data in different ways")])]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/84result.png")}}),e._v(" "),s("p",[e._v("(Visualized data in a notebook in Azure Cosmos DB)")]),e._v(" "),s("h4",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/sql-api-sdk-dotnet-standard?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB .NET SDK"),s("OutboundLink")],1),e._v(" enables you to manage your "),s("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),s("OutboundLink")],1),e._v(" and interact with its data. Now, you can use the SDK in "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/use-csharp-notebook-features-and-commands?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("intelligent notebooks within Azure Cosmos DB"),s("OutboundLink")],1),e._v(", that enable you to run code, add descriptive text and visualize data. Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);