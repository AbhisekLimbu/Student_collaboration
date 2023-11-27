function Register(){


    return(
        <section>
         {/* Register Form */}
         <form>
         <h2>Register</h2>
         <label htmlFor="register-name">Full Name:</label>
         <input type="text" id="register-name" name="register-name" required />

         <label htmlFor="register-email">Email:</label>
         <input type="email" id="register-email" name="register-email" required />

         <label htmlFor="register-password">Password:</label>
         <input type="password" id="register-password" name="register-password" required />

         <button type="submit">Register</button>
       </form>
     </section>

    );
}

export default Register;