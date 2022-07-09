import DefaultLayout from "layouts/DefaultLayout/DefaultLayout"
import { Route } from "react-router"

export default function RouteWrapper(props) {
    const {layout, component, exact, path} = props

    const Layout = layout || DefaultLayout
    const Component = component
    const render = (routeComponentProps) => (
        <Layout>
            <Component {...routeComponentProps} />
        </Layout>
    )

    return <Route path={path} exact={exact} render={render} />
}