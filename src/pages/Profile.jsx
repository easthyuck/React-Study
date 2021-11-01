export default function Profile(props) {
  console.log(props);
  const id = props.match.params.id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>Profile Page</h2>
      {/* id가 있으면! */}
      {id && <p>id 는 {id} 입니다.</p>}
    </div>
  );
}
