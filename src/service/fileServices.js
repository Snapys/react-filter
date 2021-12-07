const FetchAllUsers = () => {
  const context = require.context("../data", true, /.json$/);
  // const users = {};
  const moduleType = { auth_module: {}, content_module: {} };

  context.keys().forEach((key) => {
    const fileName = key.replace("./", "");
    const resource = require(`../data/${fileName}`);

    let userData = JSON.parse(JSON.stringify(resource));

    for (key of Object.keys(moduleType)) {
      try {
        moduleType[key][userData["provider"][key]].push(userData["name"]);
      } catch (error) {
        moduleType[key][userData["provider"][key]] = [userData["name"]];
      }
    }

    // users[key] = JSON.parse(JSON.stringify(resource));
  });
  // console.log(JSON.stringify(moduleType));

  return moduleType;
};

export default FetchAllUsers;
