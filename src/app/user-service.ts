import { Service } from '@angular/core';

@Service()
export class UserService {
    currentUser() {
        return {
            name:'abcd', 
        }
    }
}
