// Main Website
const website = 'https://fleter.netlify.app';

// Pages of website
const pSocial = `${website}/html/social/`;
const VINAProject = `${website}/vina-project/`;
const fleterServerDefault = `${website}/fleter-server/`;
const fleterServerDiscord = 'https://discord.gg/WGmUwbrSCt';
const fleterWhatsAppGroup = 'https://chat.whatsapp.com/IDaLyCT1yKn6q163fm3qtj';
const fleterServerAppeal = 'https://docs.google.com/forms/d/e/1FAIpQLSesLvV_mjGURT83jy-B7wzbwWRyneOF0RW5-wCQvlkn1dtWtw/viewform?usp=sf_link';



// the function (please dont edit this if you dont know)
function defaultPage() {
  window.location.href = website;
}
function social() {
  window.location.href = pSocial;
}
function vinaProject() {
  window.location.href = VINAProject;
}
function fleterServer(page) {
  if (page != null) {
    if (page == 'appeal') {
      window.location.href = fleterServerAppeal;
    } else if (page == 'discord') {
      window.location.href = fleterServerDiscord;
    } else if (page == 'report-server') {
      window.location.href = fleterServerDefault;
    } else if (page == 'report-player') {
      window.location.href = fleterServerDefault;
    } else {
      window.location.href = fleterServerDefault;
    }
  } else {
    window.location.href = fleterServerDefault;
  }
}

function discordServer() {
  window.location.href = fleterServerDiscord;
}
function whatsappGroup() {
  window.location.href = fleterWhatsAppGroup;
}