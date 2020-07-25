import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PlatformContext } from "../../PlatformProvider";
import { CatalogContainer } from "../catalog/CatalogContainer";
import { ShoppingCartContainer } from "../shoppingCart/ShoppingCartContainer";

export function NavigationContainer() {
	const { platform } = React.useContext(PlatformContext);
	if (platform === "mobile") {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						path={"/pokemon-store-second-generation/shopping-cart"}
					>
						<ShoppingCartContainer />
					</Route>
					<Route path={"/pokemon-store-second-generation/"}>
						<CatalogContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<CatalogContainer />
			<ShoppingCartContainer />
		</BrowserRouter>
	);
}
