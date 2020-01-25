import React from "react";
import SupplierPage from "../../pages/SupplierPage";
import WizardPage from "../../pages/WizardPage";


export const firstLevelRoutes = [
    {
        name: 'product',
        component: ({id}) => <SupplierPage/>
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
