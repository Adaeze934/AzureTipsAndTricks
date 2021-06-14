(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{593:function(e,s,n){"use strict";n.r(s);var t=n(43),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("🔥 Make sure you "),n("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),n("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://github.com/dotnet/runtime?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("The .NET runtime GitHub"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://youtu.be/CEUov9wuZwY?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to create faster and smarter apps with .NET 5"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"how-to-create-faster-and-smarter-apps-with-net-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-faster-and-smarter-apps-with-net-5"}},[e._v("#")]),e._v(" How to create faster and smarter apps with .NET 5")]),e._v(" "),n("h4",{attrs:{id:"net-5-is-the-next-step-to-one-net"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-5-is-the-next-step-to-one-net"}},[e._v("#")]),e._v(" .NET 5 is the next step to one .NET")]),e._v(" "),n("p",[e._v(".NET Core has been around for a while and lives next to the .NET Framework. The .NET Framework will continue to exist as many customers rely on it daily and .NET Core will be replaced by .NET 5, which brings a "),n("a",{attrs:{href:"https://github.com/dotnet/runtime/issues/37269?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("lot of improvements"),n("OutboundLink")],1),e._v(", including "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("performance improvements"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("C# 9.0"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/f-5-update-for-august/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("F# 5.0"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/dotnet/runtime/issues/36590?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("single file applications"),n("OutboundLink")],1),e._v(" and support for "),n("a",{attrs:{href:"https://github.com/dotnet/runtime/issues/36699?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows ARM64"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("In this post, we'll look at some of the improvements and new features of .NET 5.")]),e._v(" "),n("h4",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),n("ul",[n("li",[e._v("Install the latest version of "),n("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/preview/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio 2019 Preview"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("To run the performance benchmarks, install the "),n("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net48-developer-pack-offline-installer?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Framework 4.8 Developer Pack"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"single-file-apps-and-trimming-unused-assemblies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-file-apps-and-trimming-unused-assemblies"}},[e._v("#")]),e._v(" Single-File Apps and Trimming unused assemblies")]),e._v(" "),n("p",[e._v(".NET 5 has improved its deployment story. You can now publish your complete project to a single file (or a handful of them), even when you create a standalone application that includes the complete .NET 5 runtime. This reduces the payload of a deployment and makes it easier to move complete applications around.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/91singlefileapp.png")}}),e._v(" "),n("p",[e._v("(Just a handful of files for a self contained, single-file app)")]),e._v(" "),n("p",[e._v("Also, .NET 5 improved the trimming of unused assemblies. Previously in .NET Core, unused assemblies wouldn't be deployed to the final application payload. .NET 5 takes this further by also removing unused types and members from assemblies, thereby creating even smaller applications.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/91trimandsinglefileapps.png")}}),e._v(" "),n("p",[e._v("(Publish a .NET 5 console app)")]),e._v(" "),n("h4",{attrs:{id:"top-level-statements-in-c-9"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#top-level-statements-in-c-9"}},[e._v("#")]),e._v(" Top level statements in C# 9")]),e._v(" "),n("p",[e._v("Consider the following code for a simple console application:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('using System;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello World!");\n\n            Console.ReadLine();\n        }\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[e._v("With .NET 5, you can use C# 9, which supports top level statements. This means that, for simple applications, you don't need any boilerplate code. You can, for instance, turn the previous code into this:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('System.Console.WriteLine("Hello World!");\nConsole.ReadLine();\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("And this still works. Top level statements are great for simple applications and especially for applications like Azure Functions.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/91consoleoutput.png")}}),e._v(" "),n("p",[e._v("(Output of console application)")]),e._v(" "),n("h4",{attrs:{id:"performance-improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance-improvements"}},[e._v("#")]),e._v(" Performance improvements")]),e._v(" "),n("p",[e._v(".NET Core 1, 2 and 3 introduced incredible performance improvements over the .NET Framework and set a new industry standard. .NET 5 is even faster in every way. To see how much faster it is, we can run benchmarks to compare it to the .NET Framework 4.8 and .NET Core 3.1.")]),e._v(" "),n("ol",[n("li",[e._v("Open a command prompt")]),e._v(" "),n("li",[e._v("Create a new console application and navigate to it with the following commands:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mkdir Benchmarks\ncd Benchmarks\ndotnet new console\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Open the "),n("strong",[e._v("Benchmarks.csproj")]),e._v(" file and change it into this:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<Project Sdk="Microsoft.NET.Sdk">\n\n  <PropertyGroup>\n    <OutputType>Exe</OutputType>\n    <AllowUnsafeBlocks>true</AllowUnsafeBlocks>\n    <ServerGarbageCollection>true</ServerGarbageCollection>\n    <TargetFrameworks>net5.0;netcoreapp3.1;net48</TargetFrameworks>\n  </PropertyGroup>\n\n  <ItemGroup>\n    <PackageReference Include="benchmarkdotnet" Version="0.12.1" />\n  </ItemGroup>\n\n  <ItemGroup Condition=" \'$(TargetFramework)\' == \'net48\' ">\n    <PackageReference Include="System.Memory" Version="4.5.4" />\n    <PackageReference Include="System.Text.Json" Version="4.7.2" />\n    <Reference Include="System.Net.Http" />\n  </ItemGroup>\n\n</Project>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Replace the code in "),n("strong",[e._v("Program.cs")]),e._v(" with the following code, which includes some performance benchmarks. You can find more performance benchmarks and see how they are implemented in "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog post"),n("OutboundLink")],1),e._v(":")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('using BenchmarkDotNet.Attributes;\nusing BenchmarkDotNet.Diagnosers;\nusing BenchmarkDotNet.Running;\nusing System;\nusing System.Buffers.Text;\nusing System.Collections;\nusing System.Collections.Concurrent;\nusing System.Collections.Generic;\nusing System.Collections.Immutable;\nusing System.IO;\nusing System.Linq;\nusing System.Net;\nusing System.Net.Http;\nusing System.Net.Security;\nusing System.Net.Sockets;\nusing System.Runtime.CompilerServices;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing System.Text;\nusing System.Text.Json;\nusing System.Text.RegularExpressions;\n\n[MemoryDiagnoser]\npublic class Program\n{\n    static void Main(string[] args) => BenchmarkSwitcher.FromAssemblies(new[] { typeof(Program).Assembly }).Run(args);\n\n    // BENCHMARKS GO HERE\n    private string[] _array = new string[1000];\n\n    [Benchmark]\n    public void CovariantChecking()\n    {\n        string[] array = _array;\n        for (int i = 0; i < array.Length; i++)\n            array[i] = "default";\n    }\n\n\n    private C c1 = new C() { Value = 1 }, c2 = new C() { Value = 2 }, c3 = new C() { Value = 3 };\n\n    [Benchmark]\n    public int Compare() => Comparer<C>.Smallest(c1, c2, c3);\n\n    class Comparer<T> where T : IComparable<T>\n    {\n        public static int Smallest(T t1, T t2, T t3) =>\n            Compare(t1, t2) <= 0 ?\n                (Compare(t1, t3) <= 0 ? 0 : 2) :\n                (Compare(t2, t3) <= 0 ? 1 : 2);\n\n        [MethodImpl(MethodImplOptions.AggressiveInlining)]\n        private static int Compare(T t1, T t2) => t1.CompareTo(t2);\n    }\n\n    class C : IComparable<C>\n    {\n        public int Value;\n        public int CompareTo(C other) => other is null ? 1 : Value.CompareTo(other.Value);\n    }\n\n    private int _offset = 0;\n\n    [Benchmark]\n    public int ThrowHelpers()\n    {\n        var arr = new int[10];\n        var s0 = new Span<int>(arr, _offset, 1);\n        var s1 = new Span<int>(arr, _offset + 1, 1);\n        var s2 = new Span<int>(arr, _offset + 2, 1);\n        var s3 = new Span<int>(arr, _offset + 3, 1);\n        var s4 = new Span<int>(arr, _offset + 4, 1);\n        var s5 = new Span<int>(arr, _offset + 5, 1);\n        return s0[0] + s1[0] + s2[0] + s3[0] + s4[0] + s5[0];\n    }\n\n    [Benchmark]\n    public void GenericDictionaries()\n    {\n        for (int i = 0; i < 14; i++)\n            GenericMethod<string>(i);\n    }\n\n    [MethodImpl(MethodImplOptions.NoInlining)]\n    private static object GenericMethod<T>(int level)\n    {\n        switch (level)\n        {\n            case 0: return typeof(T);\n            case 1: return typeof(List<T>);\n            case 2: return typeof(List<List<T>>);\n            case 3: return typeof(List<List<List<T>>>);\n            case 4: return typeof(List<List<List<List<T>>>>);\n            case 5: return typeof(List<List<List<List<List<T>>>>>);\n            case 6: return typeof(List<List<List<List<List<List<T>>>>>>);\n            case 7: return typeof(List<List<List<List<List<List<List<T>>>>>>>);\n            case 8: return typeof(List<List<List<List<List<List<List<List<T>>>>>>>>);\n            case 9: return typeof(List<List<List<List<List<List<List<List<List<T>>>>>>>>>);\n            case 10: return typeof(List<List<List<List<List<List<List<List<List<List<T>>>>>>>>>>);\n            case 11: return typeof(List<List<List<List<List<List<List<List<List<List<List<T>>>>>>>>>>>);\n            case 12: return typeof(List<List<List<List<List<List<List<List<List<List<List<List<T>>>>>>>>>>>>);\n            default: return typeof(List<List<List<List<List<List<List<List<List<List<List<List<List<T>>>>>>>>>>>>>);\n        }\n    }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br"),n("span",{staticClass:"line-number"},[e._v("56")]),n("br"),n("span",{staticClass:"line-number"},[e._v("57")]),n("br"),n("span",{staticClass:"line-number"},[e._v("58")]),n("br"),n("span",{staticClass:"line-number"},[e._v("59")]),n("br"),n("span",{staticClass:"line-number"},[e._v("60")]),n("br"),n("span",{staticClass:"line-number"},[e._v("61")]),n("br"),n("span",{staticClass:"line-number"},[e._v("62")]),n("br"),n("span",{staticClass:"line-number"},[e._v("63")]),n("br"),n("span",{staticClass:"line-number"},[e._v("64")]),n("br"),n("span",{staticClass:"line-number"},[e._v("65")]),n("br"),n("span",{staticClass:"line-number"},[e._v("66")]),n("br"),n("span",{staticClass:"line-number"},[e._v("67")]),n("br"),n("span",{staticClass:"line-number"},[e._v("68")]),n("br"),n("span",{staticClass:"line-number"},[e._v("69")]),n("br"),n("span",{staticClass:"line-number"},[e._v("70")]),n("br"),n("span",{staticClass:"line-number"},[e._v("71")]),n("br"),n("span",{staticClass:"line-number"},[e._v("72")]),n("br"),n("span",{staticClass:"line-number"},[e._v("73")]),n("br"),n("span",{staticClass:"line-number"},[e._v("74")]),n("br"),n("span",{staticClass:"line-number"},[e._v("75")]),n("br"),n("span",{staticClass:"line-number"},[e._v("76")]),n("br"),n("span",{staticClass:"line-number"},[e._v("77")]),n("br"),n("span",{staticClass:"line-number"},[e._v("78")]),n("br"),n("span",{staticClass:"line-number"},[e._v("79")]),n("br"),n("span",{staticClass:"line-number"},[e._v("80")]),n("br"),n("span",{staticClass:"line-number"},[e._v("81")]),n("br"),n("span",{staticClass:"line-number"},[e._v("82")]),n("br"),n("span",{staticClass:"line-number"},[e._v("83")]),n("br"),n("span",{staticClass:"line-number"},[e._v("84")]),n("br"),n("span",{staticClass:"line-number"},[e._v("85")]),n("br"),n("span",{staticClass:"line-number"},[e._v("86")]),n("br"),n("span",{staticClass:"line-number"},[e._v("87")]),n("br"),n("span",{staticClass:"line-number"},[e._v("88")]),n("br"),n("span",{staticClass:"line-number"},[e._v("89")]),n("br"),n("span",{staticClass:"line-number"},[e._v("90")]),n("br"),n("span",{staticClass:"line-number"},[e._v("91")]),n("br"),n("span",{staticClass:"line-number"},[e._v("92")]),n("br"),n("span",{staticClass:"line-number"},[e._v("93")]),n("br"),n("span",{staticClass:"line-number"},[e._v("94")]),n("br"),n("span",{staticClass:"line-number"},[e._v("95")]),n("br"),n("span",{staticClass:"line-number"},[e._v("96")]),n("br"),n("span",{staticClass:"line-number"},[e._v("97")]),n("br"),n("span",{staticClass:"line-number"},[e._v("98")]),n("br"),n("span",{staticClass:"line-number"},[e._v("99")]),n("br"),n("span",{staticClass:"line-number"},[e._v("100")]),n("br"),n("span",{staticClass:"line-number"},[e._v("101")]),n("br"),n("span",{staticClass:"line-number"},[e._v("102")]),n("br"),n("span",{staticClass:"line-number"},[e._v("103")]),n("br"),n("span",{staticClass:"line-number"},[e._v("104")]),n("br"),n("span",{staticClass:"line-number"},[e._v("105")]),n("br")])]),n("ol",{attrs:{start:"5"}},[n("li",[e._v("Run the benchmark application with:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("dotnet run -c Release -f net48 --runtimes net48 netcoreapp31 netcoreapp50 --filter ** --join\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("After running the benchmarks, the program will show summaries of each benchmark it ran:")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/91benchmarks.png")}}),e._v(" "),n("p",[e._v("(Benchmark results)")]),e._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet/5.0?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET 5"),n("OutboundLink")],1),e._v(" is the next evolution of .NET Core and includes many improvements, including "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-5/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("enhanced performance"),n("OutboundLink")],1),e._v(", new language features in "),n("a",{attrs:{href:"https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("C# 9"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/dotnet/runtime/issues/36590?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("smaller applications"),n("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);s.default=a.exports}}]);