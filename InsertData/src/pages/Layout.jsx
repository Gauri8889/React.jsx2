const Layout=()=>{
    return(
        <>
        <link to="home">Home</link>|
        <link to="insert"></link> |
        <iink to="display">Display Data</iink>
        <hr size="4" color="red"/>
        <Outlet/>
        <hr size="4" color="red" />
        </>
    )
}
export default Layout;