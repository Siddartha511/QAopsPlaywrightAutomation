const { CartPage } = require('./CartPage');
const { Dashboard } = require('./Dashboard');
const { LoginPage } = require('./LoginPage');
const { MyOrdersPage } = require('./MyOrdersPage');
const { OrderVerification } = require('./OrderVerification');

require('./CartPage');
require('./Dashboard');
require('./LoginPage');
require('./MyOrdersPage');
require('./OrderVerification');
class POmanager{

    constructor(page){
        this.page = page;
         this.loginpage = new LoginPage(this.page);
         this.dashboard = new Dashboard(this.page);
         this.cartpage = new CartPage(this.page);
         this.myorderpage = new MyOrdersPage(this.page);
         this.orderverification = new OrderVerification(this.page);
    }

    getCartPage(){
        return this.cartpage;
    }
    getDashboard(){
        return this.dashboard;
    }
    getLoginPage(){
        return this.loginpage;
    }
    getMyOrderPage(){
        return this.myorderpage;
    }
    getOrderVerification(){
        return this.orderverification;
    }

}

module.exports = {POmanager}