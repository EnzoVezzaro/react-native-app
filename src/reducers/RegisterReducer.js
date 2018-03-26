import { 
    REG_EMAIL_INPUT_CHANGED, 
    REG_PASSWORD_INPUT_CHANGED, 
    PASSWORD_INPUT_CHANGED, 
    REGISTER_USER,
    REGISTER_UPDATE,
    PT_CHECKED,
    PT_UNCHECKED, 
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../actions/types";

//inital state object that contains the initial values of the prop objects
const initialStates = {
    loading: true, //spinner boolean
    user: null,
    error: '',
    firstName: '',
    surName: '',
    genderMF: '',
    phone: '',
    email: '',
    password: '',
    pTChecked: false,
    role: ''
};

//Now here I will have a switch case inside a federal function, which will handle state updates 
//based on the type of action that is invoked. 

export default (state = initialStates, action) => {
   // console.log(action); //log actions to the console. 

    switch(action.type) {
        case REG_EMAIL_INPUT_CHANGED:
            return {...state, email: action.payload };

        case REG_PASSWORD_INPUT_CHANGED:
            return {...state, password: action.payload };      
        case REGISTER_UPDATE:
        //props and values get assigned through runtime.
            return {...state, [action.payload.prop]: action.payload.value };

        case PT_CHECKED:
            return {...state, pTChecked: true, role: 'Personal Trainer'}; 
            //console.log(role);
        case PT_UNCHECKED:
            return {...state, pTChecked: false, role: 'Gym User'};
            //console.log(role);
        case REGISTER_USER:
            return {...state, loading: true};
           
        case REGISTER_SUCCESS:
            return {...state, ...initialStates, user: action.payload };
        
        case REGISTER_FAIL:
            alert("Sign Up Failed");
            return {loading: false};

        default:
            return state;
    }

}