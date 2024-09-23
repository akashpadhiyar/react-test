function Demo(){
     const clickDemo = (e) =>{
        var a = e.target.txt1.value
        
        if(a%4==0){
            alert("Year is Leap Year")
        }else{
            alert("Year is Not Leap Year")
        }
        e.preventDefault();
     }
    return (<div>
        <h1>Demo</h1>
        <form onSubmit={clickDemo} name="myfrm">
            No1 : <input type="text" name="txt1"/>
            <input type="submit"/>
        </form>
    </div>)
}
export default Demo