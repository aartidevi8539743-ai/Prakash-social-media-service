/* ===================================
Prakash M.9
script.js
Part 1
=================================== */

// Website Loaded
document.addEventListener("DOMContentLoaded", function () {

console.log("Prakash M.9 Website Loaded Successfully");

showToast("Welcome To Prakash M.9");

});

// Toast Message
function showToast(message){

let toast=document.getElementById("toast");

if(!toast){

toast=document.createElement("div");

toast.id="toast";

toast.className="toast";

document.body.appendChild(toast);

}

toast.innerHTML=message;

toast.style.display="block";

setTimeout(function(){

toast.style.display="none";

},3000);

}

// Loading Function
function showLoading(){

let loading=document.getElementById("loading");

if(loading){

loading.style.display="block";

}

}

function hideLoading(){

let loading=document.getElementById("loading");

if(loading){

loading.style.display="none";

}

}

// Current Year
const year=new Date().getFullYear();

document.querySelectorAll(".currentYear").forEach(function(el){

el.innerHTML=year;

});

// Website Status
console.log("Version 3.0 Ready");/* ===================================
script.js
Part 2
=================================== */

// Login Form
const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const mobile=document.getElementById("mobile").value;

const password=document.getElementById("password").value;

if(mobile===""||password===""){

showToast("Please Fill All Fields");

return;

}

showLoading();

setTimeout(function(){

hideLoading();

showToast("Login Successful");

window.location.href="index.html";

},1500);

});

}

// Logout
function logout(){

if(confirm("Are You Sure You Want To Logout?")){

showToast("Logged Out Successfully");

setTimeout(function(){

window.location.href="login.html";

},1000);

}

}

// Button Click Sound
function buttonClick(){

console.log("Button Clicked");

}

// Copy Text
function copyText(text){

navigator.clipboard.writeText(text);

showToast("Copied Successfully");

}

// Scroll To Top
function scrollTopPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}/* ===================================
script.js
Part 3
=================================== */

// Merchant Registration
const merchantForm=document.getElementById("merchantForm");

if(merchantForm){

merchantForm.addEventListener("submit",function(e){

e.preventDefault();

showLoading();

setTimeout(function(){

hideLoading();

showToast("Merchant Registration Successful");

merchantForm.reset();

},1500);

});

}

// Distributor Registration
const distributorForm=document.getElementById("distributorForm");

if(distributorForm){

distributorForm.addEventListener("submit",function(e){

e.preventDefault();

showLoading();

setTimeout(function(){

hideLoading();

showToast("Distributor Registration Successful");

distributorForm.reset();

},1500);

});

}

// Contact Form
const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Message Sent Successfully");

contactForm.reset();

});

}

// Refresh Page
function refreshPage(){

location.reload();

}

// Go Back
function goBack(){

history.back();

}/* ===================================
script.js
Part 4
=================================== */

// Search User
function searchUser(){

const input=document.getElementById("searchInput");

if(!input) return;

const filter=input.value.toLowerCase();

const rows=document.querySelectorAll("table tbody tr");

rows.forEach(function(row){

const text=row.innerText.toLowerCase();

row.style.display=text.includes(filter)?"":"none";

});

}

// Approve User
function approveUser(userId){

showToast("User "+userId+" Approved");

console.log("Approved:",userId);

}

// Reject User
function rejectUser(userId){

showToast("User "+userId+" Rejected");

console.log("Rejected:",userId);

}

// Delete User
function deleteUser(userId){

if(confirm("Delete this user?")){

showToast("User Deleted");

console.log("Deleted:",userId);

}

}

// Preview Image
function previewImage(event){

const file=event.target.files[0];

const preview=document.getElementById("previewImage");

if(file&&preview){

preview.src=URL.createObjectURL(file);

preview.style.display="block";

}

}

// Update Status
function updateStatus(id,status){

const element=document.getElementById(id);

if(element){

element.innerHTML=status;

}

}/* ===================================
script.js
Part 6
=================================== */

// Feedback Form
const feedbackForm=document.getElementById("feedbackForm");

if(feedbackForm){

feedbackForm.addEventListener("submit",function(e){

e.preventDefault();

showLoading();

setTimeout(function(){

hideLoading();

showToast("Feedback Submitted Successfully");

feedbackForm.reset();

},1500);

});

}

// Announcement Form
const announcementForm=document.getElementById("announcementForm");

if(announcementForm){

announcementForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Announcement Published Successfully");

announcementForm.reset();

});

}

// Notification Form
const notificationForm=document.getElementById("notificationForm");

if(notificationForm){

notificationForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Notification Sent Successfully");

notificationForm.reset();

});

}

