import Header from "./Header"
import InputForm from "./InputForm"


const Layout = () => {
    const heading:string = "INPUT FORM"
    const headerHeading:string = "REACT FORM HANDLING"
  return (
    <div>
        <Header heading={headerHeading}/>
        <InputForm heading={heading}/>
    </div>
  )
}

export default Layout