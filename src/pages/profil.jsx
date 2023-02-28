import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, TextField } from '@mui/material';
import { updateUser } from '../actions/updateUser.action';

function Profil() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);

  const [bio, setBio] = useState(localStorage.getItem('bio') || user.bio);

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleUpdateUser = () => {
    const userData = { bio };
    dispatch(updateUser(userData));
  };

  useEffect(() => {
    localStorage.setItem('bio', bio);
  }, [bio]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar alt={user.pseudo} src={user.picture} style={{ width: '12.5rem', height: '12.5rem', margin: '2rem' }} />
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{user.pseudo}</div>
      <div>Membre depuis {new Date(user.createdAt).getFullYear()}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '1rem' }}>
        <div style={{ fontWeight: 'bold' }}>Amis: {user.following ? user.following.length : 0}</div>
        <div style={{ fontWeight: 'bold' }}>Abonnés: {user.followers ? user.followers.length : 0}</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', marginTop: '1rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Bio</div>
        <TextField
          variant="outlined"
          fullWidth
          value={bio}
          onChange={handleBioChange}
          multiline
          rows={4}
          style={{ marginBottom: '1rem' }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdateUser}>Enregistrer</Button>
      </div>
    </div>
  );
}

export default Profil;
