interface employee{
    code: number,
    name: string
}

const Jemployee = {} as employee;
Jemployee.code = 10;
Jemployee.name = 'John';

console.log('employee ' + Jemployee.code + '\nname: ' + Jemployee.name);