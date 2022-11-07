export default function NoticeItem(props) {
    return (
      <>
        <div
        style={{
          width: "400px",
          height: "180px",
          backgroundColor: "white",
          margin: "7px",
          borderRadius: "15px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
        }}
      >
        <div style={{
            position: "relative",
            left: "50%",
            top: "62px",
            transform: "translate(-50%, -50%)",
            width: "140px",
            height: "105px",
            
        }}>           
        </div>
      
        <p style={{
            position: "relative",
            fontSize: "13px",
            left: "14px",
            top: "25px"
        }}>{props.notice}</p>
          <p style={{
              position: "relative",
              fontSize: "13px",
              left: "15px",
              top: "19px",
              fontSize: "12px"
        }}>대구광역시 - 중구 </p>

      </div>
      </>
    );
  }