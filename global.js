// Main Website
const website = 'https://fleter.netlify.app';

// Pages of website
const pSocial = `${website}/html/social/`;
const VINAProject = `${website}/vina-project/`;
const fleterServer = `${website}/fleter-server/`;
const fleterServerAppeal = 'https://docs.google.com/forms/d/e/1FAIpQLSesLvV_mjGURT83jy-B7wzbwWRyneOF0RW5-wCQvlkn1dtWtw/viewform?usp=sf_link';

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
    if (page = 'appeal') {
      window.location.href = fleterServerAppeal;
    } else {
      window.location.href = fleterServer;
    }
  } else {
    window.location.href = fleterServer;
  }
}