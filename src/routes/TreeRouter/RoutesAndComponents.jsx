import React from "react";
import SupplierPage from "../../pages/SupplierPage";
import WizardPage from "../../pages/WizardPage";
import {Details} from "../../dashboard/details";

export const firstLevelRoutes = [
    {
        name: 'product',
        component: ({id}) => <Details id={id}/>
    }
]

export const firstLevelRouterWithoutId = [
    {
        name: 'main',
        component: () => <SupplierPage/>
    },
    {
        name: "wizard",
        component: () => <WizardPage/>
    }
]
