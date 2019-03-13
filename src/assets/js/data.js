export let navData = [
  {
    type: 'Home',
    name: '首页',
    push: '/',
    icon: require('../../assets/images/home.png'),
    iconActive: require('../../assets/images/home-active.png')
  },
  {
    cla: 'Nearby',
    name: '精品专区',
    push: '/nearby',
    icon: require('../../assets/images/declaration.png'),
    iconActive: require('../../assets/images/declaration-active.png')
  },
  {
    cla: 'Activity',
    name: '购物车',
    push: '/activity',
    icon: require('../../assets/images/cart.png'),
    iconActive: require('../../assets/images/cart-active.png')
  },
  {
    cla: 'User',
    name: '个人中心',
    push: '/user',
    icon: require('../../assets/images/user.png'),
    iconActive: require('../../assets/images/user-active.png')
  }
]
