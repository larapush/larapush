let wallpaperElement;const campaigns=[{campaignID:"001",campaignName:"Backup Campaign",campaignSlug:"backup_campaign",enabled:!0,dateRanges:[{startDate:"23/11/2023 20:00 +05:30",endDate:"24/12/2023 00:00 +05:30"},{startDate:"01/12/2024 18:00 +05:30",endDate:"01/12/2024 00:00 +05:30"},]},{campaignID:"002",campaignName:"Feedback Campaign",campaignSlug:"feedback_campaign",enabled:!0,dateRanges:[{startDate:"24/12/2023 00:00 +05:30",endDate:"01/12/2024 18:00 +05:30"},]}];function sleep(e){return new Promise(a=>setTimeout(a,e))}function isDashboard(){return"/dashboard"==window.location.pathname}async function backup_campaign(e){if("/dashboard"==window.location.pathname&&"Pro Panel"==document.querySelector(".profile-name>span").innerText){var a=localStorage.getItem("backup_alert_"+e.campaignID);(null==a||moment().diff(moment(parseInt(a)),"days")>=7)&&Swal.fire({title:"Backup Your Data!",text:"Don't forget to regularly save your subscriber data. Click 'Export Now' to do this. This reminder will appear weekly.",imageUrl:"https://cdn.larapush.com/uploads/backup_alert.webp",imageWidth:400,imageAlt:"Backup Your Data",showCancelButton:!0,confirmButtonText:"Export Now",cancelButtonText:"Remind Me Later"}).then(a=>{console.log(a),a.value&&(localStorage.setItem("backup_alert_"+e.campaignID,moment().valueOf()),window.location.href="/integration/importNexport")})}if("/integration/importNexport"==window.location.pathname&&"Pro Panel"==document.querySelector(".profile-name>span").innerText){var t=localStorage.getItem("import_export_cache_"+e.campaignID);await sleep(1e3),(null==t||moment().diff(moment(parseInt(t)),"days")>=7)&&introJs().setOptions({steps:[{element:document.querySelector(".btn-danger"),intro:"Click on this button to prepare your export."},{element:document.querySelector("#notificationDropdown").parentElement,intro:`⏬ Once your export is ready<br><br><b>Download Your Export from Here</b>`},],doneLabel:"OK"}).start().onchange(function(e){}).oncomplete(function(){localStorage.setItem("import_export_cache_"+e.campaignID,moment().valueOf())})}}async function feedback_campaign(e){!(!isDashboard()||localStorage.getItem("feedback_done_"+e.campaignID))&&Swal.fire({title:"We need your feedback!",text:"Working hard on our latest update, we value your feedback! Spare a moment to fill out this form and be the first to get early notification of the latest update.",imageUrl:"https://cdn.larapush.com/uploads/feedback_alert.webp",imageWidth:400,imageAlt:"We need your feedback!",showCancelButton:!1,confirmButtonText:"Fill Form Now!",cancelButtonText:"Remind Me Later",customClass:{confirmButton:"btn-block"}}).then(a=>{console.log(a),a.value&&(localStorage.setItem("feedback_done_"+e.campaignID,!0),window.open("https://bit.ly/3NFRMf1","_blank"))})}(wallpaperElement=document.querySelector(".auth.login-bg"))&&(wallpaperElement.style.background="url(https://source.unsplash.com/1920x1080/?wallpaper)",wallpaperElement.style.backgroundSize="cover"),$(document).ready(async function(){let e=moment();for(let a of campaigns)if(a.enabled)for(let t of a.dateRanges){let n=moment(t.startDate,"DD/MM/YYYY HH:mm Z"),o=moment(t.endDate,"DD/MM/YYYY HH:mm Z");if(e.isBetween(n,o)&&"function"==typeof window[a.campaignSlug]){window[a.campaignSlug](a);break}}});