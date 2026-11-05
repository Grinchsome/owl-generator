# OWL Generator

Phone-friendly observed working load calculator. Standalone HTML, no AI or server dependency.

## Use

Name a job and bar, add equipment and accessories, and save the bar. Reopen saved bars with Edit; Update Bar replaces the original. Optional capacity is the stated SWL/WLL supplied by the inspector. Comparisons are weight comparisons, not structural or installation assessments.

Curtains use opening width × drop × (1 + fullness/100) × gsm/1000, plus the entered extra weight. Use 0% fullness for actual flat fabric width. Include hems, lining, bottom chains, fittings and bars once. A pair may be entered separately or using combined width. A custom known-weight item can be used for a measured completed curtain.

Jobs and the current draft are stored in this browser on this device. Export backups regularly and before changing browsers or hosting addresses. Restoring a backup merges jobs and asks before replacing matching names. Moving from a local file preview to the hosted website does not automatically move browser data: use backup/restore.

The report includes inspector, date, job notes, itemised weights, source notes and optional capacity comparisons. Preview the report, then Print / Save PDF.

## Catalogue, 5 November 2026

213 equipment and track entries; 106 have manufacturer references (including estimated track rates). 21 sourced fabric presets with illustrative swatches. Includes 14 additional Claypaky fixtures. This is an initial expansion, not every model in each manufacturer's historical range. Original entries without weight evidence remain labelled unverified legacy. Hall Stage original self weights remain unverified. Projector mounts and additional bracket variants can be added as known-weight items until sourced entries are available.

ROBE ColorWash 1200E AT is explicitly 41 kg; ambiguous old ColorWash, Acclaim and Ovation labels have been retired in favour of exact researched variants. UniTrack and SixTrack each use one length-entry option. Their editable default rates (2.864 and 2.69 kg/m) are estimates derived from published one-metre sections, not universal manufacturer kg/m specifications; actual section mix changes the rate. Saved reports retain the selected rate and estimate/user-entered status. Old saved section entries keep their original weights. Curved track choices have been removed. Confirm model and revision against the installed equipment. Supplied-adapter inclusion is described where known; never automatically add a second copy of an included bracket. Catalogue inclusion does not establish suitability for suspension.

Manufacturer source URLs, accessory notes and photo source pages are retained in catalogue-sources.json. Newly researched models have locally bundled product pictures. Representative family or track-profile pictures are labelled in the gallery; pictured accessories are not evidence of weight inclusion. Some original remote photos may be unavailable. Image rights remain with their respective owners.

## GitHub Pages

Upload the contents of this project to the root of grinchsome/owl-generator on main. In repository Settings → Pages, choose Deploy from a branch, main, and /(root). No .github folder or Render service is needed. Existing old server.js, package.json and public/index.html are removed by the replacement change; they are recoverable from Git history.

Official setup guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

After successful deployment visit https://grinchsome.github.io/owl-generator/ . Use the browser's install/add-to-home-screen option where available. The calculator and catalogue work offline after a successful first online load. Locally hosted pictures are cached as viewed; a new image can require an internet connection. Updates become available on a subsequent online load; close/reopen the app after updates.

No account or cloud job synchronisation is included. Publishing the app does not publish the locally saved inspection jobs.
