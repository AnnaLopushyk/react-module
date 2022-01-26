import React, {useState} from 'react';

const Form = ({getFilter}) => {

    const [form,setForm] = useState({name: '', username: '', email: ''});

    const formHahdler = (e)=> {
       const evenData = {...form, [e.target.name]:e.target.value}
        setForm({...form, ...evenData})
        getFilter(evenData)
    }



    return (
        <div>
            <form>
                <label> Name: <input type="text" name={'name'} value={form.name}onChange={formHahdler}/></label>
                 <label>Usernsme: <input type="text" name={'username'} value={form.username} onChange={formHahdler}/></label>
                 <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHahdler}/></label>
            </form>
        </div>
    );
};

export default Form;