import Mock from 'mockjs'

const Users = [];

for (let i = 0; i < 20; i++) {
    Users.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1)
    }));
}
// 输出结果
// console.log(JSON.stringify(Users, null, 2))
export  {
    Users,
}
