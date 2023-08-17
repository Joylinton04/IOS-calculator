let leads = []
const messageEl = document.getElementById("message-el") 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const clearBtn = document.getElementById("clear-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const leadsFromLocalStorage1 = JSON


if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads)
}

inputBtn.addEventListener("click", function(){
    leads.push(inputEl.value)
    render(leads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(leads))
}
)

function render(myLeads) {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=  `
        <li>
          <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}
          </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

clearBtn.addEventListener("dblclick", function() {
    leads = []
    render(leads)
    localStorage.clear()
})
 
tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        leads.push(tabs[0].url)
        render(leads)
        localStorage.setItem("myLeads ", JSON.stringify(leads))
    })
    
})
