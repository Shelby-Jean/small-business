const UserBanner = (props) => {
  return (
    <div>
      <p className="user-banner">Logged in as: {props.user.username}</p>
    </div>
  )
}

export default UserBanner;