const getAffectedApps = () => {
  const nxAffectedProjects = JSON.parse(process.argv[0]).projects;
  const uiApps = nxAffectedProjects.filter((item) => item.includes('ui'));
  const apiApps = nxAffectedProjects.filter((item) => item.includes('spring'));

  console.log(nxAffectedProjects);

  const affectedApps = [
    ...apiApps,
    ...uiApps
  ];

  console.log(affectedApps);

  fs = require("fs");
  fs.writeFile("affectedPackages.txt", affectedApps, function (err) {
    if (err) return console.log(err);
  });
};
getAffectedApps();
