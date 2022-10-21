const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={`${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button name="like" className="likeBtn" />
        <Button name="comment" className="comBtn" />
        <Button name="share" className="shareBtn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
