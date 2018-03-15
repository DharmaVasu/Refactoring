import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { modService } from '../services/mod1.service';

@Component({
    selector: 'mod1-comp1',
    templateUrl: './comp1.component.html'
})
export class comp1Component {

    users: any[];

    constructor(private service: modService, private _router: Router) {
        this.users = [
            {
                id: "0",
                name: "name0",
                surname: "surname0",
                birthDate: "24-8-1981",
                phone: "634523125",
                city: "Wroclaw",
                street: "Mydlana",
                number: "1"
            },
            {
                id: "1",
                name: "name1",
                surname: "surname1",
                birthDate: "28-9-1983",
                phone: "812312312",
                city: "Warsaw",
                street: "Domaniewska",
                number: "2"
            },
            {
                id: "2",
                name: "name2",
                surname: "surname2",
                birthDate: "01-6-1983",
                phone: "987654412",
                city: "Wroclaw",
                street: "Mydlana",
                number: "2"
            },
            {
                id: "3",
                name: "name3",
                surname: "surname3",
                birthDate: "05-5-1978",
                phone: "812312312",
                city: "Wroclaw",
                street: "Himalajska"
            }
        ];
    }


    findAllUsers() {
        this.service.findAll().subscribe((res) => {
            if (res.err) {
                alert('Error');
            } else {
                this.users = res;
            }
        })
    };

    findUser(userId) {
        this.service.find(userId).subscribe((res) => {
            if (res) {
                this._router.navigate(['userDetails'])
            }
        })
    };

    editUser(user) {
        if (Array.isArray(user)) {
            this.service.onEditUsers(user).subscribe((res) => {
                if (res.err) {
                    alert('Couldnt update user');
                } else {
                    for (var i = 0; i < this.users.length; i++) {
                        if (this.users[i].id === res.id) {
                            this.users[i] === res;
                        }
                    }
                    alert('User Updated');
                }
            })
        } else {
            this.service.onEditUser(user).subscribe((res) => {
                if (res.err) {
                    alert('Couldnt Save');
                } else {
                    this.users[this.users.indexOf(user.id)] = res;
                    alert('User Saved');
                }
            })
        }
    }

    removeUser(userId) {
        this.service.onRemove(userId).subscribe((res) => {
            if (res.err) {
                alert('Couldnt Remove');
            } else {
                const index = this.users.indexOf(userId);
                this.users.splice(index, 1);
                alert('User Removed');
            }
        })
    }

}