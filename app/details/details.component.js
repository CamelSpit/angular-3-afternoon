angular.module('swagShop').component('detailsComponent', {
    templateUrl: 'app/details/details.template.html',
    controllerAs: 'detailsCtrl',
    controller: function (swagSrvc, $stateParams, cartSrvc){
        this.swag = swagSrvc.swag;

        if ($stateParams.id){
            swagSrvc.swag.map(item=>{
                if (item.id===$stateParams.id){
                    return this.item = item;
                }
                else { return "swag not found"}
            })
        }

        this.addToCart = function (item){
            cartSrvc.add (item)
        }
    }
})