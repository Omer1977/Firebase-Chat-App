const RoomPage = ({ setRoom, setIsAuth }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].value;
    setRoom(room.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Sohbet Odası</h1>
      <p>Hangi odaya gireceksiniz?</p>
      <input placeholder="Örn: Cuma projeleri" type="text" />
      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          setIsAuth(false);
          localStorage.removeItem("TOKEN");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
