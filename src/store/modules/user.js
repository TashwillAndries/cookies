// import axios from "axios";

// export default {
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {
//     login: ({ c ommit }, { email, password }) => {
//       return new Promise((resolve, reject) => {
//         axios
//           .post("api login route goes here", { email, password })
//           .then(({ data, status }) => {
//             if (status === 200) {
//               resolve(true);
//             }
//           })
//           .catch((error) => {
//             reject(error);
//           });
//       });
//     },
//     register: ({ commit }, { username, email, password }) => {
//       return new Promise((resolve, reject) => {
//         axios
//           .post("api register router goes here", {
//             username,
//             email,
//             password,
//           })
//           .then(({ data, status }) => {
//             if (status === 201) {
//               resolve(true);
//             }
//           });
//       });
//     },
//   },
// };
