const product = {
  path: 'product',
  component: require('./containers/Product/App'),
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
  component: require('./containers/account/App'),
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

const help = {
  path: 'help',
  component: require('./containers/Help/App'),
  getIndexRoute (location, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('./containers/Help/Index') })
    }, 'help-index')
  },
  childRoutes: [
    {
      path: 'index',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/Index'))
        }, 'help-index')
      },
    },
    {
      path: 'howtouse',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/HowtoUse'))
        }, 'help-how-to-use')
      },
    },
    {
      path: 'howtoorder',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/HowtoOrder'))
        }, 'help-how-to-order')
      },
    },
    {
      path: 'howtomaintain',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/HowtoMaintain'))
        }, 'help-how-to-maintain')
      },
    },
    {
      path: 'complaintadvice',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/ComplaintAdvice'))
        }, 'help-complaint-advice')
      },
    },
    {
      path: 'coststatement',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/CostStatement'))
        }, 'help-cost-statement')
      },
    },
    {
      path: 'beforerent',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/BeforeRent'))
        }, 'help-before-rent')
      },
    },
    {
      path: 'customerservice',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/CustomerService'))
        }, 'help-customer-service')
      },
    },
    {
      path: 'afterrent',
      getComponent (location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Help/AfterRent'))
        }, 'help-after-rent')
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
      help,
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