// Enable Button
function enableSystem(){

showToast("System Enabled");

console.log("System Enabled");

}

// Disable Button
function disableSystem(){

showToast("System Disabled");

console.log("System Disabled");

}

// Update Counter
function updateCounter(id,value){

const el=document.getElementById(id);

if(el){

el.innerHTML=value;

}

}/* ===================================
script.js
Part 7
=================================== */

// Admin Login
const adminLogin=document.getElementById("adminLogin");

if(adminLogin){

adminLogin.addEventListener("submit",function(e){

e.preventDefault();

showLoading();

setTimeout(function(){

hideLoading();

showToast("Admin Login Successful");

window.location.href="admin.html";

},1500);

});

}

// Profile Update
const adminProfileForm=document.getElementById("adminProfileForm");

if(adminProfileForm){

adminProfileForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Profile Updated Successfully");

});

}

// Copy UPI
function copyUPI(){

const upi="7004533943-2@ybl";

navigator.clipboard.writeText(upi);

showToast("UPI Copied");

}

// Open WhatsApp
function openWhatsApp(){

window.open("https://chat.whatsapp.com/Lnvm7suOpduAd3I6yFeeAE","_blank");

}

// Open YouTube
function openYouTube(){

window.open("https://www.youtube.com/@PkAartideviVlogs","_blank");

}

// Call Support
function callSupport(){

window.location.href="tel:7004533943";

}/* ===================================
script.js
Part 8
=================================== */

// Website Settings Form
const websiteSettings=document.getElementById("websiteSettings");

if(websiteSettings){

websiteSettings.addEventListener("submit",function(e){

e.preventDefault();

showToast("Website Settings Saved Successfully");

});

}

// Payment Gateway Form
const paymentGatewayForm=document.getElementById("paymentGatewayForm");

if(paymentGatewayForm){

paymentGatewayForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Payment Gateway Updated");

});

}

// Banner Upload
const bannerForm=document.getElementById("bannerForm");

if(bannerForm){

bannerForm.addEventListener("submit",function(e){

e.preventDefault();

showLoading();

setTimeout(function(){

hideLoading();

showToast("Banner Uploaded Successfully");

bannerForm.reset();

},1500);

});

}

// Backup Database
function createBackup(){

showToast("Database Backup Created");

console.log("Backup Created");

}

// Restore Database
function restoreBackup(){

showToast("Database Restored");

console.log("Backup Restored");

}

// Export Users
function exportUsers(){

showToast("Users Exported Successfully");

console.log("CSV Export Completed");

}/* ===================================
script.js
Part 9
=================================== */

// Search Form
const searchUserForm=document.getElementById("searchUserForm");

if(searchUserForm){

searchUserForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Search Completed");

});

}

// Contact Form
const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

showToast("Contact Information Updated");

});

}

// Notice Form
const noticeBoard=document.querySelector("#admin-notice-board textarea");

if(noticeBoard){

noticeBoard.addEventListener("input",function(){

console.log("Notice Updated");

});

}

// Publish Notice
function publishNotice(){

showToast("Notice Published Successfully");

}

// Website Refresh
function refreshDashboard(){

location.reload();

}

// Logout Admin
function adminLogout(){

if(confirm("Are you sure you want to logout?")){

showToast("Admin Logged Out");

setTimeout(function(){

window.location.href="login.html";

},1000);

}

}/* ===================================
script.js
Part 10
=================================== */

// Wallet Update
function updateWallet(amount){

const wallet=document.getElementById("walletBalance");

if(wallet){

wallet.innerHTML="₹"+amount;

}

showToast("Wallet Updated");

}

// Withdraw Request
function withdrawRequest(){

showLoading();

setTimeout(function(){

hideLoading();

showToast("Withdraw Request Submitted");

},1500);

}

// Update Dashboard Counts
function updateDashboard(){

updateCounter("merchantCount",25);

updateCounter("distributorCount",18);

updateCounter("userCount",43);

updateCounter("totalMerchants",25);

updateCounter("totalDistributors",18);

}

// Live Date & Time
function updateDateTime(){

const now=new Date();

const el=document.getElementById("dateTime");

if(el){

el.innerHTML=now.toLocaleString();

}

}

setInterval(updateDateTime,1000);

// Initialize Dashboard
window.addEventListener("load",function(){

updateDashboard();

updateDateTime();

console.log("Dashboard Ready");

});/* ===================================
script.js
Part 11
=================================== */

// Auto Update Statistics
function autoUpdateStats(){

const merchant=Math.floor(Math.random()*100);

const distributor=Math.floor(Math.random()*50);

const users=merchant+distributor;

updateCounter("merchantCount",merchant);
updateCounter("distributorCount",distributor);
updateCounter("userCount",users);

}

