function generateDorks() {
    let domain = document.getElementById("domain").value.trim();
    
    if (domain === "") {
        alert("Please enter a domain!");
        return;
    }

    document.getElementById("directoryListing").href = `https://www.google.com/search?q=site%3A*.${domain}+intitle%3A%22Index+of+%2F%22+OR+inurl%3A%2F`;
    document.getElementById("configurationFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext%3Aconf+OR+inurl%3Aconfig+OR+ext%3Aenv)`;
    document.getElementById("databaseFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext%3Asql+OR+ext%3Adb+OR+inurl%3A.bak)`;
    document.getElementById("logFiles").href = `https://www.google.com/search?q=site%3A*.${domain}+(ext%3Alog+OR+inurl%3Alogs+OR+ext%3Atxt+inurl%3Alog)`;
    document.getElementById("gitFolder").href = `https://www.google.com/search?q=site%3A*.${domain}+(inurl%3A.git+OR+intitle%3A%22git+repository%22+OR+inurl%3A.git%2Fconfig)`;
}
