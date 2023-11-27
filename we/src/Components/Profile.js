import React from 'react';

function Profile() {
  const studentInfo = {
    name: 'John Doe',
    image: 'https://example.com/student.jpg', // Replace with the URL of the student's image
    hobbies: ['Reading', 'Traveling', 'Coding'],
    major: 'Computer Science',
    socialAccounts: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    talks: [
      { title: 'React Fundamentals', date: '2023-01-01' },
      { title: 'Web Development Trends', date: '2023-02-15' },
    ],
  };

  return (
    <div>
      <h2>{studentInfo.name}'s Profile</h2>
      
      <img src={studentInfo.image} alt="Student" style={{ maxWidth: '200px', borderRadius: '50%' }} />
      
      <h3>Hobbies:</h3>
      <ul>
        {studentInfo.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      
      <h3>Major: {studentInfo.major}</h3>
      
      <h3>Social Accounts:</h3>
      <ul>
        {Object.entries(studentInfo.socialAccounts).map(([platform, link]) => (
          <li key={platform}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      
      <h3>Talks:</h3>
      <ul>
        {studentInfo.talks.map((talk, index) => (
          <li key={index}>
            <strong>{talk.title}</strong> - {new Date(talk.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;

