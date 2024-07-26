import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile({ user }) {
  const [profile, setProfile] = useState({
    fullName: user?.name || '',
    gender: 'Male',
    birthday: '05-01-2001',
    phoneNumber: user?.phone || '',
    email: user?.email || '',
    username: '@username',
    project: '',
    college: '',
    profilePicture: '', 
    address: '',
    linkedin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
    }
  };

  return (
    <div className="profile-edit">
      <header className="profile-header">
        <button className="back-button" onClick={() => window.history.back()}>&larr;</button>
        <h1 className='title'>Edit Profile</h1>
      </header>

      <div className="profile-picture">
        <div className="picture-container">
          <label htmlFor="photo-upload" className="upload-label">
            {profile.profilePicture ? (
              <img src={profile.profilePicture} alt="Profile" />
            ) : (
              <div className="upload-placeholder">+</div>
            )}
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
      </div>

      <div className="profile-info">
        {[
          { label: 'Full Name', name: 'fullName', value: profile.fullName },
          { label: 'Gender', name: 'gender', value: profile.gender },
          { label: 'Birthday', name: 'birthday', value: profile.birthday },
          { label: 'Phone Number', name: 'phoneNumber', value: profile.phoneNumber },
          { label: 'Email', name: 'email', value: profile.email },
          { label: 'Username', name: 'username', value: profile.username },
          { label: 'Project Name', name: 'project', value: profile.project },
          { label: 'College Name', name: 'college', value: profile.college },
          { label: 'Address', name: 'address', value: profile.address },
          { label: 'LinkedIn', name: 'linkedin', value: profile.linkedin },
        ].map((field) => (
          <div className="profile-field" key={field.name}>
            <label>{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={field.value}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditProfile;
