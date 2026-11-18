const sites = [
  ["Full Scholarships", "fullscholarships.net", "Global", "international,fully-funded,featured", "Global scholarship listings and application guides", "#25b67d"],
  ["Full Scholarships Directory", "fullscholarships.net", "Global", "international,fully-funded,featured", "Scholarships, deadlines, and funding opportunities", "#168c63"],
  ["Opportunities Corners", "opportunitiescorners.com", "Global", "international,fully-funded,graduate", "International scholarships, internships, and exchange programs", "#eb5b5b"],
  ["Opportunities Circle", "opportunitiescircle.com", "Global", "international,fully-funded,graduate", "International fellowships and fully funded study opportunities", "#4c72d7"],
  ["Scholarships 365", "scholarships365.info", "Global", "international,fully-funded", "International scholarship and fellowship opportunities", "#f59e42"],
];

const extraNames = [
  ["Scholarships.com","scholarships.com","USA","usa,undergraduate","Search a large database of US awards"],
  ["Fastweb","fastweb.com","USA","usa,undergraduate","Personalized US scholarship recommendations"],
  ["Bold.org","bold.org","USA","usa,undergraduate,graduate","Scholarships and grants for students"],
  ["Scholarships360","scholarships360.org","USA","usa,undergraduate","Vetted scholarships with application guidance"],
  ["Scholly","myscholly.com","USA","usa,undergraduate","Discover and track US scholarship applications"],
  ["Niche","niche.com","USA","usa,undergraduate","Scholarships and college discovery"],
  ["Going Merry","goingmerry.com","USA","usa,undergraduate","Profile-based scholarship matching"],
  ["Unigo","unigo.com","USA","usa,undergraduate","Scholarships and student resources"],
  ["Chegg Scholarships","chegg.com/scholarships","USA","usa,undergraduate","Find awards from a broad US database"],
  ["Raise.me","raise.me","USA","usa,undergraduate","Earn micro-scholarships throughout high school"],
  ["College Board","bigfuture.collegeboard.org","USA","usa,undergraduate","College search and scholarship tools"],
  ["FinAid","finaid.org","USA","usa,undergraduate,graduate","Financial aid and scholarship resource center"],
  ["Tuition Funding Sources","tfs.org","USA","usa,undergraduate","National scholarship search platform"],
  ["Scholarship America","scholarshipamerica.org","USA","usa,undergraduate","National scholarships and education assistance"],
  ["Appily","appily.com","USA","usa,undergraduate","College and scholarship discovery"],
  ["Cappex","cappex.com","USA","usa,undergraduate","College and scholarship search"],
  ["Peterson's","petersons.com","USA","usa,graduate","Test prep and financial aid resources"],
  ["International Scholarships","internationalscholarships.com","Global","international,graduate","Search funding for international students"],
  ["IES Abroad","iesabroad.org","Global","international,undergraduate","Study abroad scholarships and grants"],
  ["Study Abroad","studyabroad.com","Global","international,undergraduate","International study and funding directory"],
  ["IEFA","iefa.org","Global","international,undergraduate,graduate","International scholarships and education resources"],
  ["World Scholarship Forum","worldscholarshipforum.com","Global","international,fully-funded","Global scholarship news and opportunities"],
  ["Scholarship Positions","scholarship-positions.com","Global","international,fully-funded,graduate","International scholarships and grants"],
  ["DAAD","daad.de","Germany","europe,international,fully-funded,graduate","German academic exchange and funding"],
  ["Study in Germany","study-in-germany.de","Germany","europe,international,graduate","Information on study and funding in Germany"],
  ["Universities Scotland","universities-scotland.ac.uk","UK","uk,europe,undergraduate","Scottish higher education scholarships"],
  ["UCAS","ucas.com","UK","uk,europe,undergraduate","UK university and funding applications"],
  ["British Council","britishcouncil.org","UK","uk,europe,international,fully-funded","International study and scholarship programs"],
  ["Chevening","chevening.org","UK","uk,europe,international,fully-funded,graduate","UK government scholarships for future leaders"],
  ["Commonwealth Scholarship","csc.ukri.org","UK","uk,europe,international,fully-funded,graduate","Commonwealth scholarships and fellowships"],
  ["Gates Cambridge","gatescambridge.org","UK","uk,europe,fully-funded,graduate","Cambridge postgraduate scholarships"],
  ["Rhodes Trust","rhodestrust.ox.ac.uk","UK","uk,europe,fully-funded,graduate","Oxford Rhodes Scholarships"],
  ["Clarendon Scholarships","ox.ac.uk","UK","uk,europe,fully-funded,graduate","Oxford graduate scholarship program"],
  ["Erasmus Mundus","erasmus-plus.ec.europa.eu","Europe","europe,international,fully-funded,graduate","EU joint master and mobility scholarships"],
  ["Campus France","campusfrance.org","France","europe,international,graduate","Study and funding information for France"],
  ["Study in Italy","studyinitaly.esteri.it","Italy","europe,international,undergraduate,graduate","Italian higher education funding and admissions"],
  ["Study in Sweden","studyinsweden.se","Sweden","europe,international,graduate","Study, scholarships, and life in Sweden"],
  ["Study in Norway","studyinnorway.no","Norway","europe,international,graduate","Norwegian higher education information"],
  ["Study in Denmark","studyindenmark.dk","Denmark","europe,international,graduate","Scholarships and study in Denmark"],
  ["Study in Netherlands","studyinnl.org","Netherlands","europe,international,graduate","Dutch higher education funding"],
  ["Euraxess","euraxess.ec.europa.eu","Europe","europe,international,graduate","European researcher mobility and funding"],
  ["ETH Zurich","ethz.ch","Switzerland","europe,international,graduate","Research and graduate funding"],
  ["EPFL","epfl.ch","Switzerland","europe,international,graduate","Swiss higher education and grants"],
  ["Swiss Government Excellence","eda.admin.ch","Switzerland","europe,international,fully-funded,graduate","Swiss government scholarships"],
  ["Fulbright","fulbright.org","Global","international,fully-funded,graduate","International educational exchange awards"],
  ["Fulbright Commission","fulbrightcommission.org.uk","UK","uk,europe,international,fully-funded,graduate","UK and US Fulbright opportunities"],
  ["UNESCO","unesco.org","Global","international,fully-funded,graduate","UNESCO scholarships and fellowship programs"],
  ["UNHCR","unhcr.org","Global","international,undergraduate,graduate","Education support for displaced people"],
  ["OECD","oecd.org","Global","international,graduate","International policy research and fellowships"],
  ["World Bank","worldbank.org","Global","international,fully-funded,graduate","Education and development scholarships"],
  ["Joint Japan World Bank","worldbank.org","Global","international,fully-funded,graduate","Graduate partnership scholarships"],
  ["Aga Khan Foundation","akf.org","Global","international,fully-funded,graduate","Education grants and scholarships"],
  ["MasterCard Foundation","mastercardfdn.org","Global","international,undergraduate,graduate","Education and leadership scholarships"],
  ["ACLS","acls.org","USA","usa,international,graduate","Humanities and social sciences fellowships"],
  ["Open Society Foundations","opensocietyfoundations.org","Global","international,graduate","Education and human rights grants"],
  ["Wellcome","wellcome.org","UK","uk,europe,international,graduate","Biomedical research funding"],
  ["Rotary Foundation","rotary.org","Global","international,fully-funded,graduate","Global grants and peace fellowship"],
  ["AAUW","aauw.org","USA","usa,international,graduate","Awards for women in higher education"],
  ["P.E.O. International","peointernational.org","USA","usa,international,graduate","Educational grants for women"],
  ["Soroptimist","soroptimist.org","USA","usa,undergraduate,graduate","Awards for women improving lives"],
  ["Jeannette Rankin Foundation","rankinfoundation.org","USA","usa,undergraduate","Scholarships for low-income women"],
  ["Jack Kent Cooke Foundation","jkcf.org","USA","usa,undergraduate,graduate","Large merit and need-based awards"],
  ["Horatio Alger Association","horatioalger.org","USA","usa,undergraduate","Scholarships for overcoming adversity"],
  ["Dell Scholars","dellscholars.org","USA","usa,undergraduate","Comprehensive college support scholarships"],
  ["Hispanic Scholarship Fund","hsf.net","USA","usa,undergraduate,graduate","Scholarships for Hispanic students"],
  ["Asian American Foundation","taaft.org","USA","usa,undergraduate","Scholarships and community programs"],
  ["UNCF","uncf.org","USA","usa,undergraduate,graduate","Funding and scholarships for Black students"],
  ["Native Forward","nativeforward.org","USA","usa,undergraduate,graduate","Native student scholarships"],
  ["Thurgood Marshall College Fund","tmcf.org","USA","usa,undergraduate","HBCU scholarship opportunities"],
  ["Ron Brown Scholar Fund","ronbrown.org","USA","usa,undergraduate","Scholarships for Black American students"],
  ["Point Foundation","pointfoundation.org","USA","usa,undergraduate,graduate","Scholarships for LGBTQ students"],
  ["Military.com Scholarships","military.com/education","USA","usa,undergraduate","Military and veteran education funding"],
  ["AMVETS National Scholarship","amvets.org","USA","usa,undergraduate","Scholarships for veterans and families"],
  ["Pat Tillman Foundation","pattillmanfoundation.org","USA","usa,graduate","Scholarships for veterans and military spouses"],
  ["Blue Star Families","bluestarfam.org","USA","usa,undergraduate","Programs for military families"],
  ["Google Scholarships","buildyourfuture.withgoogle.com","USA","usa,international,undergraduate,graduate","Technology and computing scholarships"],
  ["Microsoft Scholarships","careers.microsoft.com","USA","usa,undergraduate,graduate","Technology education funding"],
  ["Intel Scholarships","intel.com","USA","usa,undergraduate,graduate","STEM education support"],
  ["Society of Women Engineers","swe.org","USA","usa,undergraduate,graduate","Engineering scholarships and grants"],
  ["NSF Scholarships","nsf.gov","USA","usa,undergraduate,graduate","STEM research and education funding"],
  ["NCAA Scholarships","ncaa.org","USA","usa,undergraduate","Athletic scholarship eligibility and resources"],
  ["College Raptor","collegeraptor.com","USA","usa,undergraduate","College costs and scholarship matching"],
  ["Student Debt Relief","studentdebtrelief.us","USA","usa,undergraduate","Scholarship and student aid resources"],
  ["Pell Grant","studentaid.gov","USA","usa,undergraduate","Federal student grant information"],
  ["BigFuture Scholarships","bigfuture.collegeboard.org","USA","usa,undergraduate","College Board scholarship planning"],
  ["Coca-Cola Scholars","coca-colascholarsfoundation.org","USA","usa,undergraduate","Achievement scholarship program"],
  ["Burger King Scholars","burgerkingfoundation.org","USA","usa,undergraduate","Employee and community scholarships"],
  ["McDonald's HACER","haciarnational.org","USA","usa,undergraduate","Scholarships for Hispanic students"],
  ["Davis Putter Fund","davisputter.org","USA","usa,undergraduate,graduate","Grants for social justice activism"],
  ["QuestBridge","questbridge.org","USA","usa,undergraduate,fully-funded","College partnership and full scholarships"],
  ["Institute of International Education","iie.org","Global","international,graduate,fully-funded","Global higher education fellowships"],
  ["Gilman Scholarship","gilmanscholarship.org","USA","usa,international,undergraduate","Study abroad scholarships for Pell recipients"],
  ["Benjamin A. Gilman","gilman.bykoha.org","USA","usa,international,undergraduate","Gilman international study support"],
  ["EducationUSA","educationusa.state.gov","USA","usa,international,undergraduate,graduate","US study advising and scholarship information"],
  ["Postgrad.com","postgrad.com","Global","international,graduate","Postgraduate course and funding search"],
];

