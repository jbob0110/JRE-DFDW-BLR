var jiraKey;
var project;
var jiraInstance;
var url;
var description;
// asyncRequestCount keeps track of when the sub-tasks and labels are being sent.
var asyncRequestCount = 0;
/**This if checks the users browser and grabs their browser information based on this.*/
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
  url = tabs[0].url;
  getURLs(url);
});
//chrome.storage.sync.get(['POarray'], function (result) {
  //var x = document.getElementById("POs");
  //var option;
  //if(result.POarray){
    //for (var i = 0; i< result.POarray.length; i++){
      //option = document.createElement("option");
      //var split = result.POarray[i].split("<spa");
      //split = split[0].split(" :");
      //option.text = split[0];
      //option.value = split[1];
      //x.add(option);
    //}
  //}
//}
//);
//chrome.storage.sync.get(['SMarray'], function(result) {
  //var x = document.getElementById("SMs");
  //var option, split;
  //if(result.SMarray){
    //for(var i = 0; i< result.SMarray.length; i++){
      //option = document.createElement("option");
      //split = result.SMarray[i].split("<spa");
      //split = split[0].split(" :");
      //option.text = split[0];
      //option.value = split[1];
      //x.add(option);
    //}
  //}
//}
//);
//chrome.storage.sync.get(['SEarray'], function(result) {
  //var x = document.getElementById("SEs");
  //var option, split;
  //if(result.SEarray){
    //for(var i = 0; i< result.SEarray.length; i++){
      //option = document.createElement("option");
      //split = result.SEarray[i].split("<spa");
      //split = split[0].split(" :");
      //option.text = split[0];
      //option.value = split[1];
      //x.add(option);
    //}
  //}
//}
//);
//chrome.storage.sync.get(['TLarray'], function(result) {
  //var x = document.getElementById("TLs");
  //var option, split;
  //if(result.TLarray){
    //for(var i = 0; i< result.TLarray.length; i++){
      //option = document.createElement("option");
      //split = result.TLarray[i].split("<spa");
      //split = split[0].split(" :");
      //option.text = split[0];
      //option.value = split[1];
      //x.add(option);
    //}
  //}
//}
//);
window.onload = () => {
  document.getElementById('scYes').onclick = () => {
    //var Po = document.getElementById('POs').value;
    //var Sm = document.getElementById('SMs').value;
    //var Se = document.getElementById('SEs').value;
    //var Tl = document.getElementById('TLs').value;
    //console.log("PO: "+Po);
    //console.log("SM: "+Sm);
    //console.log("SE: "+Se);
    //console.log("TL: "+Tl);
    document.getElementById('loader').style.display = "block";
         
  addSubTask(
    {"fields":{  
      "project":{  "key": project },
      "parent":{  "key": jiraKey},
      "summary":"Requirements",
      "description":"As part of Requirements subtask:\n - Identify/document requirements (using applicable tooling).\n - Reference the existing EM+ requirements document on Team Sharepoint (Documents -> EM Plus Dev -> EM+ Design Documents) or previous DM/EM Word documents\n - Review with the agile team.\n - Get +1 from the reviewers in the comments section (minimum 2)\n Approvers: Product team and Development team",
      "assignee":{  "name": "DE014739"},
      "issuetype":{  "name":"Sub-task"},
      "timetracking":{  "originalEstimate": "4h"}
    }
    }
  );
    console.log("Requirements Sent");
        
  addSubTask(
    {"fields":{  
      "project":{  "key": project },
      "parent":{ "key": jiraKey},
      "summary":"Design",
      "description":"The design subtask will be considered done when the following is completed:\n - The technical design is documented and posted for review in [Designs|https://cernerprod.sharepoint.com/:f:/s/installationsolutions/EozrG-75iF9Amx6PBYtyysMBdJ3_8GEtun3xV4UDdr1pjA?e=TNrtaI] [Installation Solution -> Design]\n - Design, testing considerations and RQM test plan is reviewed and approved in the designs channel [minimum two +1]\n - Jform is created and link is added to the design document and development Jira\n - DI is approved in JForm\n Approvers: Development Team",
      //"assignee":{  "name": Sm},
      "issuetype":{  "name":"Sub-task"},
      "timetracking":{  "originalEstimate": "12h"}
    }
    }
  );
    console.log("Design Sent");
  addSubTask(
    {"fields":{
      "project":{  "key": project },
      "parent":{ "key": jiraKey},
      "summary":"Implementation",
      "description":"The Implementation/Coding subtask will be considered done when the following are completed:\n - Code implementation and Junits testing\n - Jenkins build and Black box testing (EM2)\n - Create code reviews either with Git pull requests or Crucible (for SVN)\n - Post review(s) to the two distribution lists (DL_DIGFACT_DEVWORKBENCH_DS_INSTALL and DL_IND_DIGFACT_DEVWORKBENCH_INSTALL ), and reviewers to review\n - Address review comments and repost as needed until all comments are addressed and re-tested\n - DO is approved in JForm",
      //"assignee":{  "name": Sm},
      "issuetype":{  "name":"Sub-task"},
      "timetracking":{  "originalEstimate": "18h"}
    }
    }
  );
    console.log("Implementation Sent");
  addSubTask(
    {"fields":{  "project":{  "key": project },
    "parent":{ "key": jiraKey},
    "summary":"RQM/QA Testing",
    "description":"The RQM/QA testing will be considered done when the following actions are completed:\n - RQM test details and RQM links are added in the description\n - Begin testing and add link to test results",
    //"assignee":{  "name": Tl},
    "issuetype":{  "name":"Sub-task"},
    "timetracking":{  "originalEstimate": "8h"}
    }
    }
  );
    console.log("RQM/QA Testing Sent");
  addSubTask(
    {"fields":{  "project":{  "key": project },
      "parent":{ "key": jiraKey},
      "summary":"Documentation",
      "description":"The documentation subtask will be considered done when the required wiki page updates are completed.\n Note: Mark this as Not applicable if no documentation is required.",
      //"assignee":{  "name": Tl},
      "issuetype":{  "name":"Sub-task"},
      "timetracking":{  "originalEstimate": "2h"}
    }
    }
  );
    console.log("Documentation Sent");
  };
  
  //document.getElementById("options").onclick = () =>{
    //if (chrome.runtime.openOptionsPage) {
      //chrome.runtime.openOptionsPage();
    //} else {
      //window.open(chrome.runtime.getURL('options.html'));
    //}
  //};
};

function addSubTask(subtask){
  var xhr = new XMLHttpRequest;
  xhr.open("POST", "https://"+jiraInstance+".cerner.com/rest/api/2/issue/");
  xhr.setRequestHeader("Content-Type","application/json","Access-Control-Allow-Origin");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.responseText);
      asyncRequestCount--;
      checkAsynRequestCount();
    }
  };
  asyncRequestCount++;
  xhr.send(JSON.stringify(subtask));
};

function getURLs(url){
  var re = /https\:\/\/(.+?)\..+\/((.+?)\-[^\?]+)/;
  var regexGroups = { jIns: 1, jKey: 2, pKey: 3 };
  var m = re.exec(url);
  jiraKey = m[regexGroups.jKey];
  project = m[regexGroups.pKey];
  jiraInstance = m[regexGroups.jIns];
};

/** This function checks if the asyncRequestCount is 0 then will reload the page, and hide the loading spinner*/
function checkAsynRequestCount(){
  if(asyncRequestCount === 0){
    chrome.tabs.reload();
    document.getElementById('loader').style.display = "none";
  }
}