/**
 * reference https://stackoverflow.com/questions/51292406/check-if-token-expired-using-this-jwt-library
 * @param {string} token 
 * @returns {Bolean}
 */

// function isTokenExpired(token) {
//   if(!token) return false
//   const base64Url = token.split(".")[1];
//   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   const jsonPayload = decodeURIComponent(
//     atob(base64)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );
//   console.log(12, JSON.parse(jsonPayload))
//   const { exp } = JSON.parse(jsonPayload);
//   const expired = Date.now() >= exp * 1000
//   return expired
// }

export default isTokenExpired