const palette = ["#5576df","#2f9b78","#ef6a73","#8b66d6","#4ba0b7","#d18b42","#6574a3","#3b9d91"];
let allSources = [...sites, ...extraNames].map((item, index) => ({
  name:item[0], domain:item[1], region:item[2], categories:item[3].split(","), description:item[4],
  rank:index+1, color:item[5] || palette[index % palette.length]
}));

const savedKey = "scholarvault-saved";
let saved = new Set(JSON.parse(localStorage.getItem(savedKey) || "[]"));
let activeCategory = "all";
let searchTerm = "";

const sourceGrid = document.getElementById("sourceGrid");
const savedGrid = document.getElementById("savedGrid");

function initials(name) {
  return name.split(/\s+/).slice(0,2).map(word => word[0]).join("").toUpperCase();
}

function cardTemplate(source) {
  const isSaved = saved.has(source.domain);
  const url = source.domain.startsWith("http") ? source.domain : `https://${source.domain}`;
  const tags = source.categories.filter(cat => cat !== "featured").slice(0,3);
  return `<article class="source-card ${source.featured || source.rank <= 4 ? "featured" : ""}">
    <div class="card-top">
      <div class="source-name">
        <span class="source-logo" style="--logo-bg:${source.color}">${initials(source.name)}</span>
        <div class="source-title"><h3>${source.name}</h3><p>${source.region}</p></div>
      </div>
      <button class="save-btn ${isSaved ? "saved" : ""}" type="button" data-save="${source.domain}" aria-label="${isSaved ? "Remove" : "Save"} ${source.name}">
        <svg viewBox="0 0 24 24"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>
      </button>
    </div>
    ${source.rank <= 4 ? `<span class="rank-badge">#${source.rank} TOP SOURCE</span>` : ""}
    <p class="source-desc">${source.description}</p>
    <div class="card-tags">${tags.map(tag => `<span class="card-tag">${tag.replaceAll("-"," ")}</span>`).join("")}</div>
    <button class="visit-btn" type="button" data-url="${url}">Visit website →</button>
  </article>`;
}

function renderDiscover() {
  const filtered = allSources.filter(source => {
    const matchesCategory = activeCategory === "all" || source.categories.includes(activeCategory);
    const haystack = `${source.name} ${source.domain} ${source.region} ${source.description} ${source.categories.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(searchTerm);
  });
  sourceGrid.innerHTML = filtered.length
    ? filtered.map(cardTemplate).join("")
    : `<div class="empty-state"><strong>No sources found</strong><br><br>Try another keyword or category.</div>`;
}

