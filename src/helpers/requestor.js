import { baseUrl } from "../config.json";

export default (method, route, data) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        if (xhr.responseText) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (err) {
            reject(err);
          }
        }
      }
      reject(new Error(`Request failed with Code: ${xhr.statusText}`));
    });

    xhr.open(method, baseUrl + route);

    if (method === "POST") {
      const username = "admin"; //prompt("Username: ");
      const password = "d53!HR@&JjZ4WvVx%1"; //prompt("Password: ");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader(
        "Authorization",
        "Basic " + btoa(`${username}:${password}`)
      );

      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
  });
};
