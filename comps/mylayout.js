import Header from './header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: `1px solid #DDD`
}

const Layout =  props => {
    return (
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout