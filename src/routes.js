const product = {
  path: 'product',
  childRoutes: [
    {
      path: 'category',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Product/Category'))
        }, 'product-category')
      },
    },
    {
      path: 'index',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Product/Index'))
        }, 'product-index')
      },
    },
  ],
}

const account = {
  path: 'account',
  childRoutes: [
    {
      path: 'center',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/account/Center'))
        }, 'account-center')
      },
    },
    {
      path: 'orderlist',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/account/OrderList'))
        }, 'account-order-list')
      },
    },
  ],
}

const Routes = [
  {
    path: '/',
    component: require('./containers/App'),
    getIndexRoute (location, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('./containers/Home') })
      }, 'home')
    },
    childRoutes: [
      product,
      account,
    ],
  },
  {
    path: 'login',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Login'))
      }, 'login')
    },
  },
  {
    path: '*',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Error'))
      }, 'error')
    },
  },
]

export default Routes
