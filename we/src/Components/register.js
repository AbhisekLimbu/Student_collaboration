import React from 'react';

function Register() {
  return (
    <section>
      {/* Register Form */}
      <form className="register-form">
        <h2>Student Registration</h2>
        <p>Welcome! Fill out the form below to create your student account.</p>

        <label htmlFor="register-name">Full Name:</label>
        <input type="text" id="register-name" name="register-name" required />

        <label htmlFor="register-email">Email:</label>
        <input type="email" id="register-email" name="register-email" required />

        <label htmlFor="register-password">Password:</label>
        <input type="password" id="register-password" name="register-password" required />

        <label htmlFor="register-major">Major:</label>
        <input type="text" id="register-major" name="register-major" required />

        <label htmlFor="register-year">Year of Study:</label>
        <select id="register-year" name="register-year" required>
          <option value="" disabled selected>Select your year of study</option>
          <option value="first">First Year</option>
          <option value="second">Second Year</option>
          <option value="third">Third Year</option>
          <option value="fourth">Fourth Year</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </section>
  );
}

export default Register;
