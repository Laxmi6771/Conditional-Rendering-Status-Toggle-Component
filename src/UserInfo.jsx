function UserInfo(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginTop: "10px" }}>
      <h3>User Information</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
}

export default UserInfo;
