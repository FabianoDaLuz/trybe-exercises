export function ageDefine(birthday: string): number {
    const [day,month, year] = birthday.split('/');
    const birthDate = new Date(+year, +month -1, +day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }
    return age;
}


//ageDefine('28/06/2021') ; retorna a idade X