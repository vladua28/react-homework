import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    create: (user) => apiService.post(urls.users.base, user),
    updateById: (id, user) => apiService.patch(urls.users.byId(id), user),
    deleteById: (id) => apiService.delete(urls.users.byId(id))
}

export {userService}