sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("navigationandrouting.navigationandroutingproject1.controller.View1", {
            onInit: function () {

                let oModel = new sap.ui.model.json.JSONModel("../model/order.json");
                this.getView().setModel(oModel);

            },
            onClick: function (oEvent) {

                var keyId = oEvent.oSource.mProperties.text;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View2", { Id: keyId });
            }
        });
    });
