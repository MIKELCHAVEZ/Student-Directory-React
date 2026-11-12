const FormContainer = () =>{
    return(
        <>
         <section id="formContainer">
        <form id="studentForm">
            <div className="input-fields">
                <label htmlFor="name">Student Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div className="input-fields">
                <label htmlFor="program">Program</label>
                <input type="text" name="program" id="program"/>
            </div>
            <div>
                <button type="submit">Add Student</button>
            </div>
        </form>
        </section>
        </>
    )
}
export default FormContainer;