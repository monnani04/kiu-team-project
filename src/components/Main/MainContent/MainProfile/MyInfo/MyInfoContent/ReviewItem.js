export default function ReviewItem(props) {
  return (
    <>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          position: "relative",
          top: "10px",
        }}
      >
        {props.num}
      </p>

      <div
        style={{
          width: "320px",
          height: "400px",
          backgroundColor: "white",
          marginBottom: "15px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 5%)"
        }}
      >
        <p
          style={{
            position: "relative",
            fontWeight: "bold",
            top: "20px",
            left: "10px",
          }}
        >
          {props.name}
        </p>
        
        <p
          style={{
            position: "relative",
            top: "20px",
            left: "10px",
          }}
        >
          {props.date}
          <button style={{
            
          }}></button>
        </p>
    
          <div
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "250px",
              background: "url(../../../../img/sungminHome.png)",
              backgroundSize: "cover",
              borderRadius: "15px",
            }}
          >
        

        <p
          style={{
            position: "relative",
            fontSize: "13px",
            left: "15px",
            top: "19px",
            fontSize: "12px",
          }}
        >
          대구광역시 - 중구{" "}
        </p>

        <p
          style={{
            position: "relative",
            fontWeight: "bold",
            fontSize: "13px",
            left: "14px",
            top: "25px",
          }}
        >
          {props.title}
        </p>
        </div></div>
    </>
  );
}
