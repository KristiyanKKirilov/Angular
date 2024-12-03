import { inject } from "@angular/core";
import { UsersService } from "../users.service"
import { ResolveFn } from "@angular/router";
import { User } from "../../types/User";

export const UserDetailsResolver: ResolveFn<User> = (route) => {
    const userService = inject(UsersService);
    const userId = route.params['id'];
    return userService.getSingleUser(userId);
} 
