import React from "react"
function HookDemo() {
    const [no1, setNo1] = React.useState("")
    const [no2, setNo2] = React.useState("")
    const [msg, setMsg] = React.useState("")

    React.useEffect(()=>{
        console.log("Called")
    },[])
    const doSum = (e) => {
        var option = e.target.value
        if(option==="+"){
            var c = parseInt(no1) + parseInt(no2)
        }else {
            var c = parseInt(no1) - parseInt(no2)
        }
        
        setMsg("Ans is "+c)
    }

    return (<div>
        No1 :<input type="text" onChange={(e) => setNo1(e.target.value)} />
        No2 :<input type="text" onChange={(e) => setNo2(e.target.value)} />
        <input value="+" onClick={doSum} type="button" />
        <input value="-" onClick={doSum} type="button" />
        {msg}
    </div>)
}
export default HookDemo