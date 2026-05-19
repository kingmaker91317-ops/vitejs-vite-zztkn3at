export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        fontFamily: 'Arial',
      }}
    >
      {/* Navbar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          borderBottom: '1px solid #222',
        }}
      >
        <h2 style={{ color: 'orange' }}>BAADSHAH FF ARENA</h2>

        <div>
          <button
            style={{
              marginRight: '10px',
              background: 'transparent',
              color: 'white',
              border: '1px solid orange',
              padding: '10px 18px',
            }}
          >
            Login
          </button>

          <button
            style={{
              background: 'orange',
              color: 'black',
              border: 'none',
              padding: '10px 18px',
              fontWeight: 'bold',
            }}
          >
            Register
          </button>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 20px',
        }}
      >
        <h1
          style={{
            color: 'orange',
            fontSize: '60px',
            marginBottom: '10px',
          }}
        >
          BAADSHAH FF ARENA
        </h1>

        <p
          style={{
            color: '#aaa',
            maxWidth: '700px',
            margin: 'auto',
            fontSize: '18px',
          }}
        >
          The ultimate Free Fire battleground website for tournaments, rewards,
          and pro battles.
        </p>

        <button
          style={{
            marginTop: '30px',
            background: 'orange',
            color: 'black',
            border: 'none',
            padding: '15px 30px',
            fontWeight: 'bold',
            fontSize: '18px',
            borderRadius: '8px',
          }}
        >
          JOIN NOW
        </button>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: '20px',
          padding: '20px',
        }}
      >
        {[
          ['5', 'TOTAL BATTLES'],
          ['1', 'LIVE NOW'],
          ['3', 'UPCOMING'],
          ['25000', 'PRIZE POOL'],
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: '#111',
              border: '1px solid orange',
              padding: '40px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >
            <h1 style={{ color: 'orange', fontSize: '45px' }}>{item[0]}</h1>

            <p style={{ color: '#aaa' }}>{item[1]}</p>
          </div>
        ))}
      </div>

      {/* Tournament Section */}
      <div style={{ padding: '40px 20px' }}>
        <h2
          style={{
            color: 'orange',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          LIVE TOURNAMENTS
        </h2>

        <div
          style={{
            background: '#111',
            padding: '25px',
            borderRadius: '10px',
            border: '1px solid #333',
            marginBottom: '20px',
          }}
        >
          <h3>Squad Clash</h3>
          <p>Entry Fee: ₹50</p>
          <p>Prize Pool: ₹5000</p>

          <button
            style={{
              background: 'orange',
              color: 'black',
              border: 'none',
              padding: '10px 20px',
              marginTop: '10px',
              borderRadius: '6px',
              fontWeight: 'bold',
            }}
          >
            Join Match
          </button>
        </div>
      </div>
    </div>
  );
}