function renderSaved() {
  const filtered = allSources.filter(source => saved.has(source.domain));
  savedGrid.innerHTML = filtered.length
    ? filtered.map(cardTemplate).join("")
    : `<div class="empty-state"><strong>No saved sources yet</strong><br><br>Tap the bookmark icon on any scholarship site.</div>`;
}

function persistSaved() {
  localStorage.setItem(savedKey, JSON.stringify([...saved]));
  renderDiscover();
  renderSaved();
}

document.getElementById("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderDiscover();
});

document.getElementById("categoryRow").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  document.querySelectorAll(".category-pill").forEach(pill => pill.classList.remove("active"));
  button.classList.add("active");
  activeCategory = button.dataset.category;
  renderDiscover();
});

document.getElementById("clearFilters").addEventListener("click", () => {
  activeCategory = "all";
  searchTerm = "";
  document.getElementById("searchInput").value = "";
  document.querySelectorAll(".category-pill").forEach(pill => pill.classList.toggle("active", pill.dataset.category === "all"));
  renderDiscover();
});

document.addEventListener("click", event => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const domain = saveButton.dataset.save;
    saved.has(domain) ? saved.delete(domain) : saved.add(domain);
    persistSaved();
  }
  const visitButton = event.target.closest("[data-url]");
  if (visitButton) window.open(visitButton.dataset.url, "_blank", "noopener,noreferrer");
});

document.querySelectorAll("[data-tab-target]").forEach(button => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tabTarget;
    document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
    document.getElementById(`${tab}-view`).classList.add("active");
    document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.tabTarget === tab));
    window.scrollTo({ top:0, behavior:"smooth" });
  });
});

document.querySelector(".notification-btn").addEventListener("click", () => alert("You're all caught up."));
document.getElementById("setupBtn").addEventListener("click", () => alert("Preferences setup will be available in the next build."));
renderDiscover();
renderSaved();
