import { useReducer, useState } from "react";

const init = {
  email: { value: "", hasError: true, touched: false, error: "" },
  password: { value: "", hasError: true, touched: false, error: "" },
  birthdate: { value: "", hasError: true, touched: false, error: "" },
  phone: { value: "", hasError: true, touched: false, error: "" },
  answer: { value: "", hasError: true, touched: false, error: "" },
  aadhar: { value: "", hasError: true, touched: false, error: "" },
  address: { value: "", hasError: true, touched: false, error: "" },
  nationality: { value: "", hasError: true, touched: false, error: "" },
  firstname: { value: "", hasError: true, touched: false, error: "" },
  lastname: { value: "", hasError: true, touched: false, error: "" },
  isFormValid: false,
};


const validateData = (name,value) => {
    let hasError = false, error= "";
    switch(name){
        case "empno" : 
            let regex = /^[0-9]{4,6}$/;
            if(!regex.test(value))
            {
                hasError = true;
                error = "Emp no should be 4 - 6 digits only"
            }
        break;
        case "ename" :
            let regex1 = /^[A-Z][a-z]{2,15}$/;
            if(!regex1.test(value))
            {
                hasError = true;
                error = "Emp name - first letter capital, rest - small "
            }
        break;
        //add 2 more cases - salart , dept        
                   

    }
    return {hasError, error}

} 

const reducer = (state,action) => {
    //console.log(state);
    switch(action.type){
        case 'update' : {
            const {name,value,hasError, error, touched, isFormValid} = action.data;
            return { 
                ...state,
                [name]: { ...state[name],value, hasError, error, touched},
                isFormValid
            }   //modifying and returning new object as state
        }
        case 'reset' : {
            return init;
        }
    }
}

const PostValidData = () => {

    const [state,dispatch] = useReducer(reducer, init);
    const [msg,setMsg] = useState("");

    //on change event
    const onInputChange = (name,value,dispatch) => {
        //validation logic
        const {hasError, error} = validateData(name,value); //form field, latest value

        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for(const key in state)
        {
            let item = state[key];
            /*if(key === name && hasError)
            {
                isFormValid = false;
                break;
            }
            else if(key !== name && item.hasError)
            {
                isFormValid = false;
                break;
            }*/
            if(item.hasError)
            {
                isFormValid = false;
                break;
            }
        } 
        //gethered one more value - isFormValid
        //dispatch({type:'update',data:{name,value,hasError,error,touched: true, isFormValid}})

        //sending action object
        dispatch({type: 'update', data: {name,value,hasError,error, touched: true, isFormValid }})

    }

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in state) {
          const item = state[key]
          if (key === name && hasError) {
            isFormValid = false
            break
          } else if (key !== name && item.hasError) {
            isFormValid = false
            break
          }
        }
        dispatch({
          type: "update",
          data: { name, value, hasError, error, touched: true, isFormValid },
        })
      }


    const sendData=(ev)=>{
        ev.preventDefault();
        //console.log(state);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                num: state.empno,
                nm: state.ename,
                sal: state.sal,
                dept: state.dept
            })
            //these keys will be used on server side
        }

        fetch("http://localhost:8081/saveemp",reqData)
        .then(resp => resp.text())
        .then(data => setMsg(data))
    } 

    return (
                <div>
                    {JSON.stringify(state)}
                <form>
                    Enter emp no :
                    <input type="text" name="empno" value={state.empno.value}
                    onChange={ (e)=> {onInputChange("empno",e.target.value, dispatch)}} 
                    onBlur={(e)=> {onFocusOut("empno",e.target.value, dispatch)}} />
                    <p style={{display: state.empno.touched && state.empno.hasError ?"block":"none",color: "red"}}> {state.empno.error} </p>
                    <br/>
                    Enter emp name :
                    <input type="text" name="ename" value={state.ename.value}
                    onChange={ (e)=> {onInputChange("ename",e.target.value, dispatch)}} 
                    onBlur={(e)=> {onFocusOut("ename",e.target.value, dispatch)}} />
                    <p style={{display: state.ename.touched && state.ename.hasError ?"inline":"none"}}> {state.ename.error} </p>
                    <br/>
                    Enter salary :
                    <input type="text" name="sal" />
                    {/* value={state.sal.value}
                    onChange={(e)=>{dispatch({type:'update',payload: e.target.value, field:'sal'})}} /> <br/> */}
                    <br/>
                    Enter dept :
                    <input type="text" name="dept"  />
                    {/* value={state.dept.value}
                    onChange={(e)=>{dispatch({type:'update',payload: e.target.value, field:'dept'})}} /> <br/> */}
                    <br/>
                    <input type="submit" value="Save" disabled={state.isFormValid?false:true}
                    onClick={(e)=>{ sendData(e)}} />  &nbsp; &nbsp;
                    <input type="reset" value="Clear"
                    onClick={()=>{ dispatch({type: 'reset'})}} />
                </form>
                {msg}
                </div>
    )
}

export default PostValidData;