import profilePic from '../images/tom_profile.jpeg';

function Profile() {
  return (
    <header class="header">
        <img src={profilePic} alt="profile" className="img"></img>
        <h1 className="name">Thomas Habtemariam</h1>
        <p className="skill-name">Front End Developer</p>
        <a href="" className="website">Website</a>
        <button id="email">Email</button>
        <button id="linkedIn">LinkedIn</button>
  </header>
  );
}

export default Profile;