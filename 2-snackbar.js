import{c as A,a as r}from"./assets/close-D329uYHS.js";/* empty css                      */import{i as n}from"./assets/vendor-A92OCY9B.js";const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgB3VVtccMwDFUYhMHMYIUQBiuEMFgYJEwSBtsQdAx6Q+AyaBlo8vo8+3z+3PqnfXfvcrGkJymxZaJ7R1dyYOZeHqPwWaiwfBF+CD+7rjvRXyDCSriygxYewLO3vqKIMH6XEx8gYriYZIkCNiRWgW1G8l1MfA/jMSZcgie+UKIqDfY3FYfDCgdFjagRV/anUSOK4nAaw+qzO6FFHI5vZtf44gic/y0O54NhsLakkqTE5f1VOFUlSCXJVZ7SMYafQ0Px7n6TlD4LXw/ne8wwIfCpkCQnbnfiGDP2uWAvyZSxr+FODB02tKioEVxzjuBkEpg5VD0q0L3myOCLOQ+opOzsijoiZk814OtE1bZlTo/rmd1YH6gF7Oa9xZndhaO99TXXac2VqeQxCF+E9r+chF/CTa7MCz00vgGTokbYR7IkrwAAAABJRU5ErkJggg==";document.querySelector(".form").addEventListener("submit",f=>{f.preventDefault();const e=f.target,s=Number(e.elements.delay.value),a=e.elements.state.value;new Promise((t,o)=>{setTimeout(()=>{a==="fulfilled"?t(s):o(s)},s)}).then(t=>{n.show({title:"OK",message:`Fulfilled promise in ${t}ms`,position:"topRight",backgroundColor:"#59a10d",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:l,timeout:5e3,close:!1,buttons:[[`<button class="toast-close-btn">
                <img src="${A}" style="width: 12px; height: 12px;">
            </button>`,function(o,i){o.hide({transitionOut:"fadeOut"},i)}]]})}).catch(t=>{n.show({title:"Error",message:`Rejected promise in ${t}ms`,position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff",iconUrl:r,timeout:5e3,close:!1,buttons:[[`<button class="toast-close-btn">
                <img src="${A}" style="width: 12px; height: 12px;">
            </button>`,function(o,i){o.hide({transitionOut:"fadeOut"},i)}]]})}),e.reset()});
//# sourceMappingURL=2-snackbar.js.map
