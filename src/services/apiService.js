import axios from "axios";

import {baseURL} from "../constants/urls";

// const apiService = {
//     onSubmit: () => {
//         fetch('jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 name: 'name',
//                 username: 'username',
//                 email: 'email'
//             })
//         })
//             .then(value => value.json())
//             .then((data) => console.log(data));
//     }
// }

const apiService = axios.create({baseURL});


export {apiService};