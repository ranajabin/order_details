sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("navigationandrouting.navigationandroutingproject1.controller.View2", {
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);

            },

            onRouteMatch: function (evt) {
                debugger;
                var keyId2 = evt.mParameters.arguments.Id;

                var array1 = [
                    {
                        "OrderID": "10248",
                        "CustomerID": "VINET",
                        "EmployeeID": "5",
                        "OrderDate": "1996-07-04T00:00:00Z",
                        "RequiredDate": "1996-08-01T00:00:00Z",
                        "ShippedDate": "1996-07-16T00:00:00Z",
                        "ShipVia": "3",
                        "Freight": "32.38",
                        "ShipName": "Vins et alcools Chevalier",
                        "ShipAddress": "59 rue de l'Abbaye",
                        "ShipCity": "Reims",
                        "ShipRegion": "null",
                        "ShipPostalCode": "51100",
                        "ShipCountry": "France"
                    },
                    {
                        "OrderID": "10249",
                        "CustomerID": "TOMSP",
                        "EmployeeID": "6",
                        "OrderDate": "1996-07-05T00:00:00Z",
                        "RequiredDate": "1996-08-16T00:00:00Z",
                        "ShippedDate": "1996-07-10T00:00:00Z",
                        "ShipVia": "1",
                        "Freight": "11.61",
                        "ShipName": "Toms Spezialitäten",
                        "ShipAddress": "Luisenstr. 48",
                        "ShipCity": "Münster",
                        "ShipRegion": "null",
                        "ShipPostalCode": "44087",
                        "ShipCountry": "Germany"
                    },
                    {
                        "OrderID": "10250",
                        "CustomerID": "HANAR",
                        "EmployeeID": "4",
                        "OrderDate": "1996-07-08T00:00:00Z",
                        "RequiredDate": "1996-08-05T00:00:00Z",
                        "ShippedDate": "1996-07-12T00:00:00Z",
                        "ShipVia": "2",
                        "Freight": "65.83",
                        "ShipName": "Hanari Carnes",
                        "ShipAddress": "Rua do Paço, 67",
                        "ShipCity": "Rio de Janeiro",
                        "ShipRegion": "RJ",
                        "ShipPostalCode": "05454-876",
                        "ShipCountry": "Brazil"
                    },
                    {
                        "OrderID": "10251",
                        "CustomerID": "VICTE",
                        "EmployeeID": "3",
                        "OrderDate": "1996-07-08T00:00:00Z",
                        "RequiredDate": "1996-08-05T00:00:00Z",
                        "ShippedDate": "1996-07-15T00:00:00Z",
                        "ShipVia": "1",
                        "Freight": "41.34",
                        "ShipName": "Victuailles en stock",
                        "ShipAddress": "2, rue du Commerce",
                        "ShipCity": "Lyon",
                        "ShipRegion": "null",
                        "ShipPostalCode": "69004",
                        "ShipCountry": "France"
                    },
                    {
                        "OrderID": "10252",
                        "CustomerID": "SUPRD",
                        "EmployeeID": "4",
                        "OrderDate": "1996-07-09T00:00:00Z",
                        "RequiredDate": "1996-08-06T00:00:00Z",
                        "ShippedDate": "1996-07-11T00:00:00Z",
                        "ShipVia": "2",
                        "Freight": "51.3",
                        "ShipName": "Suprêmes délices",
                        "ShipAddress": "Boulevard Tirou, 255",
                        "ShipCity": "Charleroi",
                        "ShipRegion": "null",
                        "ShipPostalCode": "B-6000",
                        "ShipCountry": "Belgium"
                    }
                ];
                var data = [];
                for (var i = 0; i < array1.length; i++) {
                    if (keyId2 == array1[i].OrderID) {
                        data.push(array1[i]);

                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data);
                        this.getView().setModel(oModel, "array2");
                    }
                }
            },
            onNavBack: function () {
                history.go(-1);
            },
            onPress: function () {
                MessageBox.success("Order Confirmed!");
            }
        });
    });