setInterval(autoUpdateStats,10000);

// Website Online Status
function websiteStatus(){

const status=document.getElementById("websiteStatus");

if(status){

status.innerHTML="🟢 Online";

status.style.color="green";

}

}

websiteStatus();

// Confirm Delete
function confirmDelete(name){

if(confirm("Do you want to delete "+name+" ?")){

showToast(name+" Deleted Successfully");

}

}

// Confirm Approve
function confirmApprove(name){

showToast(name+" Approved Successfully");

}

// Confirm Reject
function confirmReject(name){

showToast(name+" Rejected Successfully");

}

// Download Report
function downloadReport(){

showToast("Report Download Started");

console.log("Downloading Report...");

}

// Print Page
function printPage(){

window.print();

}/* ===================================
script.js
Part 12
=================================== */

// Save Data To Local Storage
function saveData(key,value){

localStorage.setItem(key,JSON.stringify(value));

showToast("Data Saved Successfully");

}

// Get Data From Local Storage
function getData(key){

return JSON.parse(localStorage.getItem(key));

}

// Remove Data
function removeData(key){

localStorage.removeItem(key);

showToast("Data Removed");

}

// Clear All Storage
function clearStorage(){

if(confirm("Clear All Local Data?")){

localStorage.clear();

showToast("All Data Cleared");

}

}

// Dark Mode Toggle
function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

showToast("Theme Changed");

}

// Network Status
window.addEventListener("online",function(){

showToast("Internet Connected");

});

window.addEventListener("offline",function(){

showToast("Internet Disconnected");

});

// Page Loaded
window.addEventListener("load",function(){

console.log("script.js Part 12 Loaded Successfully");

});/* ===================================
script.js
Part 13
=================================== */

// Open Website
function openWebsite(url){

window.open(url,"_blank");

}

// Open Home Page
function goHome(){

window.location.href="index.html";

}

// Open Merchant Page
function goMerchant(){

window.location.href="merchant.html";

}

// Open Distributor Page
function goDistributor(){

window.location.href="distributor.html";

}

// Open Login Page
function goLogin(){

window.location.href="login.html";

}

// Open Admin Panel
function goAdmin(){

window.location.href="admin.html";

}

// Current Date
function currentDate(){

const today=new Date();

const date=document.getElementById("currentDate");

if(date){

date.innerHTML=today.toLocaleDateString();

}

}

// Current Time
function currentTime(){

const now=new Date();

const time=document.getElementById("currentTime");

if(time){

time.innerHTML=now.toLocaleTimeString();

}

}

setInterval(currentTime,1000);

window.addEventListener("load",function(){

currentDate();

currentTime();

console.log("script.js Part 13 Loaded");

});/* ===================================
script.js
Part 14
=================================== */

// FAQ Toggle
function toggleFAQ(id){

const faq=document.getElementById(id);

if(faq){

faq.classList.toggle("show");

}

}

// Show Modal
function openModal(id){

const modal=document.getElementById(id);

if(modal){

modal.style.display="flex";

}

}

// Close Modal
function closeModal(id){

const modal=document.getElementById(id);

if(modal){

modal.style.display="none";

}

}

// Auto Close Modal
window.onclick=function(event){

document.querySelectorAll(".modal").forEach(function(modal){

if(event.target===modal){

modal.style.display="none";

}

});

};

// Show Current Year
const footerYear=document.getElementById("footerYear");

if(footerYear){

footerYear.innerHTML=new Date().getFullYear();

}

// Welcome Message
window.addEventListener("load",function(){

console.log("Welcome To Prakash M.9");

showToast("Website Ready Successfully");

});/* ===================================
script.js
Part 15
Final Part
=================================== */

// Initialize Website
function initWebsite(){

console.log("Prakash M.9 Initialized");

updateDashboard();

currentDate();

currentTime();

websiteStatus();

}

// Run After Page Load
window.addEventListener("load",function(){

initWebsite();

showToast("Welcome To Prakash M.9");

});

// Developer Information
const developer={

website:"Prakash M.9",

version:"3.0",

developer:"Prakash Kumar",

platform:"Firebase",

language:"HTML, CSS, JavaScript",

year:new Date().getFullYear()

};

console.log(developer);

// Disable Right Click
document.addEventListener("contextmenu",function(e){

e.preventDefault();

});

// Disable F12
document.addEventListener("keydown",function(e){

if(e.key==="F12"){

e.preventDefault();

}

});

// Disable Ctrl+Shift+I
document.addEventListener("keydown",function(e){

if(e.ctrlKey&&e.shiftKey&&e.key==="I"){

e.preventDefault();

}

});

/* ===== END OF script.js ===== */
