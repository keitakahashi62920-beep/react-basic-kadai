import React from 'react'

function ProfileCard({ name, age, bio }) {
  console.log('ProfileCardのprops:', { name, age, bio }) // デバッグ用にpropsをログ出力
  return (
    <div
      className="profile-card"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      <h2>{name}</h2>
      <p>【年齢】{age}歳</p>
      <p>【自己紹介】{bio}</p>
    </div>
  )
}

export default ProfileCard